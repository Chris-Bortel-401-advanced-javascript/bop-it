import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import game from './game.js'


const reducer = combineReducers({
  game

})

const store = () => {
  return createStore(reducer, composeWithDevTools());
} 

export default store();