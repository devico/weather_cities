import { GET_CITIES, SET_LOADING, CITIES_ERROR } from "./types";

export const getCities = () => async dispatch => {
  try {
    setLoading()

    const res = await fetch('/cities')
    const data = await res.json()

    dispatch({
      type: GET_CITIES,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: CITIES_ERROR,
      payload: error.response.data
    })
  }
  
    
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

