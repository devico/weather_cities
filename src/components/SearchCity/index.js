import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PropTypes from 'prop-types'
import { getCountries } from '../../actions/countryActions'

const Countries = ({ country: {countries, loading} }) => {
  // const { cities } = Cities
  // let allCities = cities.map(item => {
  //   return {city: item.name, country: item.country}
  // })
  useEffect(() => {
    getCountries()
    //eslint-disable-next-line
  }, [])

  // console.log('City 0: ', allCities[0])


  return (
    <div></div>
    // <Autocomplete
    //   disablePortal
    //   id="combo-box-demo"
    //   options={allCities}
    //   sx={{ width: 300 }}
    //   renderInput={(params) => <TextField {...params} label="City" />}
    // />
  );
}

Countries.propTypes = {
  country: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  country: state.country
})

export default connect(mapStateToProps)(Countries)