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
import SimpleCharts from "../../Components/PrimaryAdmin/Simplecharts";
import { PieChart } from "@mui/x-charts/PieChart";
import Income from "../../Components/PrimaryAdmin/Income";
import PDashboardboxes from "../../Components/PrimaryAdmin/PDashboardboxes";
import SimpleLineChart from "../../Components/PrimaryAdmin/SimpleLineChart";
import axios from "axios";

const PrimaryDashboard = () => {
  const [showNav, setShowNav] = useState("nav_grid_deactive");
  const [activecount, SetActivecount] = useState(0);
  const [inactivecount, setInactivecount] = useState(0);

  const getstatus = () => {
    axios
      .get("http://localhost:3002/admin/auth/hhstatus")
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
              item
              className={showNav}
              xs={3}
              sx={{ backgroundColor: "primary.main" }}
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
              <Pagetop setShowNav={setShowNav} heading={"Dashboard"} />
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

                      <SimpleLineChart />
                    </Box>
                  </Grid>
                  <Grid item md={4} sx={{ height: "100vh" }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          backgroundColor: "#E9E9E9",
                          padding: "1px",
                          margin: "10px",
                          borderRadius: "20px",
                        }}
                      >
                        <Box>
                          <Typography variant="h6" style={{ margin: "3px" }}>
                            Location Admins
                          </Typography>
                        </Box>

                        <Box>
                          <DashViewAdminBox color={"#253DA1"} />
                        </Box>
                        <Box>
                          <DashViewAdminBox color={"pink"} />
                        </Box>
                        <Box>
                          <DashViewAdminBox color={"#77ccff"} />
                        </Box>
                        <Box>
                          <DashViewAdminBox color={"#f5c77e"} />
                        </Box>

                        <Box>
                          <Link to="/primaryadmin/viewadmin">
                            <Button sx={{ color: "#19BDFF" }}>
                              <Typography>See More</Typography>
                            </Button>
                          </Link>
                        </Box>
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            backgroundColor: "#E9E9E9",
                            padding: "1px",
                            margin: "10px",
                            borderRadius: "20px",
                          }}
                        >
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
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                columnGap: "20px",
                                padding: "10px",
                                margin: "7px",
                                background: "white",
                                borderRadius: "10px",
                              }}
                            >
                              <Box>
                                <Avatar sx={{ bgcolor: "red" }}>6</Avatar>
                              </Box>
                              <Box>|</Box>
                              <Box>Requested Authorizations</Box>
                            </Box>
                            <Box>
                              {" "}
                              <Link to="/primaryadmin/authorizations">
                                <Button
                                  sx={{
                                    color: "#19BDFF",
                                    fontFamily: "Roboto Flex",
                                  }}
                                >
                                  <Typography>See More</Typography>
                                </Button>
                              </Link>
                            </Box>
                          </Box>
                        </Box>
                        <Box></Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default PrimaryDashboard;
