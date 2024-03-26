import React, { useEffect, useState } from "react";
import SideNavbar from "../../Components/PrimaryAdmin/SideNavbar";
import Box from "@mui/material/Box";
import { Container, Grid, ThemeProvider } from "@mui/material";
import theme from "../../HomlyTheme";
import Pagetop from "../../Components/PrimaryAdmin/PageTop";

import AuthorizationsCard from "../../Components/PrimaryAdmin/authorizationsCard";
import Model from "../../Components/PrimaryAdmin/Model";
import axios from "axios";
import Snackbarp from "../../Components/PrimaryAdmin/snackbar/Snackbarp";

const PrimaryAuthorizations = () => {
  const [popup, setpopup] = useState(false);
  const [Pending, SetPending] = useState([]);
  const [opensn, SetOpensn] = React.useState(false);
  const [opensnE, SetOpensnE] = React.useState(false);
  const get_pending = () => {
    axios
      .get("http://localhost:3002/admin/auth/locationadmin/holidayhome/pending")
      .then((res) => {
        SetPending(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [showNav, setShowNav] = useState("nav_grid_deactive");
  useEffect(() => {
    get_pending();
  }, []);

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
              <Snackbarp
                isOpen={opensn}
                setIsOpen={SetOpensn}
                type="success"
                message={"Sucessfully Approved HolidayHome!"}
              />
              <Snackbarp
                isOpen={opensnE}
                setIsOpen={SetOpensnE}
                type="error"
                message={"Erro in Approving Holiday Home!"}
              />
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
              <Pagetop setShowNav={setShowNav} heading={"Authorizations"} />

              <Box
                sx={{
                  marginTop: "2%",
                  marginLeft: "2%",
                  maxHeight: "630px",
                  overflow: "scroll",
                }}
              >
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                  {Pending.map((item) => {
                    return (
                      <AuthorizationsCard
                        setpopup={setpopup}
                        popup={popup}
                        data={item}
                        get_pending={get_pending}
                        Setopensn={SetOpensn}
                        SetopensnE={SetOpensnE}
                      />
                    );
                  })}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default PrimaryAuthorizations;
