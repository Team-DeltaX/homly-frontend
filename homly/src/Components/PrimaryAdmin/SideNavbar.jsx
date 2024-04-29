import React, { useContext, useEffect, useState } from "react";
import { ThemeProvider, styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../../Assets/images/logo1.png";
import "./Css/navbar.css";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import CloseIcon from "@mui/icons-material/Close";
import theme from "../../HomlyTheme";
import { AuthContext } from "../../Contexts/AuthContext";



export default function SideNavbar({ setShowNav }) {
  const [selectedMenuItem, setSelectedMenuItem] = React.useState("");
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const currentUrl = window.location.href;
    const urlArray = currentUrl.split("/");
    setSelectedMenuItem(urlArray[4]);
  }, []);

  const closeNav = () => {
    setShowNav("nav_grid_deactive");
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    closeNav();
    sessionStorage.clear();
    navigate("/admin/login");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ width: "100%", paddingTop: "20px", fontFamily: theme.fontFamily }}
      >
        <CloseIcon
          className="close_icon"
          sx={{
            color: "white",
            display: "none",
            position: "absolute",
            top: "10px",
            right: "20px",
            fontSize: "2rem",
          }}
          onClick={closeNav}
        />
        <Grid container sx={{ height: "100vh" }}>
          <Box sx={{ width: "100%", margin: "0 auto" }}>
            <Grid container alignItems={"center"} direction={"column"}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={logo1} alt="logoOfHomely" />
              </Box>
            </Grid>
          </Box>
          <Box
            sx={{
              width: "100%",
              margin: "0 auto",
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid
              container
              justifyContent={"flex-start"}
              alignItems={"center"}
              xs={12}
              sx={{
                backgroundColor:
                  selectedMenuItem === "dashboard" ||
                  selectedMenuItem === "viewadmin" ||
                  selectedMenuItem === "addadmin" ||
                  selectedMenuItem === "authorizations"
                    ? "white"
                    : "primary.main",
              }}
              className="sidenav_item"
            >
              <Box justifyContent={"center"}>
                <DashboardOutlinedIcon
                  sx={{
                    color:
                      selectedMenuItem === "dashboard" ||
                      selectedMenuItem === "viewadmin" ||
                      selectedMenuItem === "addadmin" ||
                      selectedMenuItem === "authorizations"
                        ? "black"
                        : "white",
                  }}
                />
              </Box>
              <Box alignItems={"center"}>
                <Link to="/primaryadmin/dashboard" className="sidenav_link">
                  <Typography
                    variant="p"
                    sx={{
                      color:
                        selectedMenuItem === "dashboard" ||
                        selectedMenuItem === "viewadmin" ||
                        selectedMenuItem === "addadmin" ||
                        selectedMenuItem === "authorizations"
                          ? "black"
                          : "white",
                    }}
                  >
                    Dashboard
                  </Typography>
                </Link>
              </Box>
            </Grid>
            <Grid
              container
              justifyContent={"flex-start"}
              alignItems={"center"}
              xs={12}
              sx={{
                backgroundColor:
                  selectedMenuItem === "blacklistedusers"
                    ? "white"
                    : "primary.main",
              }}
              className="sidenav_item"
            >
              <Box justifyContent={"center"}>
                <DoNotDisturbAltIcon
                  sx={{
                    color:
                      selectedMenuItem === "blacklistedusers"
                        ? "black"
                        : "white",
                  }}
                />
              </Box>
              <Box alignItems={"center"}>
                <Link
                  to="/primaryadmin/blacklistedusers/manage"
                  className="sidenav_link"
                >
                  <Typography
                    variant="p"
                    sx={{
                      color:
                        selectedMenuItem === "blacklistedusers"
                          ? "black"
                          : "white",
                      fontWeight: "bold",
                    }}
                  >
                    BlacklistedUsers
                  </Typography>
                </Link>
              </Box>
            </Grid>
            <Grid container xs={12} className="submenu_item">
              <Grid container>
                <Grid
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    padding: "3px",
                    marginTop: "5px",
                  }}
                >
                  <Link
                    to="/primaryadmin/blacklistedusers/manage"
                    className="sidenav_submenulink"
                  >
                    <ManageAccountsOutlinedIcon
                      sx={{
                        color: "white",
                        marginRight: "20px",
                        fontSize: "1.2rem",
                      }}
                    />
                    <Typography variant="p" sx={{ color: "white" }}>
                      {" "}
                      Manage
                    </Typography>
                  </Link>
                </Grid>
                <Grid
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    padding: "3px",
                    marginBottom: "5px",
                  }}
                >
                  <Link
                    to="/primaryadmin/blacklistedusers/history"
                    className="sidenav_submenulink"
                  >
                    <HistoryOutlinedIcon
                      sx={{
                        color: "white",
                        marginRight: "20px",
                        fontSize: "1.2rem",
                      }}
                    />
                    <Typography variant="p" sx={{ color: "white" }}>
                      History
                    </Typography>
                  </Link>
                </Grid>
                <Grid
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    padding: "3px",
                    marginBottom: "5px",
                  }}
                >
                  <Link
                    to="/primaryadmin/blacklistedusers/complaints"
                    className="sidenav_submenulink"
                  >
                    <SpeakerNotesIcon
                      sx={{
                        color: "white",
                        marginRight: "20px",
                        fontSize: "1.2rem",
                      }}
                    />
                    <Typography variant="p" sx={{ color: "white" }}>
                      Complaints
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              container
              justifyContent={"flex-start"}
              alignItems={"center"}
              xs={12}
              sx={{
                backgroundColor:
                  selectedMenuItem === "holidayhomes"
                    ? "white"
                    : "primary.main",
              }}
              className="sidenav_item"
            >
              <Box justifyContent={"center"}>
                <HomeOutlinedIcon
                  sx={{
                    color:
                      selectedMenuItem === "holidayhomes" ? "black" : "white",
                  }}
                />
              </Box>
              <Box alignItems={"center"}>
                <Link to="/primaryadmin/holidayhomes" className="sidenav_link">
                  <Typography
                    variant="p"
                    sx={{
                      color:
                        selectedMenuItem === "holidayhomes" ? "black" : "white",
                    }}
                  >
                    Holiday Homes
                  </Typography>
                </Link>
              </Box>
            </Grid>

            <Grid
              container
              justifyContent={"flex-start"}
              alignItems={"center"}
              xs={12}
              sx={{
                backgroundColor:
                  selectedMenuItem === "reservations"
                    ? "white"
                    : "primary.main",
              }}
              className="sidenav_item"
            >
              <Box justifyContent={"center"}>
                <ListAltOutlinedIcon
                  sx={{
                    color:
                      selectedMenuItem === "reservations" ? "black" : "white",
                  }}
                />
              </Box>
              <Box alignItems={"center"}>
                <Link to="/primaryadmin/reservations" className="sidenav_link">
                  <Typography
                    variant="p"
                    sx={{
                      color:
                        selectedMenuItem === "reservations" ? "black" : "white",
                    }}
                  >
                    Reservations
                  </Typography>
                </Link>
              </Box>
            </Grid>
            <Grid
              container
              justifyContent={"flex-start"}
              alignItems={"center"}
              xs={12}
              sx={{
                backgroundColor:
                  selectedMenuItem === "report" ? "white" : "primary.main",
              }}
              className="sidenav_item"
            >
              <Box justifyContent={"center"}>
                <QueryStatsOutlinedIcon
                  sx={{
                    color: selectedMenuItem === "report" ? "black" : "white",
                  }}
                />
              </Box>
              <Box alignItems={"center"}>
                <Link to="/primaryadmin/report" className="sidenav_link">
                  <Typography
                    variant="p"
                    sx={{
                      color: selectedMenuItem === "report" ? "black" : "white",
                    }}
                  >
                    Report
                  </Typography>
                </Link>
              </Box>
            </Grid>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Box>
              <ManageAccountsIcon sx={{ color: "white", fontSize: "70px" }} />
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h6"
                sx={{ color: "white", marginBottom: "0" }}
              >
                Primary Admin
              </Typography>
            </Box>
            <Box
              onclick={{ handleLogout }}
              sx={{
                display: "flex",
                marginBottom: "35px",
                marginTop: "10px",
                gap: "3px",
                cursor: "pointer",
              }}
            >
              <LogoutOutlinedIcon
                sx={{ color: "grey5", textShadow: "unset",cursor:"pointer" }}
                onClick={handleLogout}
                cursor="pointer"
              />
              <Typography variant="p" sx={{ color: "grey1",cursor:"pointer" }}
              onClick={handleLogout}
              >
                Log Out
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
