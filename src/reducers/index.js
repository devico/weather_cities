import { combineReducers } from 'redux'
import cityReducer from './cityReducer'
import weatherReducer from './weatherReducer'
import favoriteReducer from './favoriteReducer'

export default combineReducers({
    city: cityReducer,
    weather: weatherReducer,
    favorite: favoriteReducer
})