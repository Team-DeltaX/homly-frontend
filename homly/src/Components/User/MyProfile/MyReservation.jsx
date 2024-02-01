import React from "react";
import {
  Box,
  Stack,
  //   Container,
  ThemeProvider,
  Typography,
  Tab,
  Tabs,
  Card,
  CardContent,
  //   CardActions,
} from "@mui/material";

// import PersonalDetailsGrid from "../PersonalDetailsGrid/PersonalDetailsGrid";
// import UpdateButton from "../PersonalDetailsGrid/UpdateButton";

// import { EditPersonalDetailsContext } from "../../Contexts/EditPersonalDetailsContext";

import theme from "../../../HomlyTheme";

const MyReservation = () => {
  const [value, setValue] = React.useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabComponent = [<div>tab1</div>, <div>tab2</div>];

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Typography variant="h4">My Reservation</Typography>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: { xs: "3% 0 20% 0" },
          }}
        >
          <Card sx={{ width: { xs: "100%", sm: "90%" } }}>
            <CardContent sx={{ display: "flex", flexDirection: "column" }}>
              <Tabs
                onChange={handleChange}
                textColor="text.secondary"
                indicatorColor="black"
                aria-label="secondary tabs example"
              >
                <Tab label="Ongoing Reservation" value="0" />
                <Tab label="Past Reservation" value="1" />
              </Tabs>
              {tabComponent[value]}
            </CardContent>
          </Card>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default MyReservation;
