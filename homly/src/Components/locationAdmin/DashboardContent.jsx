import React, { useEffect, useState } from "react";
import SideNavbar from "../../Components/PrimaryAdmin/SideNavbar";
import Box from "@mui/material/Box";
import {
  Avatar,
  Button,
  Container,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import theme from "../../HomlyTheme";
import Pagetop from "../../Components/PrimaryAdmin/PageTop";
import DashViewAdminBox from "../../Components/PrimaryAdmin/DashViewAdminBox";
import { Link } from "react-router-dom";
import { PieChart } from "@mui/x-charts/PieChart";
import Income from "../../Components/PrimaryAdmin/Income";
import PDashboardboxes from "./Dashboard/PDashboardboxes";
import CompareLineChart from "./Dashboard/CompareLineChart";
import axios from "axios";
import AxiosClient from "../../services/AxiosClient";

const DashboardContent = () => {
  const [activecount, SetActivecount] = useState(0);
  const [inactivecount, setInactivecount] = useState(0);
  const [latestFourAdmins, setlatestFourAdmins] = useState([]);
  const [NotApprovedCount, SetNotApprovedCount] = useState(0);

  const getNotApprovedCount = () => {
    // axios
    //   .get("http://localhost:8080/admin/auth/notapprovedcount")
    AxiosClient.get("admin/auth/notapprovedcount")
      .then((res) => {
        SetNotApprovedCount(res.data.notapprovedcount);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getadmins = () => {
    // axios
    //   .get(`http://localhost:8080/admin/auth/locationadmin/all`)
    AxiosClient.get("admin/auth/locationadmin/all").then((res) => {
      setlatestFourAdmins(res.data.reverse());
    });
  };

  const getstatus = () => {
    // axios
    //   .get(`http://localhost:8080/admin/auth/holidayhomehstatus`)
    AxiosClient.get("admin/auth/holidayhomehstatus")
      .then((res) => {
        SetActivecount(res.data.Active);
        setInactivecount(res.data.Inactive);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getstatus();
    getadmins();
    getNotApprovedCount();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" style={{ padding: "0px" }}>
        <Grid container sx={{ position: "relative" }}>
          <Grid
            className="container_grid"
            xs={12}
            sx={{
              backgroundColor: "white",
              borderTopLeftRadius: "20px",
              padding: "0 20px",
            }}
          >
            <Box>
              <Grid container sx={{ overflow: "auto", maxHeight: "100vh" }}>
                <Grid
                  item
                  md={8}
                  sx={{
                    backgroundColor: "white",
                    overflow: "auto",
                    maxHeight: { md: "645px", xs: "auto" },
                  }}
                >
                  <Box>
                    <PDashboardboxes />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { sm: "row", xs: "column" },
                      }}
                    >
                      <Income />
                      <Box sx={{ paddingTop: { xs: "5px", sm: "130px" } }}>
                        <PieChart
                          series={[
                            {
                              data: [
                                {
                                  id: 0,
                                  value: activecount,
                                  label: "Active",
                                  color: "#FF5003",
                                },
                                {
                                  id: 1,
                                  value: inactivecount,
                                  label: "Inactive",
                                  color: "#002347",
                                },
                              ],
                              innerRadius: 30,
                              outerRadius: 100,
                              paddingAngle: 5,
                              cornerRadius: 5,
                              startAngle: -90,
                              endAngle: +90,
                              cx: 150,
                              cy: 150,
                            },
                          ]}
                          width={370}
                          height={200}
                        />
                      </Box>
                    </Box>

                    <CompareLineChart />
                  </Box>
                </Grid>
                <Grid
                  item
                  md={4}
                  sx={{
                    height: "100vh",
                    marginLeft: { xs: "40px", md: "0px" },
                  }}
                ></Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default DashboardContent;
