import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Vibration, Alert, Text, View } from 'react-native';
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
            Alert.alert('Game over, please play again');
            dispatch(actions.reset()) 
        }
    }

    return (
    <View style={styles.container}>
    <Text h1 style={styles.prompt}>
        {currentPrompt}
    </Text>

    <Text h2 style={styles.count}>       
    Count: {count}
    </Text>
        <View style={styles.bopitButton}>

        <Button
        title="Bop It"
        color="#f5f6fa"
        
        
        onPress={() => handleClick("Bop It")}
        />
        </View>
        <RnSwipeButton />

        <View style={styles.shakeitButton}>
        <Button 
        title="Shake It"
        color="#f5f6fa"

        onPress={() => handleClick("Shake It")}
        />
    </View>
    
    <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#7f8fa6',
        alignItems: 'center',
        margin:2,
        justifyContent: 'center',
    },
    bopitButton: {
        color: "#2f3640",
        backgroundColor: "#c23616",
        borderRadius:100
    },

    shakeitButton: {
        color: "#2f3640",
        backgroundColor: "#c23616",
        borderRadius:100
    },

    prompt: {
        fontSize:40,
        paddingBottom:10
    },
 
    count: {
        fontSize:25,
        paddingBottom:30
    }
});