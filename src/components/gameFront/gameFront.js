import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {If, Else, Then} from 'react-if';

// import GameFront from './src/components/gameFront/gameFront.js'
import StartScreen from './startScreen.js'
import GamePlay from './gamePlay.js'

const initialState = {
  count: -1 //startScreen
  //
}

export default function GameFront() {
  return (
    <>
      <If condition={initialState.count >= 0}>
              <Then>
                <StartScreen />
              </Then>
              <Else>
                <GamePlay />
              </Else>
            </If>
      
    </>
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