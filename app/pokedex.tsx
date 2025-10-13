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
import { styles } from "@/components/pokedexScreenStyles"; // my styles file

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

