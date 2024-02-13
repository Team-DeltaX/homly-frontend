import React, { useState } from "react";
import {
  Box,
  ThemeProvider,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

import PersonalDetailsGrid from "../PersonalDetailsGrid/PersonalDetailsGrid";

import theme from "../../../HomlyTheme";

const PersonalDetails = () => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const phoneRegex = /^[0-9]{10}$/;


  const [data, setData] = useState({
    serviceNo: "214002",
    name: "John Doe",
    nic: "123456789V",
    work: "Colombo",
    address: "No 1, Colombo",
    contactNo: "0123456798",
    email: "apb@gmail.com",
  });

  const [isEnable, setIsEnable] = useState(false);

  const checkEmail = (email) => {
    return email.length > 0 && !emailRegex.test(email);
  };

  const checkContactNo = (contactNo) => {
    return contactNo.length > 0 && !phoneRegex.test(contactNo);
  };

  const handleEdit = () => {
    setIsEnable(true);
  };
  const handleUpdate = () => {
    setIsEnable(false);
  };

  const handleCancel = () => {
    setIsEnable(false);
  };

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
            margin: { xs: "3% 0 20% 0", sm: "3% 0 0 0" },
          }}
        >
          <Card sx={{ width: { xs: "100%", sm: "90%" } }}>
            <CardContent sx={{ display: "flex", flexDirection: "column" }}>
              <PersonalDetailsGrid
                id="serviceNo"
                lable="Service Number"
                value={data.serviceNo}
                editable={false}
              />
              <PersonalDetailsGrid
                id="name"
                lable="Name"
                value={data.name}
                editable={false}
              />
              <PersonalDetailsGrid
                id="nic"
                lable="NIC Number"
                value={data.nic}
                editable={false}
              />
              <PersonalDetailsGrid
                id="work"
                lable="Work Location"
                value={data.work}
                editable={false}
              />
              <PersonalDetailsGrid
                id="address"
                lable="Residantal Address"
                value={data.address}
                editable={false}
              />
              <PersonalDetailsGrid
                id="contactNo"
                lable="Contact Number"
                value={data.contactNo}
                editable={isEnable}
                setData={(value) => {
                  setData({ ...data, contactNo: value });
                }}
                error={checkContactNo(data.contactNo)}
                helperText={checkContactNo(data.contactNo) ? "Invalid Contact Number" : ""}
              />
              <PersonalDetailsGrid
                id="email"
                lable="Email"
                value={data.email}
                editable={isEnable}
                setData={(value) => {
                  setData({ ...data, email: value });
                }}
                error={checkEmail(data.email)}
                helperText={checkEmail(data.email) ? "Invalid Email" : ""}
              />
            </CardContent>
            <CardActions sx={{justifyContent:'flex-end'}}>
              <Button
                variant="outlined"
                size="small"
                onClick={handleCancel}
              >
                Cancel
              </Button>
              {isEnable ? (
                <Button
                  variant="contained"
                  size="small"
                  sx={{ backgroundColor: "primary.main", marginLeft: "2%" }}
                  onClick={handleUpdate}
                >
                  Update
                </Button>
              ) : (
                <Button
                  variant="contained"
                  size="small"
                  sx={{ backgroundColor: "primary.main", marginLeft: "2%" }}
                  onClick={handleEdit}
                >
                  Edit
                </Button>
              )}
            </CardActions>
          </Card>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default PersonalDetails;
