import React, {useState} from 'react';
import {Vibration, Alert,StyleSheet, View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../store/game.js';
import SwipeButton from 'rn-swipe-button';

const RnSwipeButton = () => {

const currentPrompt = useSelector( state => state.game.currentPrompt )
const dispatch = useDispatch();
    
function handleClick(button) {
    if(currentPrompt === button){
        dispatch(actions.increment())
        dispatch(actions.randomize())
    } else {
        Vibration.vibrate([100,200,100]);
        Alert.alert('Game over, please play again')
        dispatch(actions.reset())
    }
}

  return (
    <>
    <View styles={styles.swipe}>

    <SwipeButton 
    title="Swipe It"
    onSwipeSuccess = {() => handleClick("Swipe It")}/>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#7f8fa6',
      alignItems: 'center',
      flexDirection:'row',
      justifyContent: 'center',
  },
  swipe: {
      color: "#2f3640",
      backgroundColor: "#c23616",
      borderRadius:100
  }
});

export default RnSwipeButton;
