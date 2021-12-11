import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Cities from './cities'

const SearchCity = () => {
  const { cities } = Cities
  let allCities = cities.map(item => {
    return {city: item.name, country: item.country}
  })

  console.log('City 0: ', allCities[0])

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={allCities}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="City" />}
    />
  );
}

export default SearchCity