import React, { useState } from "react";
import {
  Box,
  ThemeProvider,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

import PersonalDetailsGrid from "../PersonalDetailsGrid/PersonalDetailsGrid";

import theme from "../../../HomlyTheme";

const PersonalDetails = () => {
    const [contactNo, setContactNo] = useState("");
    const [email, setEmail] = useState("");
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
                value={"214002"}
                editable={false}
              />
              <PersonalDetailsGrid
                id="name"
                lable="Name"
                value={"214002"}
                editable={false}
              />
              <PersonalDetailsGrid
                id="nic"
                lable="NIC Number"
                value={"214002"}
                editable={false}
              />
              <PersonalDetailsGrid
                id="work"
                lable="Work Location"
                value={"214002"}
                editable={false}
              />
              <PersonalDetailsGrid
                id="address"
                lable="Residantal Address"
                value={"214002"}
                editable={false}
              />
              <PersonalDetailsGrid
                id="contactNo"
                lable="Contact Number"
                value={"0123456798"}
                editable={true}
                setContactNo={setContactNo}
              />
              <PersonalDetailsGrid
                id="email"
                lable="Email"
                value={"0123456798"}
                editable={true}
                setEmail={setEmail}
              />
            </CardContent>
          </Card>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default PersonalDetails;
