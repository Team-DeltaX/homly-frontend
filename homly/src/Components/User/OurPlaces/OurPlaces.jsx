import { Grid, ThemeProvider } from '@mui/material'
import React from 'react'
import theme from '../../../HomlyTheme'
import PlacesCard from './PlacesCard'


export default function OurPlaces() {
    return (
        <ThemeProvider theme={theme}>
            <Grid container>
                <Grid item container sm={12} spacing={1}>
                    <Grid item sm={7}>
                        <PlacesCard name="Colombo" />
                    </Grid>
                    <Grid item sm={5}>
                        <PlacesCard name="Colombo" />
                    </Grid>
                </Grid>
                <Grid item container sm={12} spacing={1}>
                    <Grid item sm={4}>
                        <PlacesCard name="Colombo" />
                    </Grid>
                    <Grid item sm={4}>
                        <PlacesCard name="Colombo" />
                    </Grid>
                    <Grid item sm={4}>
                        <PlacesCard name="Colombo" />
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}
