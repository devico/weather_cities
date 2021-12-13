import axios from 'axios';
import { GET_FAVORITES, ADD_FAVORITE, DELETE_FAVORITE, SET_LOADING_FAVORITE } from "./types";

export const getFavorites = () => {  
  return async dispatch => {
    setLoadingFavorite()
    axios
      .get('http://localhost:5000/favorites')
      .then(data => {
        if (data.status === 200) {
          dispatch({ 
            type: GET_FAVORITES,
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

export const addFavorite = (favorite) => {
  return async dispatch => {
    setLoadingFavorite()
    axios
      .post('http://localhost:5000/favorites', favorite)
      .then(data => {
        if (data.status === 200) {
          dispatch({ 
            type: ADD_FAVORITE,
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

export const deleteFavorite = (id) => {  
  return async dispatch => {
    setLoadingFavorite()
    axios
      .delete(`http://localhost:5000/favorites/${id}`)
      .then(data => {
        if (data.status === 200) {
          dispatch({ 
            type: DELETE_FAVORITE,
            payload: id });          
        } else {
          console.log('There was something issue in responding server')
        }
      })
      .catch(error => {
       console.error(error);
      });
  }
}

export const setLoadingFavorite = () => {
    return {
        type: SET_LOADING_FAVORITE
    }
}

