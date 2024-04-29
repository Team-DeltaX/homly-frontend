import React from 'react';
import { useState } from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
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
    <Grid container spacing={2}>
        <Grid md={8} sm={12}>
            <img className="reservation-photo" src={MainImage?MainImage:noImage} alt="HH PHOTO 1" width={"100%"} height={"460vh"} style={{ borderRadius: '2%' }}/>
        </Grid>
        <Grid md={4} sm={12}>
            <Stack spacing={2}>
                <img className="reservation-photo" src={Image1?Image1:noImage} alt="HH PHOTO 2" width={"100%"} height={"222vh"} style={{ borderRadius: '4%' }}/>
                <img className="reservation-photo" src={Image2?Image2:noImage} alt="HH PHOTO 3" width={"100%"} height={"222vh"} style={{ borderRadius: '4%' }}/>
            </Stack>
        </Grid>
    </Grid> 
  )
}