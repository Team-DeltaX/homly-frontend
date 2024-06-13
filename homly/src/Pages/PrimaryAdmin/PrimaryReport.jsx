import React, { useState } from "react";
import { Container, Grid, ThemeProvider, Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import SideNavbar from "../../Components/PrimaryAdmin/SideNavbar";
import theme from "../../HomlyTheme";
import Pagetop from "../../Components/PrimaryAdmin/PageTop";
import IncomeReport from "../../Components/Common/Report/IncomeReport";
import ReservationReport from "../../Components/Common/Report/ReservationReport";
import BlacklistUserReport from "../../Components/Common/Report/blacklistUserReport";

const PrimaryReport = () => {
  const [showNav, setShowNav] = useState("nav_grid_deactive");
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <ThemeProvider theme={theme}>
      <Box
        className="main_container"
        sx={{
          width: "100%",
          backgroundColor: "primary.main",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl" sx={{ padding: 0 }}>
          <Grid container sx={{ position: "relative" }}>
            <Grid
              className={showNav}
              item
              xs={3}
              sx={{ backgroundColor: "primary.main", height: "100vh" }}
            >
              <SideNavbar setShowNav={setShowNav} />
            </Grid>
            <Grid
              className="container_grid"
              item
              xs={9}
              sx={{
                backgroundColor: "white",
                borderTopLeftRadius: "20px",
                padding: "0 20px",
              }}
            >
              <Pagetop setShowNav={setShowNav} heading="Generate Report" />

              <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                    >
                      <Tab label="Income Report" value="1" />
                      <Tab label="Reservation Report" value="2" />
                      <Tab label="Blacklist User Report" value="3" />
                    </TabList>
                  </Box>
                  <TabPanel value="1">
                    <IncomeReport />
                  </TabPanel>
                  <TabPanel value="2">
                    <ReservationReport />
                  </TabPanel>
                  <TabPanel value="3">
                    Select the Specific Time period
                    <BlacklistUserReport />
                  </TabPanel>
                </TabContext>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default PrimaryReport;
