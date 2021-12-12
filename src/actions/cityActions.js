import axios from 'axios';
import { GET_CITIES, SET_LOADING, CITIES_ERROR } from "./types";

export const getCities = (country, region) => {
  
  return async dispatch => {
    setLoading()
    axios
      .get('http://localhost:5000/cities')
      .then(data => {
        if (data.status === 200) {
          dispatch({ 
            type: GET_CITIES,
            payload: data.data });          
        } else {
          console.log('There was something issue in responding server')
        }
      })
      .catch(error => {
       console.error(error);
      });
  }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}
