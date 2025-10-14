import { TypeIcon } from '@/components/TypeIcon';
import { PokemonCard } from '@/components/PokemonCard';
import { PokeballLoader } from '@/components/PokeballLoader';
import { POKEMON_TYPES, PokemonType, TYPE_COLORS, SimplePokemon } from '@/app/types/pokemon';
import { pokemonApi } from '@/app/services/pokemonApi';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  FlatList,
  Image,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from "@/components/styles/pokedexStyles"; // my styles file


export default function PokedexScreen() {
  // Utility function to capitalize strings
  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
  
  const [selectedType, setSelectedType] = useState<PokemonType | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [pokemonList, setPokemonList] = useState<SimplePokemon[]>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<SimplePokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const ITEMS_PER_PAGE = 10;

  // Load initial Pokemon data
  useEffect(() => {
    loadAllPokemon();
  }, []);

  // Filter Pokemon when type or search query changes
  useEffect(() => {
    let filtered = pokemonList;

    // Filter by type if selected
    if (selectedType) {
      filtered = filtered.filter(pokemon => 
        pokemon.types.includes(selectedType)
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(pokemon => 
        pokemon.name.toLowerCase().includes(query)
      );
    }

    setFilteredPokemon(filtered);
  }, [selectedType, searchQuery, pokemonList]);

  const loadAllPokemon = async () => {
    setLoading(true);
    setError(null);
    try {
      const pokemon = await pokemonApi.getAllSupportedPokemon();
      setPokemonList(pokemon);
    } catch (err) {
      setError('Failed to load Pokémon. Please try again.');
      console.error('Error loading Pokemon:', err);
    } finally {
      setLoading(false);
    }
  };

  const loadPokemonByType = async (type: PokemonType, isLoadMore: boolean = false) => {
    if (isLoadMore) {
      setLoadingMore(true);
    } else {
      setLoading(true);
      setCurrentOffset(0);
      setPokemonList([]);
    }
    
    setError(null);
    
    try {
      const offset = isLoadMore ? currentOffset : 0;
      const [pokemon, totalCount] = await Promise.all([
        pokemonApi.getPokemonByType(type, ITEMS_PER_PAGE, offset),
        pokemonApi.getPokemonCountByType(type)
      ]);
      
      if (isLoadMore) {
        setPokemonList(prev => [...prev, ...pokemon]);
        setCurrentOffset(offset + ITEMS_PER_PAGE);
        setShowLoadMore(false); // Hide button after loading more, user needs to scroll again
      } else {
        setPokemonList(pokemon);
        setCurrentOffset(ITEMS_PER_PAGE);
        setShowLoadMore(false); // Reset button visibility for new type selection
      }
      
      setTotalCount(totalCount);
      setHasMoreData((offset + ITEMS_PER_PAGE) < totalCount);
    } catch (err) {
      setError('Failed to load Pokémon. Please try again.');
      console.error('Error loading Pokemon by type:', err);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  const handleTypeSelect = (type: PokemonType) => {
    setSelectedType(type);
    setIsDropdownOpen(false);
    loadPokemonByType(type);
  };


  const loadMorePokemon = () => {
    if (selectedType && hasMoreData && !loadingMore) {
      loadPokemonByType(selectedType, true);
    }
  };

  const handleEndReached = () => {
    // Show load more button when user reaches the end and there's more data
    if (selectedType && hasMoreData && !loadingMore && !searchQuery) {
      setShowLoadMore(true);
    }
  };


  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeContainer} edges={['top', 'left', 'right', 'bottom']}>
        <View style={styles.container}>
          {/*  Top Section with Background Image + Red Outline */}
          <View style={styles.topSectionContainer}>
            <ImageBackground
              source={require('@/assets/images/pokedex-nobg.png')}
              style={styles.topSection}
              imageStyle={styles.topSectionImage}
              resizeMode="cover"
            >
            {/* Header Section */}
            <View style={styles.header}>
              <Text style={styles.title}>Pokédex</Text>
              <Text style={styles.subtitle}>Choose a type or search by name</Text>
            </View>

            {/* Controls Section */}
            <View style={styles.controlsContainer}>
              {/* Type Dropdown */}
              <View style={styles.dropdownContainer}>
                <TouchableOpacity
                  style={[
                    styles.dropdownButton,
                    selectedType && { backgroundColor: TYPE_COLORS[selectedType] },
                  ]}
                  onPress={() => setIsDropdownOpen(!isDropdownOpen)}
                  activeOpacity={0.8}
                >
                  <View style={styles.dropdownContent}>
                    {selectedType ? (
                      <>
                        <TypeIcon type={selectedType} size={20} />
                        <Text style={[styles.dropdownText, { color: '#FFFFFF' }]}>
                          {capitalize(selectedType)}
                        </Text>
                      </>
                    ) : (
                      <>
                        <Ionicons name="filter" size={18} color="#DC2626" />
                        <Text style={[styles.dropdownText, { color: '#000000' }]}>
                          Type
                        </Text>
                      </>
                    )}
                    <Ionicons
                      name={isDropdownOpen ? 'chevron-up' : 'chevron-down'}
                      size={18}
                      color={selectedType ? '#FFFFFF' : '#DC2626'}
                    />
                  </View>
                </TouchableOpacity>

                {isDropdownOpen && (
                  <View style={styles.dropdownList}>
                    <ScrollView style={styles.typeScrollList} showsVerticalScrollIndicator={false}>
                      {POKEMON_TYPES.map((type) => (
                        <TouchableOpacity
                          key={type}
                          style={[styles.typeOption, { backgroundColor: TYPE_COLORS[type] }]}
                          onPress={() => handleTypeSelect(type)}
                          activeOpacity={0.8}
                        >
                          <TypeIcon type={type} size={24} />
                          <Text style={styles.typeOptionText}>
                            {capitalize(type)}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  </View>
                )}
              </View>

              {/* Search Input */}
              <View style={styles.searchContainer}>
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search Pokémon..."
                  placeholderTextColor="#999"
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                />
                {searchQuery ? (
                  <TouchableOpacity
                    style={styles.clearSearchButton}
                    onPress={() => setSearchQuery('')}
                    activeOpacity={0.7}
                  >
                    <Ionicons name="close-circle" size={18} color="#DC2626" />
                  </TouchableOpacity>
                ) : (
                  <Ionicons name="search" size={18} color="#DC2626" style={styles.searchIcon} />
                )}
              </View>
            </View>

            
            </ImageBackground>
          </View>

          {/* Main Content */}
          <View style={styles.mainContent}>
            {loading ? (
              <View style={styles.loadingContainer}>
                <PokeballLoader 
                  size={48} 
                  showText={true} 
                  text="Loading Pokémon..." 
                  color="#000000" 
                />
              </View>
            ) : error ? (
              <View style={styles.errorContainer}>
                <Ionicons name="alert-circle" size={64} color="#DC2626" />
                <Text style={styles.errorText}>{error}</Text>
                <TouchableOpacity style={styles.retryButton} onPress={loadAllPokemon}>
                  <Text style={styles.retryButtonText}>Try Again</Text>
                </TouchableOpacity>
              </View>
            ) : filteredPokemon.length === 0 ? (
              <View style={styles.emptyContainer}>
                {selectedType || searchQuery ? (
                  <Image 
                    source={require('@/assets/images/source.gif')} 
                    style={styles.emptyGif}
                  />
                ) : (
                  <Ionicons name="library" size={64} color="#DC2626" style={{ opacity: 0.3 }} />
                )}
                <Text style={styles.emptyText}>
                  {selectedType || searchQuery 
                    ? 'No Pokémon found matching your criteria'
                    : 'Select a type or search to discover Pokémon'
                  }
                </Text>
              </View>
            ) : (
              <>
                {/* Pokemon Count Info */}
                {selectedType && !searchQuery && (
                  <View style={styles.countContainer}>
                    <Text style={styles.countText}>
                      Showing {filteredPokemon.length} of {totalCount} {selectedType} Pokémon
                    </Text>
                  </View>
                )}
                
                <FlatList
                  data={filteredPokemon}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => (
                    <PokemonCard 
                      pokemon={item} 
                      onPress={() => {/* TODO: Navigate to Pokemon details */}}
                    />
                  )}
                  numColumns={2}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={styles.pokemonList}
                  columnWrapperStyle={styles.pokemonRow}
                  onEndReached={handleEndReached}
                  onEndReachedThreshold={0.1}
                  ListFooterComponent={() => (
                    selectedType && !searchQuery && hasMoreData && showLoadMore ? (
                      <View style={styles.loadMoreContainer}>
                        <TouchableOpacity
                          style={[styles.loadMoreButton, loadingMore && styles.loadMoreButtonDisabled]}
                          onPress={loadMorePokemon}
                          disabled={loadingMore}
                          activeOpacity={0.8}
                        >
                          {loadingMore ? (
                            <>
                              <PokeballLoader 
                                size={16} 
                                showText={false} 
                              />
                              <Text style={[styles.loadMoreButtonText, { marginLeft: 8 }]}>Loading...</Text>
                            </>
                          ) : (
                            <>
                              <Ionicons name="add" size={20} color="#DC2626" style={{ marginRight: 8 }} />
                              <Text style={styles.loadMoreButtonText}>Load More Pokémon</Text>
                            </>
                          )}
                        </TouchableOpacity>
                      </View>
                    ) : null
                  )}
                />
              </>
            )}
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

