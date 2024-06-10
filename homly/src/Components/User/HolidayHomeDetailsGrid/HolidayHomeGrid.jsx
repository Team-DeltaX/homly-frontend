import React from 'react';
import { useState } from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import noImage from '../../../Assets/images/no image.jpg'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 2,
    color: theme.palette.text.secondary,
}));
  

export default function HolidayHomeGrid({MainImage,Image1,Image2}) {
  return (
    <Grid container spacing={1}>
        <Grid xs={12} sm={12} md={8} >
            <Box width="100%" height={{ xs: '100vh', sm: '100vh', md: '200vh' }}>
                <img className="reservationphoto" src={MainImage?MainImage:noImage} alt="HH PHOTO 1" style={{ borderRadius: '2%' }}/>
            </Box>
        </Grid>
        <Grid xs={12} sm={12} md={4}>
            <Stack direction={{ xs: 'row', sm: 'row', md: 'column' }} spacing={1}>
            <Box>
            <img
              className="reservationphoto"
              src={Image1 ? Image1 : noImage}
              alt="HH PHOTO 2"
              style={{ borderRadius: '4%' }}
            />
          </Box>
          <Box>
            <img
              className="reservationphoto"
              src={Image2 ? Image2 : noImage}
              alt="HH PHOTO 3"
              style={{ borderRadius: '4%' }}
            />
          </Box>
            </Stack>
        </Grid>
    </Grid> 
  )
}