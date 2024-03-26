import PageTop from "../../Components/PrimaryAdmin/PageTop";
import React, { useEffect, useState } from "react";
import SideNavbar from "../../Components/PrimaryAdmin/SideNavbar";
import ViewPopupHistory from "../../Components/PrimaryAdmin/ViewPopupHistory";
import Box from "@mui/material/Box";
import {
  Button,
  Container,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import theme from "../../HomlyTheme";
import BlacklistHistoryCard from "../../Components/PrimaryAdmin/BlacklistHistoryCard";
import { CSVLink } from "react-csv";
import SummarizeIcon from "@mui/icons-material/Summarize";
import SearchNew from "../../Components/PrimaryAdmin/SearchNew";
import axios from "axios";
  const PrimaryBlacklistHistory = () => {
  const [search, setSearch] = useState("");
  const [popup, setpopup] = useState(false);
  const [selecteduser, setSelecteduser] = useState({});
  const [SelectEmp, SetSelectEmp] = useState({});
  const [SelectUser, SetSelectUser] = useState({});

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
      label: "Removed Date",
      key: "RemovedDate",
    },
    {
      label: "Blacklisted Date",
      key: "BlacklistedDate",
    },
    {
      label: "Blacklist Reason",
      key: "Addreason",
    },
    {
      label: "Removed Reason",
      key: "RemoveReason",
    },
  ];
  const [blacklisthistory, setBlacklisthistory] = useState([]);
  //csv
  const csvLink = {
    filename: "blacklisteduserslist.csv",
    headers: headers,
    data: blacklisthistory,
  };

  const getblacklisthistory = () => {
    axios
      .get(`${global.API_BASE_URL}/admin/auth/blacklisthistory`)
      .then((res) => {
        const sortedData = res.data.sort(
          (a, b) => -(a.BlackListHistoryId - b.BlackListHistoryId)
        );

        setBlacklisthistory(sortedData);

        console.log("blacklist history fetched");
      })
      .catch(() => {
        console.log("error in getting blacklist history");
      });
  };

  useEffect(() => {
    getblacklisthistory();
  }, []);

  const [showNav, setShowNav] = useState("nav_grid_deactive");

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
          <ViewPopupHistory
            handlepopup={handlepopup}
            selecteduser={selecteduser}
            SelectEmp={SelectEmp}
            SelectUser={SelectUser}
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
              <PageTop
                setShowNav={setShowNav}
                heading={"Blacklist User History"}
              />
              <SearchNew setSearch={setSearch} search={search} />

              <Box
                sx={{
                  marginTop: "2%",
                  maxHeight: { md: "470px", xs: "630px" },
                  overflow: "scroll",
                  padding: "1.5%",
                }}
              >
                {blacklisthistory
                  .filter((data) => {
                    return search.toLowerCase() === ""
                      ? data
                      : data.ServiceNo.toLowerCase().startsWith(
                          search.toLocaleLowerCase()
                        );
                  })
                  .map((data) => {
                    return (
                      <BlacklistHistoryCard
                        handlepopup={handlepopup}
                        data={data}
                        setSelecteduser={setSelecteduser}
                        SetSelectEmp={SetSelectEmp}
                        SetSelectUser={SetSelectUser}
                      />
                    );
                  })}
              </Box>
              <CSVLink {...csvLink}>
                <Button
                  sx={{
                    marginLeft: "2%",
                    marginTop: { xs: "10%", sm: "1.5%" },
                    position: "absolute",
                    top: "88%",
                  }}
                  component="label"
                  variant="contained"
                  startIcon={<SummarizeIcon />}
                >
                  <Typography>Download Excel</Typography>
                </Button>
              </CSVLink>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default PrimaryBlacklistHistory;
