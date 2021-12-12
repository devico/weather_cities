import { GET_CITIES, SET_LOADING, CITIES_ERROR } from "../actions/types";

const inititalState = {
  cities: null,
  loading: false,
  error: null
}

export default (state = inititalState, action) => {
  switch (action.type) {
    case GET_CITIES:
      return {
        ...state,
        cities: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case CITIES_ERROR:
      console.error(action.payload)
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
} 