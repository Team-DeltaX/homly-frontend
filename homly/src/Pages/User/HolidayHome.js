import React from 'react'
import { Box, Container,Typography } from '@mui/material'

import NavBar from '../../Components/NavBar/NavBar'


export default function HolidayHome() {
  return (
    <Box
        className="main_container"
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Container
          maxWidth="xl"
          style={{ padding: 0}}
        >
          <NavBar sideNavBar="none" />

          <Typography  variant='h1'>
            Holiday Home Page
          </Typography>
        </Container>
      </Box>
  )
}
