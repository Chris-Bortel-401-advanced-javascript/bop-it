import React from 'react';
import {If, Else, Then} from 'react-if';
import {useSelector} from 'react-redux';
import StartScreen from './startScreen.js'
import GamePlay from './gamePlay.js'


export default function GameFront() {
  const count = useSelector( state => state.game.count )

  return (
    <>
      <If condition={count < 0}>
              <Then>
                <StartScreen />
              </Then>
              <Else>
                <GamePlay />
              </Else>
      </If>
    </>
);
}


//if correct do the increment
// on game button if incorrect, set count -1, display you lose