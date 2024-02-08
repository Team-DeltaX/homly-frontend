import { React, useEffect } from "react";
import { useState } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  ThemeProvider,
  Button,
} from "@mui/material";

import { Link, useSearchParams } from "react-router-dom";


import theme from "../../HomlyTheme";
import "./UserStyle.css";

import errEmailImg from '../../Assets/images/error-email.jpg'
import verifiedEmailImg from '../../Assets/images/verified-email.jpg'

const EmailVerified = () => {


    const [queryParameters] = useSearchParams();
    const [details, setDetails] = useState({
        message: '',
        verified: '',
    });

    useEffect(() => {
        setDetails({
            ...details,
            message: queryParameters.get("message"),
            verified: queryParameters.get("verified"),
        });

    }, []);

  
  
  return (
    <ThemeProvider theme={theme}>
      <Box
        // className="main_container"
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl" sx={{ padding: 0}}>
          <Container maxWidth="lg" sx={{ display:'flex',alignItems:'center',justifyContent:'center',height:'90vh' }}>
              <Stack direction='column'>
                  <Box component='img' src={details.verified  === "true" ? verifiedEmailImg : errEmailImg} sx={{ filter: "drop-shadow(5px 13px 10px  rgba(0,0,0,0.62))"}} />
                  <Typography variant="h4" sx={{textAlign:'center',color:'text.primary',fontWeight:'bold'}}>{details.message}</Typography>
                  <Button variant="outlined" component={Link} to= {details.verified  === "true" ? "/" : "/Registration"}>
                  {details.verified === "true" ? "Login Now" : "Register Again"}
                  </Button>
              </Stack>
          </Container>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default EmailVerified;
