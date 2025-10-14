import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Text } from 'react-native';
import { Image } from 'expo-image';

interface PokeballLoaderProps {
  size?: number;
  showText?: boolean;
  text?: string;
  color?: string;
}

export const PokeballLoader: React.FC<PokeballLoaderProps> = ({ 
  size = 48, 
  showText = true, 
  text = "Loading Pokémon...",
  color = '#000000'
}) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const spinAnimation = Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    );

    spinAnimation.start();

    // Cleanup to stop animation when component unmounts
    return () => {
      spinAnimation.stop();
    };
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.imageContainer,
          {
            width: size,
            height: size,
            transform: [{ rotate: spin }],
          },
        ]}
      >
        <Image
          source={require('@/assets/images/32px-Poké_Ball_icon.svg.png')}
          style={[styles.pokeballImage, { width: size, height: size }]}
          contentFit="contain"
        />
      </Animated.View>
      {showText && (
        <Text style={[styles.loadingText, { color }]}>{text}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pokeballImage: {
    // no sizes needed
  },
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 16,
    opacity: 0.7,
    fontWeight: '500',
  },
});