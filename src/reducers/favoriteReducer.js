import { GET_FAVORITES, ADD_FAVORITE, DELETE_FAVORITE, SET_LOADING_FAVORITE, FAVORITES_ERROR } from "../actions/types";

const inititalState = {
  favorites: null,
  loadingFavorite: false,
  errorFavorite: null
}

export default (state = inititalState, action) => {
  switch (action.type) {
    case GET_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
        loadingFavorite: false
      }
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
        loadingFavorite: false
      }
    case DELETE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites(favorite => favorite.id !== action.payload),
        loadingFavorite: false
      }
    case SET_LOADING_FAVORITE:
      return {
        ...state,
        loadingFavorite: true
      }
    case FAVORITES_ERROR:
      console.error(action.payload)
      return {
        ...state,
        errorFavorite: action.payload
      }
    default:
      return state
  }
} 