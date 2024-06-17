import "./style.css";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Grid, ThemeProvider, Container, Button } from "@mui/material";
import theme from "../../HomlyTheme";
import SideNavbar from "../../Components/PrimaryAdmin/SideNavbar";
import ViewHolidayHomeContent from "../../Components/locationAdmin/CreateHolidayHome/ViewHolidayHome/ViewHolidayHomeContent";
import { Link } from "react-router-dom";
import Pagetop from "../../Components/PrimaryAdmin/PageTop";

const ViewHolidayHome = () => {
  const [showNav, setShowNav] = useState("nav_grid_deactive");

  const [key, setKey] = useState("");

  useEffect(() => {
    const url = window.location.href;
    const urlParts = url.split("/");
    const key = urlParts[urlParts.length - 1];
    setKey(key);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box
        className="main_container"
        sx={{
          width: "100%",
          backgroundColor: "primary.main",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl" style={{ padding: 0 }}>
          <Grid container sx={{ position: "relative" }}>
            <Grid
              className={showNav}
              xs={3}
              sx={{ backgroundColor: "primary.main", height: "100vh" }}
            >
              <SideNavbar setShowNav={setShowNav}></SideNavbar>
            </Grid>
            <Grid
              className="container_grid"
              xs={9}
              sx={{
                backgroundColor: "white",
                borderTopLeftRadius: "20px",
                padding: "10px 30px",
                height: "100vh",
                position: "relative",
              }}
            >
              <Box sx={{ height: "100%", paddingBottom: "9em" }}>
                {/* <PageTitle setShowNav={setShowNav} title={'View Holiday Home'} bell={true} /> */}
                <Pagetop
                  setShowNav={setShowNav}
                  heading={"View Home Details"}
                />
                {key == "view" ? (
                  ""
                ) : (
                  <Link to={"/primaryadmin/authorizations"}>
                    <Button sx={{ margin: "20px" }} variant="contained">
                      Back to Authorizations
                    </Button>
                  </Link>
                )}

                <ViewHolidayHomeContent />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default ViewHolidayHome;
