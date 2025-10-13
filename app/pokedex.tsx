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
  ActivityIndicator,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function PokedexScreen() {



return (
  <SafeAreaProvider>
    <StatusBar style="dark" />
    <SafeAreaView style={styles.safeContainer} edges={['top','left','right','bottom']}>
      <View style={styles.container}>
        <View style={styles.topSectionContainer}> 
            <ImageBackground
              source={require('@/assets/images/pokedex-nobg.png')}
              style={styles.topSection}
              imageStyle={styles.topSectionImage}
              resizeMode="cover"
            >
              <View style={styles.header}>
              <Text style={styles.title}>Pokédex</Text>
              <Text style={styles.subtitle}>Choose a type or search by name</Text>
            </View>
            </ImageBackground>
         </View>   
      </View>
    </SafeAreaView>
  </SafeAreaProvider>
);

}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
  },
  topSectionContainer: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  topSection: {
    borderWidth: 3,
    borderColor: '#DC2626',
    borderRadius: 15,
    paddingBottom: 20,
    overflow: 'visible',
    zIndex: 1,
  },
  topSectionImage: {
    borderRadius: 15,
    opacity: 0.25, // slightly transparent image 
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 17,
    color: '#000000',
    opacity: 0.7,
  },
})