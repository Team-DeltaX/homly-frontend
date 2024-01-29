import React from "react";
import { ThemeProvider,Button, Stack, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

import theme from "../../../HomlyTheme";

export default function BrowseMoreCom() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          height: "250px",
          bgcolor: "white",
          borderRadius: "10px",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          boxShadow: "20px 17px 55px 10px rgba(194,194,194,1)",
        }}
      >
        <Stack direction="column" sx={{ width: "40%",paddingLeft:'5%',height:'100%',justifyContent:'center', }}>
          <Stack direction="column" sx={{position:{xs:'absolute',sm:'realative',zIndex:1}}}>
              <Stack direction="column">
                <Typography sx={{fontWeight:'bold',fontSize:'1.7rem'}}>Browse For</Typography>
                <Typography sx={{fontWeight:'bold',fontSize:'1.7rem'}}>More Holiday Homes</Typography>
              </Stack>
              <Button variant="outlined" component={Link} to="/HolidayHomes" sx={{width:'80%'}}>Find a Holiday Home</Button>
          </Stack>
        </Stack>
        <Box sx={{ position: "relative", width: "60%" }}>
          <Box
            component="img"
            src="https://homemagazine.nz/wp-content/uploads/2021/06/South-Architects-Alpine-Holiday-Home-10-of-15.jpg"
            alt=""
            sx={{ width: "100%", height: "100%" }}
          />
          <Box
            sx={{
              background:
                {xs:'linear-gradient(295deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 62%)',sm:"linear-gradient(274deg, rgba(255,255,255,0) 40%, rgba(255,255,255,1) 90%)"},
              height: "100%",
              width: "100%",
              position: "absolute",
              top: "0",
              left: "0",
            }}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
