import {SETUP_REQUESTED, SETUP_SUCCESS, SETUP_FAILED } from './module-actions'

const initialState = {
    setup: {},
    loading: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SETUP_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case SETUP_SUCCESS:
            return {
                ...state,
                setup: action.payload,
                loading: false,
            }
        case SETUP_FAILED:
            return {
                ...state,
                setup: {},
                loading: false
            }
        default:
            return state
    }
}