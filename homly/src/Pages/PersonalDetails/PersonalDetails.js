import React from "react";
import { useEffect, useState } from "react";

import NavBar from "../../Components/NavBar/NavBar";
import PersonalDetailsGrid from "../../Components/PersonalDetailsGrid/PersonalDetailsGrid";

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

const  userServiceNo = '214002';

const PersonalDetails = () => {

  const [detailsE,setDetailsE] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDetailsE(data);
      });
  }, []);

  const userd = detailsE.filter(obj => {
    return obj.serviceNumber === userServiceNo;
  });
  // let arr =Object.keys(userd[0]) ;
  // {arr[0] && console.log(arr[0])};

  // let len = userd === null ? 0 : userd.length;

  // console.log(len);

  // if(len !== 0){
  //   console.log(userd[0]);
  //   setUser([userd[0]]);
  // }


  // console.log(detailsE);
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
                {userd[0] && <PersonalDetailsGrid id="serviceNo" lable="Service Number" value={userd[0].serviceNumber} editable={false} />}
                {userd[0] && <PersonalDetailsGrid id="name" lable="Name" value={userd[0].name} editable={false} />}
                {userd[0] && <PersonalDetailsGrid id="contactNo" lable="Contact Number" value={userd[0].contactNo} editable={true} />}
                {userd[0] && <PersonalDetailsGrid id="email" lable="Email" value={userd[0].email} editable={true} />}
                {userd[0] && <PersonalDetailsGrid id="nic" lable="NIC Number" value={userd[0].NIC} editable={false} />}
                {userd[0] && <PersonalDetailsGrid id="work" lable="Work Location" value={userd[0].workLocation} editable={false} />}
                {userd[0] && <PersonalDetailsGrid id="address" lable="Residantal Address" value={userd[0].address} editable={true} />}

                
              </CardContent>
              <CardActions>
                <Button variant="contained" disabled>Update</Button>
              </CardActions>
            </Card>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default PersonalDetails;
