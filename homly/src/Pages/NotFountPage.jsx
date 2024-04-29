import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Stack,
  ThemeProvider,
} from "@mui/material";
import { Link } from "react-router-dom";

import img from "../Assets/images/404error.jpg";
import theme from "../HomlyTheme";

export default function NotFountPage() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "column",
              padding: "20px",
            }}
          >
            <Box xs={12} md={6}>
              <img src={img} alt="" width={"100%"}  />
            </Box>
            <Stack direction={"column"} sx={{justifyContent:'flex-start',width:'100%' }}>
              <Typography variant="h6">
                The page you’re looking for doesn’t exist.
              </Typography>
              <Button variant="contained" sx={{width:'100px'}} component={Link} to={"/"}>
                Login
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
