const randomPrompt = ['Swipe It', 'Bop It', 'Shake It']

const initialState = {
  count: -1,
  prompts: ['Swipe It', 'Bop It', 'Shake It'],
  currentPrompt: randomPrompt[Math.floor(Math.random() * randomPrompt.length)]
  
}

export default function reducer(state=initialState, action){
  const { type } = action;

  switch(type){
    case 'INCREMENT':
      return {...state,
        count: state.count +1
      }
      case 'RANDOMIZE':
        return {...state,
          currentPrompt: randomPrompt[Math.floor(Math.random() * randomPrompt.length)]
        }
        case 'RESET':
          return {...state,
            count: -1
          }
    default:
      return state
  }
}

export const increment = () => {
  return{
    type: 'INCREMENT',
  }
}

export const randomize = () => {
  return{
    type: 'RANDOMIZE',
  }
}

export const reset = () => {
  return{
    type: 'RESET',
  }
}
