const initialState = {
  count: -1,
  prompts: [
    'bop it',
  'swipe it',
'shake it'
    
  ]  
  
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
        console.log('Fucking State',state)
        return {...state, prompts: state.prompts
      
         
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
