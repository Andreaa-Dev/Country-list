import { combineReducers } from 'redux'
import country from './country'
import favorite from './favorite'

const createRootReducer = () =>
  combineReducers({
    countryState: country,
    favoriteState: favorite,
  })

export default createRootReducer
