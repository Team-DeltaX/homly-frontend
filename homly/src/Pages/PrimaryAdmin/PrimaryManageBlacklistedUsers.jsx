import Pagetop from "../../Components/PrimaryAdmin/PageTop";
import React, { useEffect, useState } from "react";
import SideNavbar from "../../Components/PrimaryAdmin/SideNavbar";
import Box from "@mui/material/Box";
import {
  Button,
  Grid,
  ThemeProvider,
  Container,
  Typography,
} from "@mui/material";
import theme from "../../HomlyTheme";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import BlacklistedUsersCardNew from "../../Components/PrimaryAdmin/BlacklistedUsersCardNew";
import ViewPopupManage from "../../Components/PrimaryAdmin/ViewPopupManage";
import SearchNew from "../../Components/PrimaryAdmin/SearchNew";
import "../../Components/PrimaryAdmin/Css/fontchange.css";
import { CSVLink } from "react-csv";
import AxiosClient from "../../services/AxiosClient";
import Snackbarp from "../../Components/PrimaryAdmin/snackbar/Snackbarp";

const PrimaryManageBlacklistedUsers = () => {
  const [search, setSearch] = useState("");
  const [popup, setpopup] = useState(false);
  const [selecteduser, setSelecteduser] = useState({});
  const [selectuser, setSelectuser] = useState({});
  const [selectemp, setselectemp] = useState({});
  const [opensn, SetOpensn] = useState(false);
  const [opensnE, SetOpensnE] = useState(false);
  const [blacklistedusers, setBlacklistedusers] = useState([]);
  const [showNav, setShowNav] = useState("nav_grid_deactive");

  const handlepopup = () => {
    setpopup(!popup);
  };

  //csv headers
  const headers = [
    {
      label: "Service Number",
      key: "ServiceNo",
    },
    {
      label: "Black List Reason",
      key: "BlackListReason",
    },
    {
      label: "Blacklisted Date",
      key: "Date",
    },
  ];

  //csv
  const csvLink = {
    filename: "blacklisteduserslist.csv",
    headers: headers,
    data: blacklistedusers,
  };

  const fetch_current_blacklist = () => {
    AxiosClient.get(`/admin/auth/blacklist`)
      .then((res) => {
        setBlacklistedusers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetch_current_blacklist();
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
        {popup && (
          <ViewPopupManage
            handlepopup={handlepopup}
            selecteduser={selecteduser}
            selectuser={selectuser}
            selectemp={selectemp}
            fetch_current_blacklist={fetch_current_blacklist}
            SetOpensn={SetOpensn}
            SetOpensnE={SetOpensnE}
          />
        )}
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
                message={"User Whitelisted Sucessfully!"}
              />
              <Snackbarp
                isOpen={opensnE}
                setIsOpen={SetOpensnE}
                type="error"
                message={"errr in user Whitelisting!"}
              />
            </Grid>

            <Grid
              className="container_grid"
              xs={9}
              sx={{
                backgroundColor: "white",
                borderTopLeftRadius: "20px",
                padding: "0 20px",
                height: "100vh",
              }}
            >
              <Pagetop setShowNav={setShowNav} heading={"Manage Blacklist"} />
              <SearchNew setSearch={setSearch} search={search} />

              <Box
                sx={{
                  marginTop: "1%",
                  maxHeight: { md: "470px", xs: "630px" },
                  overflow: "scroll",
                  padding: "2%",
                }}
              >
                {blacklistedusers
                  .filter((data) => {
                    const serviceNumberString = String(data.ServiceNo);
                    return search.toLowerCase() === ""
                      ? data
                      : serviceNumberString
                          .toLowerCase()
                          .startsWith(search.toLocaleLowerCase());
                  })
                  .map((data) => {
                    console.log("---mapping start---");
                    return (
                      <BlacklistedUsersCardNew
                        handlepopup={handlepopup}
                        data={data}
                        setSelecteduser={setSelecteduser}
                        setSelectuser={setSelectuser}
                        setselectemp={setselectemp}
                      />
                    );
                  })}
              </Box>
              <Box>
                <CSVLink {...csvLink}>
                  {" "}
                  <Button
                    sx={{
                      marginLeft: "2%",
                      marginTop: { xs: "10%", sm: "1.5%" },
                      position: "absolute",
                      top: "88%",
                    }}
                    component="label"
                    variant="contained"
                    startIcon={<PictureAsPdfIcon />}
                  >
                    <Typography>Download Excel</Typography>
                  </Button>
                </CSVLink>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default PrimaryManageBlacklistedUsers;
