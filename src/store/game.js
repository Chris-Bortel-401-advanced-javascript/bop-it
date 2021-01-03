const initialState = {
  count: -1,
  prompts: [
    'Bop It',
    'Shake It',
    'Swipe It'
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
