import { ThemeProvider, Card, Stack, Box, Typography } from '@mui/material'
import React from 'react'
import theme from '../../../HomlyTheme'

export default function HolidayHomeCard() {
    return (
        <ThemeProvider theme={theme}>
            <Card sx={{ width: '200px', height: '40vh', position: 'relative' }}>
                <Box
                    component="img"
                    src='https://wgp-cdn.co.uk/OAL/jpg/The-Alaska-lodge,-made-by-Lissett.-The-design-was-inspired-by-the-hunting-and-fishing-traditions-of-Alaska-Image-Lissett-Homes--59626/600/600/'
                    alt='Holiday Home Image'

                    sx={{
                        height: '100%',
                        width: '100%'
                    }}
                />
                <Box sx={{ position: 'absolute', bgcolor: '#e1080869', width: '100%', height: '100%', zIndex: 3,top:0 }}>
                    <Typography>asd</Typography>


                </Box>

            </Card>
        </ThemeProvider>
    )
}
