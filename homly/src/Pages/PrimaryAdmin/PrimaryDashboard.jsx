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
import PDashboardboxes from "../../Components/PrimaryAdmin/PDashboardboxes";
import CompareLineChart from "../../Components/PrimaryAdmin/CompareLineChart";
import AxiosClient from "../../services/AxiosClient";

const PrimaryDashboard = () => {
  const [showNav, setShowNav] = useState("nav_grid_deactive");
  const [activecount, SetActivecount] = useState(0);
  const [inactivecount, setInactivecount] = useState(0);
  const [latestFourAdmins, setlatestFourAdmins] = useState([]);
  const [NotApprovedCount, SetNotApprovedCount] = useState(0);

  const getNotApprovedCount = () => {
    
    AxiosClient.get("/admin/auth/notapprovedcount")
      .then((res) => {
        SetNotApprovedCount(res.data.notapprovedcount);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getadmins = () => {
    AxiosClient.get("/admin/auth/locationadmin/all").then((res) => {
      
      setlatestFourAdmins(res.data.reverse());
      const primaryAdminRemoved = res.data.filter(admin => admin.Role =='LocationAdmin');
    
      setlatestFourAdmins(primaryAdminRemoved);
      
    });
  };

  const getstatus = () => {
    AxiosClient.get("/admin/auth/holidayhomestatus")
      .then((res) => {
        SetActivecount(res.data.Active);
        setInactivecount(res.data.Inactive);
        console.log('-getstatus then-')
        console.log(res);
      })
      .catch((err) => {
        console.log('-getstatus catch-')

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
                      <Box sx={{display:{xs:'flex',md:'none'},justifyContent:'center',gap:'3px'}}>
                          <Link to="/primaryadmin/viewadmin">
                            <Button  variant="contained">
                              <Typography>Location Admins</Typography>
                            </Button>
                          </Link>
                          <Link to="/primaryadmin/authorizations">
                            <Button  variant="contained">
                              <Typography> Holiday Home Approvals</Typography>
                            </Button>
                          </Link>
                        </Box>
                    <Box sx={{display:'flex',justifyContent:'center'}}>
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
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          backgroundColor: "#E9E9E9",
                          // padding: "1px",
                          margin: "10px",
                          borderRadius: "20px",
                          display:{xs:'none',md:'flex'}
                        }}
                      >
                        <Box>
                          <Typography variant="h6" style={{ margin: "3px" }}>
                            Location Admins
                          </Typography>
                        </Box>

                        <Box>
                          <DashViewAdminBox
                            color={"#253DA1"}
                            data={latestFourAdmins[0]}
                          />
                        </Box>
                        <Box>
                          <DashViewAdminBox color={"#FF69B4"} data={latestFourAdmins[1]} />
                        </Box>
                        <Box>
                          <DashViewAdminBox
                            color={"#77ccff"}
                            data={latestFourAdmins[2]}
                          />
                        </Box>
                        <Box>
                          <DashViewAdminBox
                            color={"#f5c77e"}
                            data={latestFourAdmins[3]}
                          />
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
                                <Avatar sx={{ bgcolor: "red" }}>
                                  {NotApprovedCount}
                                </Avatar>
                              </Box>
                              <Box>|</Box>
                              <Box sx={{fontSize:'14px'}}>Holiday Home Approvals</Box>
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
