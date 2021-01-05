import React, {useState} from 'react';
import {Vibration, Alert} from 'react-native';

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
    <SwipeButton onSwipeSuccess = {() => handleClick("Swipe It")}/>
    </>
  );
};

export default RnSwipeButton;
