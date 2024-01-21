import React from 'react'
import { Box,Grid, Paper, Typography,ThemeProvider } from '@mui/material'
import theme from '../Homlytheme'

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

import logo from '../assest/images/logo_colored.png';



const Login = () => {
    
  return (
    <ThemeProvider theme={theme}>
        <Box sx={{height:"100vh",position:'relative'}}>
            <Box sx={{backgroundColor:"primary.main",width:"100%",height:'25vh'}} ></Box>
            <Paper  elevation={3}>
                <Box>
                    <img className="colored_logo" src={logo} alt="companyLogo" />
                </Box>
                {/* <Box>
                
                </Box> */}
                



            </Paper>
            <Grid container sx={{position:'fixed',bottom:'15px'}} justifyContent={'center'}>
                <Box sx={{textAlign:'center'}}>
                    <Typography variant="p" sx={{fontSize:'0.8rem'}}>In case of forget your admin password contact Main Admin through email or telephone.</Typography>
                    <Box><Typography variant='p' sx={{display:'flex',alignItems:"center",justifyContent:'center',marginBottom:'3px',marginTop:'5px',fontSize:'0.8rem'}}><EmailIcon sx={{fontSize:"1rem",marginRight:'0.5em',color:'primary.main'}}/>Email - abcdefg@gmail.com</Typography></Box>
                    <Box><Typography variant='p' sx={{display:'flex',alignItems:"center",justifyContent:'center',fontSize:'0.8rem'}}><PhoneIcon sx={{fontSize:"1rem",marginRight:'0.5em',color:'primary.main'}}/>Tel - +94716234580</Typography></Box>
                </Box>
            </Grid>

        </Box>
    </ThemeProvider>
   
  )
}

export default Login