import React, { useEffect, useState } from "react";
import SideNavbar from "../../Components/PrimaryAdmin/SideNavbar";
import Box from "@mui/material/Box";
import { Container, Grid, ThemeProvider } from "@mui/material";
import theme from "../../HomlyTheme";
import Pagetop from "../../Components/PrimaryAdmin/PageTop";
import AuthorizationsCard from "../../Components/PrimaryAdmin/authorizationsCard";
import Snackbarp from "../../Components/PrimaryAdmin/snackbar/Snackbarp";
import AxiosClient from "../../services/AxiosClient";
import ViewHomeDetailsPop from "../../Components/PrimaryAdmin/ViewHomeDetailsPop";

const PrimaryAuthorizations = () => {
  const [popup, setpopup] = useState(false);
  const [Pendinghomes, SetPendinghomes] = useState([]);
  const [opensn, SetOpensn] = React.useState(false);
  const [opensnE, SetOpensnE] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const [selectedtoview,setSelectedtoview]=useState({})

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
   
  };

  const get_pending_homes = () => {
   
    AxiosClient
      .get(
        `/admin/auth/locationadmin/holidayhome/pending`
      )

      .then((res) => {
        SetPendinghomes(res.data);
      })
      .catch((error) => {
        SetOpensnE(true);
      });
  };

  const [showNav, setShowNav] = useState("nav_grid_deactive");
  useEffect(() => {
    get_pending_homes();
    console.log('pen',Pendinghomes)
  }, []);

  return (
    <ThemeProvider theme={theme}>
       {/* <ViewHomeDetailsPop
        
        open={open}
        onClose={handleClose}
        selectedtoview={selectedtoview}
      /> */}
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
                message={"Error occured!"}
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
              <Pagetop setShowNav={setShowNav} heading={"Approvals"} />

              <Box
                sx={{
                  marginTop: "2%",
                  marginLeft: "2%",
                  maxHeight: "630px",
                  overflow: "scroll",
                }}
              >
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                  {Pendinghomes.map((item) => {
                    return (
                      <AuthorizationsCard
                        setpopup={setpopup}
                        popup={popup}
                        data={item}
                        get_pending={get_pending_homes}
                        Setopensn={SetOpensn}
                        SetopensnE={SetOpensnE}
                        handleClickOpen={handleClickOpen}
                        setSelectedtoview={setSelectedtoview}
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
