// import '../App.css';
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
const PrimaryBlacklistHistory = () => {
  const [popup, setpopup] = useState(false);
  const [selecteduser, setSelecteduser] = useState({});

  const handlepopup = () => {
    setpopup(!popup);
  };

  const data = [
    {
      Service_number: 1,
      Nic_number: 27,
      User_name: "Lonnie Antonioni",
      date: "1/31/2023",
      image: "http://dummyimage.com/130x100.png/cc0000/ffffff",
    },
    {
      Service_number: 2,
      Nic_number: 1014,
      User_name: "Carlita Cominello",
      date: "9/13/2023",
      image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    },
    {
      Service_number: 3,
      Nic_number: 929,
      User_name: "Rosene Loweth",
      date: "7/18/2023",
      image: "http://dummyimage.com/187x100.png/dddddd/000000",
    },
    {
      Service_number: 4,
      Nic_number: 32,
      User_name: "Brittan Furby",
      date: "8/25/2023",
      image: "http://dummyimage.com/122x100.png/5fa2dd/ffffff",
    },
    {
      Service_number: 5,
      Nic_number: 9910,
      User_name: "Zebulon Pinson",
      date: "9/25/2023",
      image: "http://dummyimage.com/130x100.png/5fa2dd/ffffff",
    },
    {
      Service_number: 6,
      Nic_number: 56905,
      User_name: "Ara Tembey",
      date: "11/26/2023",
      image: "http://dummyimage.com/157x100.png/5fa2dd/ffffff",
    },
    {
      Service_number: 7,
      Nic_number: 9742,
      User_name: "Alleyn Melliard",
      date: "8/8/2023",
      image: "http://dummyimage.com/156x100.png/dddddd/000000",
    },
    {
      Service_number: 8,
      Nic_number: 6,
      User_name: "Wilfrid Grinyer",
      date: "5/9/2023",
      image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    },
    {
      Service_number: 9,
      Nic_number: 948,
      User_name: "Yvon Inchbald",
      date: "7/17/2023",
      image: "http://dummyimage.com/172x100.png/5fa2dd/ffffff",
    },
    {
      Service_number: 10,
      Nic_number: 4,
      User_name: "Torrie White",
      date: "6/10/2023",
      image: "http://dummyimage.com/162x100.png/5fa2dd/ffffff",
    },
  ];
  //csv headers
  const headers = [
    {
      label: "Service Number",
      key: "Service_number",
    },
    {
      label: "Nic Number",
      key: "Nic_number",
    },
    {
      label: "Blacklisted Date",
      key: "date",
    },
  ];
  const [blacklistedusers, setBlacklistedusers] = useState([]);
  //csv
  const csvLink = {
    filename: "blacklisteduserslist.csv",
    headers: headers,
    data: blacklistedusers,
  };

  useEffect(() => {
    setBlacklistedusers(data);
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
              {/* <Box>  <Search/></Box> */}
              <Box
                sx={{
                  marginTop: "2%",
                  maxHeight: "490px",
                  overflow: "scroll",
                  padding: "3%",
                }}
              >
                {blacklistedusers.map((data) => {
                  return (
                    <BlacklistHistoryCard
                      handlepopup={handlepopup}
                      data={data}
                      setSelecteduser={setSelecteduser}
                    />
                  );
                })}
              </Box>
              <CSVLink {...csvLink}>
              <Button
                sx={{ marginLeft: "5%", marginTop: { xs: "10%", sm: "15px",md:'15px' } }}
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
