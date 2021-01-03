const initialState = {
  count: -1,
  prompts: ['Swipe It', 'Bop It', 'Shake It']
  
  
  //startScreen
  //
}

export default function reducer(state=initialState, action){
  const { type, payload } = action;

  switch(type){
    case 'INCREMENT':
      return {...state,
        count: state.count +1
      }
      case 'RANDOMIZE':
        console.log(state)
        return {...state,
          prompts: state.prompts
          // [Math.floor(Math.random() * prompts.length)]
        }
    default:
      return state
  }
}



export const increment = (addOne) => {
  return{
    type: 'INCREMENT',
    payload: addOne
  }
}

export const randomize = (addOne) => {
  return{
    type: 'RANDOMIZE',
    payload: addOne
  }
}
