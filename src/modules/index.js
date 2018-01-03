import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import menu from '../containers/base/menu-base-reducer'
import module from '../containers/module/module-reducer'
import dataGrid from '../containers/data-grid/data-grid-reducer'

export default combineReducers({
  routing: routerReducer,
  menu,
  module,
  dataGrid
})