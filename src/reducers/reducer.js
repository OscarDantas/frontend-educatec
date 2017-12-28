const initialState = {
  all: []
}

export default (state = initialState, action) => {  
  switch (action.type) {    
    case 'LISTA_DATA':
      return {
        ...state,
        all: action.payload
      }

    default:
      return state
  }
}