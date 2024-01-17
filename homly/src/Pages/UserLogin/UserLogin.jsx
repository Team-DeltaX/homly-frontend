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
import "./UserRegistration.css";
import logo from "../../resources/images/logo.png";
import wave from "../../resources/images/wave.png";

const Img = styled("img")({
  // margin: "auto",
  display: "block",
  width: "40%",
  height: "40%%",
  padding: "5%",
  filter: "drop-shadow(17px 18px 90px  #872341)",
  // filter: "drop-shadow(17px 18px 90px -8px rgba(0,0,0,0.64))",
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
        >
          <Grid
            item
            className="registration-box-left mytest"
            xs={12}
            sm={12}
            md={6}
          ></Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
