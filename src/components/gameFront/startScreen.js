import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import * as gameReducers from '../../store/game.js';

export default function startButton() {
    const dispatch = useDispatch();
    // const count = useSelector( state => state.game.count )

    function handleCorrect() {
        dispatch(gameReducers.increment())
    }
    return (
    <View style={styles.container}>
       <Text>
         <button onClick={handleCorrect}>Bop it</button>
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