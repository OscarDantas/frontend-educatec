import { FETCH_DATA_REQUESTED, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED } from './data-grid-actions'

const INITIAL_STATE = {
    data: [{
        key: '1',
        titulo: 'John Brown',
        modalidade: 'New York No. 1 Lake Park',
    }, {
        key: '2',
        titulo: 'Jim Green',
        modalidade: 'London No. 1 Lake Park',
    }, {
        key: '3',
        titulo: 'Joe Black',
        modalidade: 'Sidney No. 1 Lake Park',
    }, {
        key: '4',
        titulo: 'Disabled User',
        modalidade: 'Sidney No. 1 Lake Park',
    }],
    loading: false
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUESTED:
            return ({
                ...state,
                loading: true
            })
        case FETCH_DATA_SUCCESS:
            return ({
                ...state,
                loading: false,
                data: action.payload
            })
        case FETCH_DATA_FAILED:
            return ({
                ...state,
                loading: false
            })
        default:
            return state
    }
}