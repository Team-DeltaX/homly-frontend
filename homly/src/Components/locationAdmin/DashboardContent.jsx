import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Container, Grid, ThemeProvider } from "@mui/material";
import theme from "../../HomlyTheme";
import { PieChart } from "@mui/x-charts/PieChart";
import Income from "../../Components/PrimaryAdmin/Income";
import PDashboardboxes from "./Dashboard/PDashboardboxes";

import HomeRating from "./Dashboard/HomeRatings";

const DashboardContent = () => {
  const [activecount, SetActivecount] = useState(0);
  const [inactivecount, setInactivecount] = useState(0);

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
                    overflow: "scroll",
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
                  <HomeRating />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default DashboardContent;
