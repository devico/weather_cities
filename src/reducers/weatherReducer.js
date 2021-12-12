import { GET_WEATHER, GET_CURRENT_WEATHER, SET_LOADING_WEATHER, WEATHER_ERROR } from "../actions/types";

const inititalState = {
  currentWeathers: null,
  weathers: null,
  loadingWeather: false,
  errorWeather: null
}

export default (state = inititalState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        weathers: action.payload,
        loadingWeather: false
      }
    case GET_CURRENT_WEATHER:
      return {
        ...state,
        currentWeathers: action.payload,
        loadingWeather: false
      }
    case SET_LOADING_WEATHER:
      return {
        ...state,
        loadingWeather: true
      }
    case WEATHER_ERROR:
      console.error(action.payload)
      return {
        ...state,
        errorWeather: action.payload
      }
    default:
      return state
  }
} 