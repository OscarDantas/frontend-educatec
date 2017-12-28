import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import listar from './reducer'

export default combineReducers({
  routing: routerReducer,
  listar
})