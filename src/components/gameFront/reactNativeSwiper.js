import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Button, Text, View } from 'react-native'
 
import Swiper from 'react-native-swiper/src'
 
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../store/game.js';

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
 
export default function SwiperComponent(){
  
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
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
        <Text
        title="Swipe It"
        
        onScrollBeginDrag={() => handleClick("Swipe It")}
    />
        </View>
        
      </Swiper>
    )
  
}
 
AppRegistry.registerComponent('myproject', () => SwiperComponent)