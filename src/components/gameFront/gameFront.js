import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import GameButtons from './buttons.js'
// import GameFront from './src/components/gameFront/gameFront.js'

export default function GameFront() {
  return (
// If count negative 1 render start screen 
// otherwise render game buttons
      <GameButtons />
      //if correct do the increment
// on game button if incorrect, set count -1, display you lose
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