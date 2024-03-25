import React, { useContext, useState } from "react";
import SideNavbar from "../../Components/PrimaryAdmin/SideNavbar";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Box from "@mui/material/Box";
import { CustomTabContext } from "../../Contexts/primryadmin/CustomTabContext";
import {
  Button,
  Container,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import theme from "../../HomlyTheme";
import { Link } from "react-router-dom";
import PageTop from "../../Components/PrimaryAdmin/PageTop";
import CustomTabPanel from "../../Components/PrimaryAdmin/CustomTabPanel";
import { SearchContext } from "../../Contexts/primryadmin/Searchcontext";
import SearchNew from "../../Components/PrimaryAdmin/SearchNew";
const PrimaryViewAdmins = () => {
  const [showNav, setShowNav] = useState("nav_grid_deactive");

  const { load, SetLoad } = useContext(CustomTabContext);
  const { Search, SetSearch } = useContext(SearchContext);

  return (
    <ThemeProvider theme={theme}>
      <Box
        className="main_continer"
        sx={{
          width: "100%",
          backgroundColor: "primary.main",
          height: "100vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Container maxWidth="xl" style={{ padding: "0px" }}>
          <Grid container>
            <Grid
              item
              className={showNav}
              xs={3}
              sx={{ backgroundColor: "primary.main", height: "100vh" }}
            >
              <SideNavbar setShowNav={showNav}></SideNavbar>
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
              <Box>
                <PageTop setShowNav={setShowNav} heading={"View Admins"} />
                <SearchNew setSearch={SetSearch} search={Search}></SearchNew>
              </Box>
              <Box>
                <CustomTabPanel />
              </Box>

              <Box>
                {!load && (
                  <Box>
                    <Link to="/primaryadmin/addadmin">
                      <Button
                        sx={{
                          position: "absolute",
                          top: "92%",
                          right: "6%",
                        }}
                        component="label"
                        variant="contained"
                        startIcon={<AddCircleIcon />}
                      >
                        <Typography sx={{ fontSize: "13px" }}>
                          Add Admin
                        </Typography>
                      </Button>
                    </Link>
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default PrimaryViewAdmins;
