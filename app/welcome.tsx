import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import{
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/components/styles/WelcomeScreenStyles"; // my styles file

const { width } = Dimensions.get('window');

export default function WelcomeScreen() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/pokedex');
  };

return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <ImageBackground 
        source={require('@/assets/images/bg.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
          
          <View style={styles.contentContainer}>
            
            <View style={styles.topSection}>
              
            </View>

            <View style={styles.titleSection}>
              <Text style={styles.welcomeTitle}>
                Welcome to Pokédex
              </Text>
            </View>

            <View style={styles.bottomSection}>
              <TouchableOpacity 
                style={styles.startButton} 
                onPress={handleGetStarted}  //go to pokedex screen
                activeOpacity={0.8}
              >
                <Text style={styles.startButtonText}>Start Exploring</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

