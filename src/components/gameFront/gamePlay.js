import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useSelector} from 'react-redux';

import Prompts from './prompts.js'

export default function GamePlay() {
    const count = useSelector( state => state.game.count )
    const prompts = useSelector( state => state.game.prompts )

    let randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];

    return (
    <View style={styles.container}>
    <Text>
        
        <h2>Count: {count}</h2>
        <h2>{randomPrompt}</h2>
        <button>Bop it</button>
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