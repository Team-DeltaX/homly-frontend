import React from "react";
import NavBar from "../../Components/NavBar/NavBar";

import { Box, Container, ThemeProvider, Typography } from "@mui/material";

import theme from "../../HomlyTheme";

const UserSecurity = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        className="main_container"
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl" style={{ padding: 0 }}>
          <Box display={"flex"}>
            <NavBar sideNavBar="block" />
            <Container>
              <Box sx={{ display: "flex", mt: 10 }}>
                <Typography variant="h4">Security</Typography>
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default UserSecurity;
