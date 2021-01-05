import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Vibration, Text, View } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../store/game.js';
import RnSwipeButton from './rnSwipeButton';

export default function GamePlay() {
    const count = useSelector( state => state.game.count )
    const currentPrompt = useSelector( state => state.game.currentPrompt )
    const dispatch = useDispatch();
        
    function handleClick(button) {
        if(currentPrompt === button){
            dispatch(actions.increment())
            dispatch(actions.randomize())
        } else {
            Vibration.vibrate([100,200,100]);
            dispatch(actions.reset())

        }
    }

    return (
    <View style={styles.container}>
    <Text h1>
        {currentPrompt}
    </Text>

    <Text h2>       
    Count: {count}
    </Text>

        <Button
        title="Bop It"
        
        onPress={() => handleClick("Bop It")}
        />
        <RnSwipeButton />

    
        <Button
        title="Shake It"

        onPress={() => handleClick("Shake It")}
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