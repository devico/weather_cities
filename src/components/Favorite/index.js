import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { getFavorites, deleteFavorite } from '../../actions/favoriteActions'
import PropTypes from 'prop-types'
import Cities from '../Cities'

const Favorite = ({ favorite: { favorites, loadingFavorite }, getFavorites, deleteFavorite }) => {
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    getFavorites()
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    setRerender(!rerender)
  }, [favorites])

  const onFavoriteDelete = id => {
    deleteFavorite(id)
  };

  const handleReRender = () => {    
    setRerender(!rerender);
   };


  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Cities onReRender={handleReRender}/>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {favorites !== null && (
            favorites.map((favorite) => (
              // Enterprise card is full width at sm breakpoint
              <Grid item key={favorite.name} xs={12} sm={6} md={4} >
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
                      <Typography variant="h6" color="text.primary">
                        {favorite.temp}, C
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        /Feels like {favorite.feels_like}
                      </Typography>
                    </Box>
                    <ul>
                      <Typography
                          component="li"
                          variant="subtitle1"
                          align="center"
                        >
                          Weather: {favorite.weather}
                        </Typography>
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="center"
                        >
                          Wind speed: {favorite.wind_speed}
                        </Typography>
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="center"
                        >
                          Pressure: {favorite.pressure}
                        </Typography>
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button fullWidth variant='h5' color="primary" onClick={() => onFavoriteDelete(favorite.id)}>
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          )
          }
        </Grid>
      </Container>

    </React.Fragment>
  );
}

Favorite.propTypes = {
  getFavorites: PropTypes.func.isRequired,
  deleteFavorite: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  favorite: state.favorite
})

export default connect(mapStateToProps, { getFavorites, deleteFavorite })(Favorite)
