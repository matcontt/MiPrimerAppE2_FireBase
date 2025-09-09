import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={{ uri: 'https://64.media.tumblr.com/f1d3e26a9413a06c4bab6b492942cb7a/tumblr_mutdn0d8KV1r6mhfbo1_1280.jpg' }}
          style={styles.reactLogo}
          contentFit="cover"
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Spinetta</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Dato 1</ThemedText>
        <ThemedText>
          Luis Alberto Spinetta, conocido como "El Flaco", fue un músico, poeta y compositor argentino, considerado uno de los padres del rock en español.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Dato 2</ThemedText>
        <ThemedText>
          Lideró bandas icónicas como Almendra, Pescado Rabioso, Invisible y Spinetta Jade, dejando un legado de álbumes conceptuales y poesía compleja.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Dato 3</ThemedText>
        <ThemedText>
          Su álbum "Artaud" (lanzado como si fuera de Pescado Rabioso) es frecuentemente citado como el mejor álbum en la historia del rock argentino.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
