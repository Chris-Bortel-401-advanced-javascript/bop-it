import React, {useState} from 'react';
import {SafeAreaView, View, Text, StatusBar, Button} from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome';

// import thumbIcon from './assets/thumbIcon.png';
// import arrowRight from './assets/arrow-right.png';
// import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../store/game.js';
import SwipeButton from 'rn-swipe-button';

const RnSwipeButton = () => {

const count = useSelector( state => state.game.count )
const currentPrompt = useSelector( state => state.game.currentPrompt )
const dispatch = useDispatch();
    
function handleClick(button) {
    if(currentPrompt === button){
        dispatch(actions.increment())
        dispatch(actions.randomize())
    } else {
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
