


import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import GameFront from './src/components/gameFront/gameFront.js'

export default function GameFront() {
  return (
    <View style={styles.container}>
      <Text>Game Front
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// // import Game from './game.js';
// import React from 'react';
// function GameFront() {
//   return(
//     <h1> GameFront</h1>
//     // < Game />
//   )
// }