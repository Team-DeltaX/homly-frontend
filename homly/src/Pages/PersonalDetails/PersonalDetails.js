import React from "react";

import NavBar from "../../Components/NavBar/NavBar";

import {
  Box,
  Container,
  ThemeProvider,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@mui/material";

import theme from "../../HomlyTheme";

const details = [
  { lable: "Name", value: "John Doe", editable: false },
  { lable: "Service Number", value: "10001", editable: false },
  { lable: "NIC", value: "123456789V", editable: false },
  { lable: "Email", value: "abc@gmail.com", editable: true },
  { lable: "Phone Number", value: "1234567890", editable: true },
  { lable: "Address", value: "49,Jaya Mawatha,Colombo 3", editable: true },
  { lable: "Work Location", value: "Colombo", editable: false },
];

const PersonalDetails = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box display={"flex"}>
        <NavBar sideNavBar="block" />
        <Container sx={{ mt: 10, height: "85vh" }}>
          <Typography variant="h4">Personal Details</Typography>
          <Box
            sx={{
              width: "100%",
              height: "90%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Box sx={{width:'90%',height:'90%',backgroundColor:'green',boxShadow: '8px 11px 31px -17px rgba(0,0,0,0.75)',}}>
                           dfgd 
                </Box> */}
            <Card sx={{ width: "90%", height: "90%" }}>
              <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                {details.map((item) => (
                  <Grid container>
                    <Grid item md={4}>
                      <Typography
                        variant="h6"
                        fontWeight={"regular"}
                        component="div"
                      >
                        {item.lable}
                      </Typography>
                    </Grid>
                    <Grid item md={5}>
                      <Typography
                        variant="h6"
                        fontWeight={"regular"}
                        component="div"
                      >
                        {item.value}
                      </Typography>
                    </Grid>
                    <Grid item md={3}>
                      <Button
                        size="small"
                        variant="outline"
                        style={{ display: item.editable ? "block" : "none" }}
                      >
                        Edit
                      </Button>
                    </Grid>
                  </Grid>
                ))}
              </CardContent>
              <CardActions>
                <Button size="small" disabled>Update</Button>
              </CardActions>
            </Card>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default PersonalDetails;
