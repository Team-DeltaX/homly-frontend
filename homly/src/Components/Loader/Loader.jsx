import * as React from "react";
import "./Loader.css";
import { Container, Box } from "@mui/material";

const Loader = () => {
  return (
    <Container maxWidth="lg" sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Box sx={{marginTop:'45%'}}>
        <div className="boxes">
          <div className="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default Loader;
