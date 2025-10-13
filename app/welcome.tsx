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
          {/* Content Container */}
          <View style={styles.contentContainer}>
            {/* Top Safe Area Content */}
            <View style={styles.topSection}>
              {/* Optional top content can go here */}
            </View>

            {/* Main Content - Title Section */}
            <View style={styles.titleSection}>
              <Text style={styles.welcomeTitle}>
                Welcome to Pokédex
              </Text>
            </View>

            {/* Bottom Safe Area Content - Button Section */}
            <View style={styles.bottomSection}>
              <TouchableOpacity 
                style={styles.startButton} 
                onPress={handleGetStarted}
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

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  topSection: {
    flex: 0.2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  titleSection: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  welcomeTitle: {
    fontSize: 52,
    fontWeight: '900',
    textAlign: 'center',
    color: '#ffffffff',
    textShadowColor: '#000000ff',
    textShadowOffset: { width: -4, height: -4 },
    textShadowRadius: 1,
    letterSpacing: 1.5,
    lineHeight: 60,
    maxWidth: width * 0.9,
  },
  bottomSection: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
  },
  startButton: {
    backgroundColor: '#DC2626',
    paddingHorizontal: 50,
    paddingVertical: 18,
    borderRadius: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
    minWidth: width * 0.65,
    maxWidth: width * 0.85,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.8,
  },
});