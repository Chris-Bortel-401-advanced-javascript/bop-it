import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import * as actions from '../../store/game.js';

import Prompts from './prompts.js'
export default function GamePlay() {
    const count = useSelector( state => state.game.count )
    const prompts = useSelector( state => state.game.prompts )
    const dispatch = useDispatch();
    

        
    function handleClick() {
        dispatch(actions.increment())
        console.log('clicked')
    }

    return (
    <View style={styles.container}>
    <Text>
        
    <Prompts />
    </Text>

    <Text h2>
        
      Count: {count}
        {/* <h2>{prompts}</h2> */}
    </Text>
  
        <Button
        title="Bop It"
        onPress={() => handleClick()}
    />
        <Button
        title="Swipe It"
        onPress={() => handleClick()}
    />
        <Button
        title="Shake It"
        onPress={() => handleClick()}
    />
    
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