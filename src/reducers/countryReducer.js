import { GET_COUNTRIES, SET_LOADING, COUNTRIES_ERROR } from "../actions/types";

const inititalState = {
  countries: null,
  loading: false,
  error: null
}

export default (state = inititalState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loadiing: true
      }
    case COUNTRIES_ERROR:
      console.error(action.payload)
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
} 