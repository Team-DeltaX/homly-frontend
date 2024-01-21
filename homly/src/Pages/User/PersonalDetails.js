import React, { useContext } from "react";

import NavBar from '../../Components/User/NavBar/NavBar'
import PersonalDetailsGrid from "../../Components/User/PersonalDetailsGrid/PersonalDetailsGrid";
import UpdateButton from "../../Components/User/PersonalDetailsGrid/UpdateButton";

import { EditPersonalDetailsContext } from "../../Contexts/EditPersonalDetailsContext";

import {
  Box,
  Container,
  ThemeProvider,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

import theme from "../../HomlyTheme";



const PersonalDetails = () => {
  const { userPersonalDetails } = useContext(EditPersonalDetailsContext)
 
  // console.log(userPersonalDetails);
  

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
                  {userPersonalDetails && (
                    <PersonalDetailsGrid
                      id="serviceNo"
                      lable="Service Number"
                      value={userPersonalDetails.serviceNumber}
                      editable={false}
                    />
                  )}
                  {userPersonalDetails && (
                    <PersonalDetailsGrid
                      id="name"
                      lable="Name"
                      value={userPersonalDetails.name}
                      editable={false}
                    />
                  )}
                  {userPersonalDetails && (
                    <PersonalDetailsGrid
                      id="contactNo"
                      lable="Contact Number"
                      value={userPersonalDetails.contactNo}
                      editable={true}
                    />
                  )}
                  {userPersonalDetails && (
                    <PersonalDetailsGrid
                      id="email"
                      lable="Email"
                      value={userPersonalDetails.email}
                      editable={true}
                    />
                  )}
                  {userPersonalDetails && (
                    <PersonalDetailsGrid
                      id="nic"
                      lable="NIC Number"
                      value={userPersonalDetails.NIC}
                      editable={false}
                    />
                  )}
                  {userPersonalDetails && (
                    <PersonalDetailsGrid
                      id="work"
                      lable="Work Location"
                      value={userPersonalDetails.workLocation}
                      editable={false}
                    />
                  )}
                  {userPersonalDetails && (
                    <PersonalDetailsGrid
                      id="address"
                      lable="Residantal Address"
                      value={userPersonalDetails.address}
                      editable={true}
                    />
                  )}
                </CardContent>
                <CardActions>
                  <UpdateButton />
                </CardActions>
              </Card>
            
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default PersonalDetails;
