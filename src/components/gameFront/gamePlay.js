import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import * as actions from '../../store/game.js';
import Prompts from './prompts.js'
export default function GamePlay() {
    const count = useSelector( state => state.game.count )
    const dispatch = useDispatch();
    

        
    function handleClick() {
        dispatch(actions.randomize())
        console.log('clicked')
    }

    return (
    <View style={styles.container}>
    <Text>
        <Prompts />
        <h2>Count: {count}</h2>
        {/* <ul>
          {prompts[Math.floor(Math.random() * prompts.length)]}
        </ul> */}
        {/* <h2>{randomPrompt}</h2> */}
        <button onClick={() => handleClick()}>Bop it</button>
        {/* <button onclick={randomPrompt}>Bop it</button> */}
        <button>Swipe It</button>
        <button>Shake It</button>
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