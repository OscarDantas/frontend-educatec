// Retorne todos os reducers combinados aqui
import { combineReducers } from 'redux';
import LeisReducer from './LeisReducer';

export default combineReducers({
	leis: LeisReducer
});