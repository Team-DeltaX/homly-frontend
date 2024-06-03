import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Container, Grid, ThemeProvider } from "@mui/material";
import SideNavbar from "../../Components/PrimaryAdmin/SideNavbar";
import theme from "../../HomlyTheme";
import Pagetop from "../../Components/PrimaryAdmin/PageTop";
import PrimaryAdminBasicTabs from "../../Components/PrimaryAdmin/Reservations/PrimaryAdminBasicTabs";
import SearchNew from "../../Components/PrimaryAdmin/SearchNew";

const AdminInterface = () => {
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
                padding: "0 10px",
              }}
            >
              <Pagetop setShowNav={setShowNav} heading={"Reservations"} />
              <SearchNew setSearch={setSearch} search={search} />
              <PrimaryAdminBasicTabs setSearch={setSearch} search={search} role={role}/>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default AdminInterface;
