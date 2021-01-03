// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux'

// import { StyleSheet, Text, View } from 'react-native';
import store from './src/store/index.js';
import GameFront from './src/components/gameFront/gameFront.js'

export default function App() {
  return (
    <Provider store={store}>

      <GameFront />
    </Provider>
    // <View style={styles.container}>
    //   <Text>
    //   </Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
