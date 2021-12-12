import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { getFavorites } from '../../actions/favoriteActions'
import { getWeather } from '../../actions/weatherActions'
import PropTypes from 'prop-types'

const favorites = [
  // {
  //   coord: `Longitude: ${weathers.coord.lon}, Latitude: ${weathers.coord.lat}`,
  //   feels_like: weathers.main.feels_like,
  //   pressure: weathers.main.pressure,
  //   temp: weathers.main.temp,
  //   temp_max: weathers.main.temp_max,
  //   temp_min: weathers.main.temp_max,
  //   name: weathers.name,
  //   wind_speed: weathers.wind.speed,
  //   weather: wth
  // }
];

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

const Favorite = ({ favorite: { favorites, loadingFavorite }, weather: { weathers, loadingWeather }, getFavorites, getWeather }) => {
  const [allFavorites, setAllFavorites] = useState([])
  const [favoritesWeather, setFavoritesWeather] = useState([])
  
  useEffect(() => {
    getFavorites()
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (favorites !== null) {
      let favoritesList = favorites.map(favorite => {
        return { id: favorite.id, name: favorite.title, lon: favorite.lon, lat: favorite.lat }
      })

      setAllFavorites(favoritesList)
    }
  }, [favorites])

  
  if (allFavorites !== null) {
    allFavorites.map(f => {
      console.log('FF')
      // getWeather(f.lat, f.lon)
      // if (!loadingWeather) {
      //   setFavoritesWeather([...favoritesWeather, weathers])
      // }
    })

    
  }
  


  
  console.log('weathers', weathers)

  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Container maxWidth="md" component="main">
        {/* <Grid container spacing={5} alignItems="flex-end">
          {favorites.map((favorite) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={6} md={4} >
              <Card>
                <CardHeader
                  title={favorite.name}
                  subheader={favorite.coord}
                  titleTypographyProps={{ align: 'center' }}
                  // action={tier.title === 'Pro' ? <StarIcon /> : null}
                  action={null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      {favorite.temp}, C
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /Feels like {favorite.feels_like}
                    </Typography>
                  </Box>
                  <ul>
                    <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                      >
                        {favorite.weather}
                      </Typography>
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                      >
                        {favorite.wind}
                      </Typography>
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                      >
                        {favorite.pressure}
                      </Typography>
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid> */}
      </Container>

    </React.Fragment>
  );
}

Favorite.propTypes = {
  favorites: PropTypes.object.isRequired,
  getFavorites: PropTypes.func.isRequired,
  getWeather: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  favorite: state.favorite,
  weather: state.weather
})

export default connect(mapStateToProps, { getFavorites, getWeather })(Favorite)
