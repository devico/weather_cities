import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

const inititalState = {}

const middleWare = [thunk]

const store = createStore(rootReducer, inititalState, composeWithDevTools(applyMiddleware(...middleWare)))

export default store