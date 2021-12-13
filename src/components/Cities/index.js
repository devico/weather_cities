import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types'
import { getCities } from '../../actions/cityActions'
import { addFavorite } from '../../actions/favoriteActions'
import { getWeather } from '../../actions/weatherActions'
import { Preloader } from '../../layout/Preloader'

const Cities = ({ onReRender, city: { cities, loading }, weather: { weathers, loadingWeather }, getCities, addFavorite, getWeather }) => {
  const [allCities, setAllCities] = useState([])
  const [city, setCity] = useState()
  const [, setSelectedCity] = useState()

  useEffect(() => {
    getCities()
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (cities !== null) {
      let citiesList = cities.map(city => {
        return { label: `${city.name} (lon: ${city.coord.lon}, lat: ${city.coord.lat})`, title: city.name, lon: city.coord.lon, lat: city.coord.lat }
      })

      setAllCities(citiesList)
    }
  }, [cities])

  const handleChangeCity = (value) => {
    getWeather(value.lat, value.lon)
    setSelectedCity(value)
  }

  const handleAddToFavorite = () => {
    if (weathers !== null) {
      let wth = weathers.weather.map(w => {
        return w.main
      }).join(', ')

      let cWeather = {
        coord: `Longitude: ${weathers.coord.lon}, Latitude: ${weathers.coord.lat}`,
        feels_like: weathers.main.feels_like,
        pressure: weathers.main.pressure,
        temp: weathers.main.temp,
        temp_max: weathers.main.temp_max,
        temp_min: weathers.main.temp_max,
        name: weathers.name,
        wind_speed: weathers.wind.speed,
        weather: wth
      }
      addFavorite(cWeather)
      setCity(cWeather.name)
      onReRender()
    }   
    
  };

  if (loading) {
    return <Preloader />
  }

  return (
    <Grid container mt={10}>
      <Grid item xs={12} sm={8}>
        <Box display="flex" justifyContent="flex-end" mb={4}>
          <Box mb={{ xs: 3, md: 2 }}>
            <Autocomplete
              id="combo-box-demo"
              options={allCities}
              sx={{ width: 500 }}
              onChange={(e, v) => handleChangeCity(v)}
              key={city}
              renderInput={(params) => <TextField {...params} label="City" />}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Box ml={3} mt={1}>
          <Button variant="contained" color="primary" onClick={() => handleAddToFavorite()}>Add to Favorite</Button>
        </Box>
      </Grid>
    </Grid>
  );
}

Cities.propTypes = {
  city: PropTypes.object.isRequired,
  getCities: PropTypes.func.isRequired,
  getWeather: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  city: state.city,
  weather: state.weather
})

export default connect(mapStateToProps, { getCities, addFavorite, getWeather })(Cities)