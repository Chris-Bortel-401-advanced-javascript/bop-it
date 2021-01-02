import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import buttons from './buttons.js'
import prompts from './prompts.js'

const reducer = combineReducers({
  buttons, prompts
})

const store = () => {
  return createStore(reducer, composeWithDevTools);
} 

export default store();