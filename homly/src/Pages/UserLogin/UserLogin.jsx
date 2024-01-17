import { React } from "react";
import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  ThemeProvider,
  styled,
  Button,
  InputAdornment,
  IconButton,
  TextField,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import BadgeIcon from "@mui/icons-material/Badge";

import theme from "../../HomlyTheme";
import "./UserLogin.css";
import logo from "../../resources/images/logo.png";
import wave from "../../resources/images/wave.png";

const Img = styled("img")({
  display: "block",
  width: "40%",
  height: "40%%",
  padding: "5%",
  filter: "drop-shadow(17px 18px 90px  #872341)",
});

const UserLogin = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container className="registration-box-container">
        <Grid
          container
          sx={{
            // height: "85%",
            backgroundColor: "grey1",
            borderRadius: "10px",
            boxShadow: 1,
          }}
          className="registration-box"
        >
          <Grid item className="registration-box-left" xs={12} sm={12} md={6}>
            <Box>
              <Img src={logo} />
            </Box>
            <Box>
              <img src={wave} className="registration-box-wave " alt="wave" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default UserLogin;
