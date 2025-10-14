import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { TypeIcon } from './TypeIcon';
import { SimplePokemon, TYPE_COLORS } from '@/app/types/pokemon';

interface PokemonCardProps {
  pokemon: SimplePokemon;
  onPress?: () => void;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, onPress }) => {
  // Get main type for card background color
  const primaryType = pokemon.types[0];
  const cardColor = primaryType ? TYPE_COLORS[primaryType] : '#FFFFFF';

  // Get HP, Attack, and Defense stats
  const getStatValue = (statName: string): number => {
    const stat = pokemon.stats.find(s => s.name === statName);
    return stat ? stat.value : 0;
  };

  const hp = getStatValue('hp');
  const attack = getStatValue('attack');
  const defense = getStatValue('defense');

  return (
    <TouchableOpacity
      style={[styles.card, { borderColor: cardColor }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {/* Badge Type - Top Right */}
      <View style={[styles.quarterCircle, { backgroundColor: cardColor }]}>
        <View style={styles.quarterCircleContent}>
          <TypeIcon type={primaryType} size={25} />
        </View>
      </View>

      {/* Pokemon Image */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: pokemon.sprite }}
          style={styles.pokemonImage}
          resizeMode="contain"
        />
      </View>

      {/* Pokemon Info */}
      <View style={styles.infoContainer}>
        {/* Name and ID */}
        <View style={styles.nameContainer}>
          <Text style={styles.pokemonName}>{pokemon.name}</Text>
          <Text style={styles.pokemonId}>#{pokemon.id.toString().padStart(3, '0')}</Text>
        </View>

        {/* Types */}
        <View style={styles.typesContainer}>
          {pokemon.types.map((type, index) => (
            <View key={index} style={[styles.typeChip, { backgroundColor: TYPE_COLORS[type] }]}>
              <TypeIcon type={type} size={16} />
              <Text style={styles.typeText}>{type.charAt(0).toUpperCase() + type.slice(1)}</Text>
            </View>
          ))}
        </View>

        {/* Basic Stats */}
        <View style={[styles.statsContainer, { borderTopColor: cardColor }]}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>HP</Text>
            <Text style={[styles.statValue, { color: cardColor }]}>{hp}</Text>
          </View>
          <View style={[styles.statDivider, { backgroundColor: cardColor }]} />
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>ATK</Text>
            <Text style={[styles.statValue, { color: cardColor }]}>{attack}</Text>
          </View>
          <View style={[styles.statDivider, { backgroundColor: cardColor }]} />
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>DEF</Text>
            <Text style={[styles.statValue, { color: cardColor }]}>{defense}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderWidth: 3,
    borderColor: '#DC2626',
    borderRadius: 12,
    padding: 14,
    marginVertical: 8,
    flex: 1,
    maxWidth: '47%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    position: 'relative',
    overflow: 'hidden',
  },
  quarterCircle: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    borderBottomLeftRadius: 50,
    zIndex: 1,
  },
  quarterCircleContent: {
    position: 'absolute',
    top: 8,
    right: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 12,
  },
  pokemonImage: {
    width: 100,
    height: 100,
  },
  infoContainer: {
    gap: 8,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  pokemonName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  pokemonId: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
    opacity: 0.6,
  },
  typesContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  typeChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  typeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#DC2626', 
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000000',
    opacity: 0.7,
    marginBottom: 2,
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statDivider: {
    width: 1,
    height: 24,
    backgroundColor: '#DC2626', 
    opacity: 0.3,
  },
});