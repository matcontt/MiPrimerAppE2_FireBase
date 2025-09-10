import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HelloWordText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola mundo !! </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgreen',
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    textTransform: 'uppercase',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: 'red',
    textShadowColor: 'blue',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
    fontFamily: 'sans-serif',
    fontStyle: 'italic',
    letterSpacing: 2,

  }
})

export default HelloWordText