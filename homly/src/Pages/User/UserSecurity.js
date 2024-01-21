import React from "react";
import NavBar from '../../Components/User/NavBar/NavBar'


import { Box, Container, ThemeProvider, Typography } from "@mui/material";

import theme from '../../HomlyTheme'

const UserSecurity = () => {
  return (
    
      <ThemeProvider theme={theme}>
        <Box display={'flex'}>
          <NavBar sideNavBar='block'/>
          <Container>
            <Box sx={{ display: "flex", mt: 10 }}>
              <Typography variant="h4">Personal Details</Typography>
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
      

    
  );
};

export default UserSecurity;