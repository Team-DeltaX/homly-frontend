import React, { useContext } from "react";
import {
  Box,
  ThemeProvider,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

import PersonalDetailsGrid from "../PersonalDetailsGrid/PersonalDetailsGrid";
import UpdateButton from "../PersonalDetailsGrid/UpdateButton";

import { EditPersonalDetailsContext } from "../../Contexts/EditPersonalDetailsContext";

import theme from "../../HomlyTheme";


const PersonalDetailsCom = () => {
    const { userPersonalDetails } = useContext(EditPersonalDetailsContext);
  return (
    <ThemeProvider theme={theme}>
      <Box>
          <Typography variant="h4">Personal Details</Typography>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin:{xs:'3% 0 20% 0',sm:'3% 0 0 0'}
            }}
          >
            {/* <Box sx={{width:'90%',height:'90%',backgroundColor:'green',boxShadow: '8px 11px 31px -17px rgba(0,0,0,0.75)',}}>
                           dfgd 
                </Box> */}
            
              <Card sx={{ width: {xs:"100%",sm:"90%"}}}>
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
                <CardActions sx={{width:'92%',justifyContent:"flex-end"}}>
                  <UpdateButton />
                </CardActions>
              </Card>
            
          </Box>
      </Box>
    </ThemeProvider>
  );
};

export default PersonalDetailsCom;
