import { Grid, Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import PStatisticsDetails from "../../Components/PrimaryAdmin/PStatisticsDetails";

import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PaidIcon from "@mui/icons-material/Paid";
import PSummary from "../../Components/PrimaryAdmin/Psummery";
import axios from "axios";
import { set } from "date-fns";

const PDashboardCon = () => {
  const [hhcount, Sethhcount] = useState(0);
  const gethhcount = () => {
    axios
      .get("http://localhost:3002/admin/auth/hhcount")
      .then((res) => {
        Sethhcount(res.data.count);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const summaries = [
    {
      color: "#8CB7A3",
      summaryTitle: "Travellers",
      count: 1546,
      iconComponent: <DirectionsWalkIcon sx={{ fontSize: "2.8rem" }} />,
    },
    {
      color: "#4D4E8E",
      summaryTitle: "Bookings",
      count: 879,
      iconComponent: <LibraryBooksIcon sx={{ fontSize: "2.8rem" }} />,
    },
    {
      color: "#FF5F51",
      summaryTitle: "Earnings",
      count: 879,
      iconComponent: <PaidIcon sx={{ fontSize: "2.8rem" }} />,
    },
    {
      color: "#FF5F51",
      summaryTitle: "Homes",
      count: hhcount,
      iconComponent: <PaidIcon sx={{ fontSize: "2.8rem" }} />,
    },
    // Add more objects as needed for additional summaries
  ];
  useEffect(() => {
    gethhcount();
  }, []);
  return (
    <Grid
      container
      sx={{
        padding: "10px 30px",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {/* <Grid md={8} xs={12}>
            <Grid container justifyContent={'space-between'}sx={{marginBottom:'25px',width:'100%'}} spacing={1}>
                {summaries.map((sum)=>(
                     <Grid item md={3} xs={6}  sx={{display:'flex',alignItems:'center',justifyContent:'spcae-between'}}>
                        <Box sx={{width:'350px',height:'150px'}}>
                            <PSummary summaryTitle={sum.summaryTitle} iconUse={sum.iconComponent} count={sum.count} color={sum.color}/>
                        </Box>
                     </Grid>
                ))}
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <PStatisticsDetails/>
                </Grid>
            </Grid>
        </Grid> */}
      {/* <Grid md={4} xs={12}>
        </Grid> */}
      <Grid item md={12}>
        <Grid
          container
          justifyContent={"space-between"}
          sx={{ marginBottom: "25px", width: "100%" }}
          spacing={1}
        >
          {/* {summaries.map((sum)=>(
                     <Grid item md={3} xs={6}  sx={{display:'flex',alignItems:'center',justifyContent:'spcae-between'}}>
                        <Box sx={{width:'350px',height:'150px'}}>
                            <PSummary summaryTitle={sum.summaryTitle} iconUse={sum.iconComponent} count={sum.count} color={sum.color}/>
                        </Box>
                     </Grid>
                ))} */}
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
         
            }}
          >
            <Box sx={{ width: "350px", height: "150px" }}>
              <Box
                elevation={8}
                sx={{
                  height: "75%",
                  width: "80%",
                  padding: "0 1rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "0.2em",
                  backgroundColor:"#FF5F51",
                  color: "white",
                  borderRadius: "20px",
                  alignItems: "center",
                }}
              >
                <Box><LibraryBooksIcon sx={{ fontSize: "2.8rem" }} /></Box>
                <Box>
                  <Typography
                    variant="p"
                    sx={{ fontSize: "0.9rem", fontWeight: "medium" }}
                  >
                    Bookings
                  </Typography>

                  <Typography variant="h6" sx={{ marginLeft: "10px" }}>
                    count
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            md={3}
            xs={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ width: "350px", height: "150px" }}>
              <Box
                elevation={8}
                sx={{
                  height: "75%",
                  width: "60%",
                  padding: "0 1rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "0.2em",
                  backgroundColor: "#4D4E8E",
                  color: "white",
                  borderRadius: "20px",
                  alignItems: "center",
                }}
              >
                <Box><PaidIcon sx={{ fontSize: "2.8rem" }} /></Box>
                <Box>
                  <Typography
                    variant="p"
                    sx={{ fontSize: "0.9rem", fontWeight: "medium" }}
                  >
                    Earnings
                  </Typography>

                  <Typography variant="h6" sx={{ marginLeft: "10px" }}>
                    count
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            md={3}
            xs={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ width: "350px", height: "150px" }}>
              <Box
                elevation={8}
                sx={{
                  height: "75%",
                  width: "60%",
                  padding: "0 1rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "0.2em",
                  backgroundColor: "#8CB7A3",
                  color: "white",
                  borderRadius: "20px",
                  alignItems: "center",
                }}
              >
                <Box><PaidIcon sx={{ fontSize: "2.8rem" }} /></Box>
                <Box>
                  <Typography
                    variant="p"
                    sx={{ fontSize: "0.9rem", fontWeight: "medium" }}
                  >
                    Homes
                  </Typography>

                  <Typography variant="h6" sx={{ marginLeft: "10px" }}>
                    {hhcount}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>





          {/* <Grid
            item
            md={3}
            xs={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ width: "350px", height: "150px" }}>
              <Box
                elevation={8}
                sx={{
                  height: "75%",
                  width: "60%",
                  padding: "0 1rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "0.2em",
                  backgroundColor: "orange",
                  color: "white",
                  borderRadius: "20px",
                  alignItems: "center",
                }}
              >
                <Box>icon</Box>
                <Box>
                  <Typography
                    variant="p"
                    sx={{ fontSize: "0.9rem", fontWeight: "medium" }}
                  >
                    {" "}
                    title
                  </Typography>

                  <Typography variant="h6" sx={{ marginLeft: "10px" }}>
                    count
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
                 */}



        </Grid>
      </Grid>
      <Grid item md={12}>
        <PStatisticsDetails />
      </Grid>
    </Grid>
  );
};

export default PDashboardCon;
