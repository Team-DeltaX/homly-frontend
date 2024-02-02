import React from "react";
import {
  Box,
  // Stack,
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
import OngoingReservation from "./OngoingReservation";
import PastReservation from "./PastReservation";
import theme from "../../../HomlyTheme";

const MyReservation = () => {
  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabComponent = [<OngoingReservation/>, <PastReservation/>];

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
            margin: { xs: "3% 0 20% 0", sm: "3% 0 0 0" },
          }}
        >
          <Card sx={{ width: { xs: "100%", sm: "90%" } }}>
            <CardContent sx={{ display: "flex", flexDirection: "column" }}>
              <Tabs
                value={value}
                onChange={handleTabChange}
                textColor="secondary"
                aria-label="secondary tabs example"
                sx={{
                  "& .css-1qqs86a-MuiButtonBase-root-MuiTab-root.Mui-selected ":{
                    bgcolor: "primary.main",
                    color: "white",
                    fontWeight:'bold'
                  },
                  "& .css-1qqs86a-MuiButtonBase-root-MuiTab-root ":{
                    padding: "10px !important",
                    border: "1px solid #872341",
                  },
                  
                }}
                // sx={{
                //   width: "100%",
                //   display: "flex",
                //   alignItems: "center",

                // }}
              >
                <Tab value={0} label="Ongoing Reservation" />
                <Tab value={1} label="Past Reservation" />
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
