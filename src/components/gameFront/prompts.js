import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useSelector} from 'react-redux';


export default function Prompts() {
    const currentPrompt = useSelector( state => state.game.currentPrompt )
    

    return (
    <View style={styles.container}>
    <Text h1>
        {currentPrompt}
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

