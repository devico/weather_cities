import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Cities from './components/Cities'
import WeatherCurrent from './components/WeatherCurrent'
import Favorite from './components/Favorite'

const theme = createTheme();

const MainPage = () => {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <WbSunnyIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Weather Cities
          </Typography>
        </Toolbar>
      </AppBar>
      <main>

        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >

          <Container>
            <WeatherCurrent />
            <Cities />
            <Favorite />
          </Container>
        </Box>
      </main>

    </ThemeProvider>
  );
}

export default MainPage;