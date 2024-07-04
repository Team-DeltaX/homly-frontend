import React, { useEffect, useState, memo } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography, ThemeProvider } from "@mui/material";
import logo from "../../Assets/images/logo1.png";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import theme from "../../HomlyTheme";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import CloseIcon from "@mui/icons-material/Close";

const SideNavbar = ({ closeNavGrid, setShowNav }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("");
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
      <Box sx={{ width: "100%", paddingTop: "20px", position: "relative" }}>
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
          <Box sx={{ width: "100%", margin: "0 auto" }} className="nav_header">
            <Grid container alignItems={"center"} direction={"column"}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={logo} alt="logoOfHomely" />
              </Box>
              <Box>
                <Typography variant="h5" sx={{ color: "white" }}>
                  Admin
                </Typography>
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
                  selectedMenuItem === "dashboard" ? "white" : "primary.main",
              }}
              className="sidenav_item"
            >
              <Box justifyContent={"center"}>
                <DashboardOutlinedIcon
                  sx={{
                    color: selectedMenuItem === "dashboard" ? "black" : "white",
                  }}
                />
              </Box>
              <Box alignItems={"center"}>
                <Link to="/locationadmin/dashboard" className="sidenav_link">
                  <Typography
                    variant="p"
                    sx={{
                      color:
                        selectedMenuItem === "dashboard" ? "black" : "white",
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
                  selectedMenuItem === "manage" ? "white" : "primary.main",
              }}
              className="sidenav_item"
            >
              <Box justifyContent={"center"}>
                <HomeOutlinedIcon
                  sx={{
                    color: selectedMenuItem === "manage" ? "black" : "white",
                  }}
                />
              </Box>
              <Box alignItems={"center"}>
                <Link to="/locationadmin/manage" className="sidenav_link">
                  <Typography
                    variant="p"
                    sx={{
                      color: selectedMenuItem === "manage" ? "black" : "white",
                      fontWeight: "bold",
                    }}
                  >
                    HolidayHomes Manage
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
                  selectedMenuItem === "details" ? "white" : "primary.main",
              }}
              className="sidenav_item"
            >
              <Box justifyContent={"center"}>
                <HomeOutlinedIcon
                  sx={{
                    color: selectedMenuItem === "details" ? "black" : "white",
                  }}
                />
              </Box>
              <Box alignItems={"center"}>
                <Link to="/locationadmin/details" className="sidenav_link">
                  <Typography
                    variant="p"
                    sx={{
                      color: selectedMenuItem === "details" ? "black" : "white",
                      fontWeight: "bold",
                    }}
                  >
                    HolidayHomes Details
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
                  selectedMenuItem === "feedback" ? "white" : "primary.main",
              }}
              className="sidenav_item"
            >
              <Box justifyContent={"center"}>
                <RateReviewOutlinedIcon
                  sx={{
                    color: selectedMenuItem === "feedback" ? "black" : "white",
                  }}
                />
              </Box>
              <Box alignItems={"center"}>
                <Link to="/locationadmin/feedback" className="sidenav_link">
                  <Typography
                    variant="p"
                    sx={{
                      color:
                        selectedMenuItem === "feedback" ? "black" : "white",
                    }}
                  >
                    Feedback
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
                <Link to="/locationadmin/reservations" className="sidenav_link">
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
                <Link to="/locationadmin/report" className="sidenav_link">
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
                LocationAdmin
              </Typography>
              <Typography variant="p" sx={{ color: "grey4" }}>
                Homly
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
                sx={{ color: "grey5", textShadow: "unset" }}
                onclick={{ handleLogout }}
              />
              <Typography
                variant="p"
                sx={{ color: "grey1" }}
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
};

export default memo(SideNavbar);
