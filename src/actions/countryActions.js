import { GET_COUNTRIES, SET_LOADING, COUNTRIES_ERROR } from "./types";

export const getCountries = () => async dispatch => {
  try {
    setLoading()

    const res = await fetch('/countries')
    const data = await res.json()

    dispatch({
      type: GET_COUNTRIES,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: COUNTRIES_ERROR,
      payload: error.response.data
    })
  } 
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

