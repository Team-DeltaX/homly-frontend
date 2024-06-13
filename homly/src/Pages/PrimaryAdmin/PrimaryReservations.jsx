import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Container, Grid, ThemeProvider } from "@mui/material";
import theme from "../../HomlyTheme";
import SideNavbar from "../../Components/PrimaryAdmin/SideNavbar";
import Pagetop from "../../Components/PrimaryAdmin/PageTop";
import AdminBasicTabs from "../../Components/Reservations/AdminBasicTabs";
import SearchNew from "../../Components/PrimaryAdmin/SearchNew";

const PrimaryReservations = () => {
  const [showNav, setShowNav] = useState("nav_grid_deactive");
  const [search, setSearch] = useState("");
  const role = "PrimaryAdmin";
  return (
    <ThemeProvider theme={theme}>
      <Box
        className="main_continer"
        sx={{
          width: "100%",
          backgroundColor: "primary.main",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl" style={{ padding: "0px" }}>
          <Grid container>
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
                padding: "0 20px",
              }}
            >
              <Pagetop setShowNav={setShowNav} heading={"Reservations"} />
              <SearchNew setSearch={setSearch} search={search} />
              <AdminBasicTabs setSearch={setSearch} search={search} adminRole={role}/>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default PrimaryReservations;

