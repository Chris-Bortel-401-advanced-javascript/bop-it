import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function GamePlay() {
    return (
    <View style={styles.container}>
    <Text>
        <h1>Prompt</h1>
        <h2> Count</h2>
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