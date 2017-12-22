export default (state = {}, action) => {
	switch (action.type){
		case 'FETCH_LEIS':
			return { ...state, all: action.payload.data };

		default:
			return state;
	}
};