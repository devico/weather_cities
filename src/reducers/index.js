import { combineReducers } from 'redux'
import cityReducer from './cityReducer'
import countryReducer from './countryReducer'

export default combineReducers({
    city: cityReducer,
    country: countryReducer
})