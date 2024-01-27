import { Box, ThemeProvider } from '@mui/material'
import React from 'react'
import theme from '../../../HomlyTheme'

export default function PlacesCard(props) {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: '100%', height: '100%', bgcolor: 'primary.main', margin: '7px' }}>
                {props.name}
                </Box>
        </ThemeProvider>
    )
}
