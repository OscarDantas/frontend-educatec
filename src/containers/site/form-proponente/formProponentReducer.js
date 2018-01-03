const INITIAL_STATE = {
    showModalIntercorrencia: false,
    loading: false,
    formValues: null,
    error: false,
    errorMessage: null,
    responseTimestamp: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'MODAL_INTERCORRENCIA_VISIBILITY':
            return {...state, showModalIntercorrencia:action.payload}
        case 'MODAL_INTERCORRENCIA_SAVED':
            return {...state, 
                    formValues: action.payload, 
                    showModalIntercorrencia:false,
                    error:false, 
                    errorMessage:null,
                    responseTimestamp: Date.now()}

        case 'MODAL_INTERCORRENCIA_ERROR':
            return {...state, 
                    formValues: null,
                    showModalIntercorrencia:true, 
                    error: true, 
                    errorMessage: action.payload,
                    responseTimestamp: Date.now()}
        default:
            return state;
    }
}