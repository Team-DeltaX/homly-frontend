import React from 'react'
import { Box, Button, Container, Typography, Grid, ThemeProvider } from '@mui/material';
import {Link} from 'react-router-dom'

import img from '../Assets/images/404error.jpg'
import theme from '../HomlyTheme';

export default function NotFountPage() {
    return (
        <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh'
          }}
        >
          <Container maxWidth="md">
            <Grid container spacing={2}>
              <Grid xs={6}>
                <Typography variant="h1">
                  404
                </Typography>
                <Typography variant="h6">
                  The page you’re looking for doesn’t exist.
                </Typography>
                <Button variant="contained" component={Link} to={"/"}>Login</Button>
              </Grid>
              <Grid xs={6}>
                <img
                  src={img}
                  alt=""
                  width={500} height={250}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
        </ThemeProvider>
      );
}
