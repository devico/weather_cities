import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types'
import { getCurrentWeather } from '../../actions/weatherActions'
import { Preloader } from '../../layout/Preloader'

const WeatherCurrent = ({ weather: { currentWeathers, loadingWeather }, getCurrentWeather }) => {
  const [currentWeather, serCurrentWeather] = useState()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function () { }, function () { }, {});

    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      getCurrentWeather(position.coords.latitude, position.coords.longitude)
    }, function (e) {
      console.log("Error :", e);
    }, {
      enableHighAccuracy: true
    });

  }, [])

  useEffect(() => {
    if (currentWeathers) {
      let wth = currentWeathers.weather.map(w => {
        return w.main
      }).join(', ')

      let cWeather = {
        coord: `Longitude: ${currentWeathers.coord.lon}, Latitude: ${currentWeathers.coord.lat}`,
        feels_like: currentWeathers.main.feels_like,
        pressure: currentWeathers.main.pressure,
        temp: currentWeathers.main.temp,
        temp_max: currentWeathers.main.temp_max,
        temp_min: currentWeathers.main.temp_max,
        name: currentWeathers.name,
        wind_speed: currentWeathers.wind.speed,
        weather: wth
      }
      serCurrentWeather(cWeather)
    }

  }, [currentWeathers])

  if (loadingWeather) {
    return <Preloader />
  }

  console.log('weathers', currentWeathers)


  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={2}></Grid>
        <Grid item xs={12} sm={9}>
          <Typography
            component="h1"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Weather on current position:
          </Typography>
          {currentWeather && (
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" color="textSecondary">
                  City name: {currentWeather.name}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  Coordinates: {currentWeather.coord}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  Weather: {currentWeather.weather}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  Temperature: {`${currentWeather.temp}, C`}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  Feels like: {`${currentWeather.feels_like}, C`}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  Wind speed: {currentWeather.wind_speed}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  Pressure: {currentWeather.pressure}
                </Typography>

              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>
    </>
  );
}

WeatherCurrent.propTypes = {
  weather: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  weather: state.weather
})

export default connect(mapStateToProps, { getCurrentWeather })(WeatherCurrent)