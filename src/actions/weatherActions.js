import axios from 'axios';
import { GET_WEATHER, GET_CURRENT_WEATHER, SET_LOADING_WEATHER, WEATHER_ERROR } from "./types";

export const getCurrentWeather = (lat, lon) => {
  
  return async dispatch => {
    setLoadingWeather()
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=d2a37a1c9b9f3b78d79cdc542081acfd`)
      .then(data => {
        if (data.status === 200) {
          dispatch({ 
            type: GET_CURRENT_WEATHER,
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

export const getWeather = (lat, lon) => {
  
  return async dispatch => {
    setLoadingWeather()
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=d2a37a1c9b9f3b78d79cdc542081acfd`)
      .then(data => {
        if (data.status === 200) {
          dispatch({ 
            type: GET_WEATHER,
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

export const setLoadingWeather = () => {
    return {
        type: SET_LOADING_WEATHER
    }
}

