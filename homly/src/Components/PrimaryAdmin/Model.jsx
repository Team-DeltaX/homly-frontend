import { Box, Button, Typography, ThemeProvider } from "@mui/material";
// import CloseIcon from '@mui/icons-material/Close';
// import { useState } from "react";
import theme from "../../HomlyTheme";
import CancelIcon from "@mui/icons-material/Cancel";

const Model = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: "fixed",
          left: "0",
          right: "0",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: "1000",
        }}
        onClick={() => {
          props.setpopup(!props.popup);
        }}
      >
        <Box>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              height: "200px",
              width: "400px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Button
              sx={{
                position: "absolute",
                right: "0px",
                top: "0px",
                padding: "10px",
                color: "black",
              }}
              onClick={() => {
                props.setpopup(!props.popup);
              }}
            >
              <CancelIcon />
            </Button>
            <Box>
              <Typography variant="h6">
                Are You sure You Want to Decline?
              </Typography>
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{ background: "#39e75f", margin: "10px" }}
              >
                Yes
              </Button>
              <Button
                variant="outlined"
                sx={{ margin: "10px" }}
                onClick={() => {
                  props.setpopup(!props.popup);
                }}
              >
                No
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default Model;
