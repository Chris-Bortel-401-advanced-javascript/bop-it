import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
export default function Prompts() {
    const prompts = useSelector( state => state.game.prompts )
    return (
    <View style={styles.container}>
    <Text h1>
          {prompts[Math.floor(Math.random() * prompts.length)]}
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

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import {useSelector} from 'react-redux';


// export default function Prompts() {

//     return (
//     <View style={styles.container}>
//     <Text>
//         <h1>Prompt Me</h1>
//     </Text>
//     <StatusBar style="auto" />
//     </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });