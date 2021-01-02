import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import GameFront from './src/components/gameFront/gameFront.js'
import StartScreen from './startScreen.js'
// import GameButtons from './buttons.js'

export default function GameFront() {
  return (
//if suych start screen 
// if not render gamscreen
      <StartScreen />
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
// If count negative 1 render start screen 
// otherwise render game buttons

//if correct do the increment
// on game button if incorrect, set count -1, display you lose