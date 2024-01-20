import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import NavBar from "../../Components/NavBar/NavBar";
import PersonalDetailsGrid from "../../Components/PersonalDetailsGrid/PersonalDetailsGrid";
import EditPersonalDetailsContextProvider from "../../Contexts/EditPersonalDetailsContext";

import {
  Box,
  Container,
  ThemeProvider,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

import theme from "../../HomlyTheme";

const userServiceNo = "214002";

const PersonalDetails = () => {

  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://65ac00f8fcd1c9dcffc76f52.mockapi.io/homly/api/employee`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const userd = APIData.filter((obj) => {
    return obj.serviceNumber === userServiceNo;
  });

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
                <EditPersonalDetailsContextProvider>
                  {userd[0] && (
                    <PersonalDetailsGrid
                      id="serviceNo"
                      lable="Service Number"
                      value={userd[0].serviceNumber}
                      editable={false}
                    />
                  )}
                  {userd[0] && (
                    <PersonalDetailsGrid
                      id="name"
                      lable="Name"
                      value={userd[0].name}
                      editable={false}
                    />
                  )}
                  {userd[0] && (
                    <PersonalDetailsGrid
                      id="contactNo"
                      lable="Contact Number"
                      value={userd[0].contactNo}
                      editable={true}
                    />
                  )}
                  {userd[0] && (
                    <PersonalDetailsGrid
                      id="email"
                      lable="Email"
                      value={userd[0].email}
                      editable={true}
                    />
                  )}
                  {userd[0] && (
                    <PersonalDetailsGrid
                      id="nic"
                      lable="NIC Number"
                      value={userd[0].NIC}
                      editable={false}
                    />
                  )}
                  {userd[0] && (
                    <PersonalDetailsGrid
                      id="work"
                      lable="Work Location"
                      value={userd[0].workLocation}
                      editable={false}
                    />
                  )}
                  {userd[0] && (
                    <PersonalDetailsGrid
                      id="address"
                      lable="Residantal Address"
                      value={userd[0].address}
                      editable={true}
                    />
                  )}
                </EditPersonalDetailsContextProvider>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default PersonalDetails;
