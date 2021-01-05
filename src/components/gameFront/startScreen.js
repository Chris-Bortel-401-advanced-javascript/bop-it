import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useDispatch} from 'react-redux';
import { StyleSheet, Button, Text, View } from 'react-native';

import * as gameReducers from '../../store/game.js';

export default function StartScreen() {
    const dispatch = useDispatch();

    function handleCorrect() {
        dispatch(gameReducers.increment())
    }

    return (

    <View style={styles.container}>
    <Text h1 style={styles.welcome}>
    Press
    </Text>
    
    <View style={styles.bopitButton}>
    <Button
        title="Bop It"
        color="#f5f6fa"
        onPress={() => handleCorrect()}
    />
    </View>

    <Text h1 style={styles.welcome}>
    To Begin
    </Text> 
    
    <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7f8fa6',
        alignItems: 'center',
        justifyContent: 'center', 
    },

    bopitButton: {
        color: "#2f3640",
        backgroundColor: "#c23616",
        borderRadius:100, 
    },

    welcome: {
        fontSize:30,
        paddingBottom:10
    },
});