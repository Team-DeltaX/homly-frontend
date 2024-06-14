import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PStatisticsDetails from "../../Components/PrimaryAdmin/PStatisticsDetails";

import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PaidIcon from "@mui/icons-material/Paid";
import HomeIcon from "@mui/icons-material/Home";
// import PSummary from "../../Components/PrimaryAdmin/Psummery";
import axios from "axios";
import AxiosClient from "../../services/AxiosClient";
// import { set } from "date-fns";

const PDashboardCon = () => {
  const [hhcount, Sethhcount] = useState("0");
  const [earning, SetEarning] = useState("0");
  const [paidcount, SetPaidcount] = useState("0");
  const [unpaidcount, SetUnpaindcount] = useState("0");
  const gethhcount = () => {
    // axios
    //   .get("http://localhost:8080/admin/auth/hhcount")
    AxiosClient.get("/admin/auth/hhcount")
      .then((res) => {
        Sethhcount(res.data.count);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getearning = () => {
    // axios
    //   .get("http://localhost:8080/admin/auth/earning")
    AxiosClient.get("/admin/auth/earning")
      .then((res) => {
        SetEarning(res.data.sum);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const bookingcount = () => {
    // axios
    //   .get("http://localhost:8080/admin/auth/bookingcount")
    AxiosClient.get("/admin/auth/bookingcount")
      .then((res) => {
        SetPaidcount(res.data.Paid);
        SetUnpaindcount(res.data.Unpaid);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const summaries = [
  //   {
  //     color: "#8CB7A3",
  //     summaryTitle: "Travellers",
  //     count: 1546,
  //     iconComponent: <DirectionsWalkIcon sx={{ fontSize: "2.8rem" }} />,
  //   },
  //   {
  //     color: "#4D4E8E",
  //     summaryTitle: "Bookings",
  //     count: 879,
  //     iconComponent: <LibraryBooksIcon sx={{ fontSize: "2.8rem" }} />,
  //   },
  //   {
  //     color: "#FF5F51",
  //     summaryTitle: "Earnings",
  //     count: 879,
  //     iconComponent: <PaidIcon sx={{ fontSize: "2.8rem" }} />,
  //   },
  //   {
  //     color: "#FF5F51",
  //     summaryTitle: "Homes",
  //     count: hhcount,
  //     iconComponent: <PaidIcon sx={{ fontSize: "2.8rem" }} />,
  //   },
  //   // Add more objects as needed for additional summaries
  // ];
  useEffect(() => {
    gethhcount();
    getearning();
    bookingcount();
  }, []);
  return (
    <Box>
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
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: "0.2em",
                    backgroundColor: "#FF5F51",
                    color: "white",
                    borderRadius: "20px",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <LibraryBooksIcon sx={{ fontSize: "2.8rem" }} />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      columnGap: "50px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        variant="p"
                        sx={{ fontSize: "0.85rem", fontWeight: "medium" }}
                      >
                        Pending Bookings
                      </Typography>
                      <Typography variant="h6" sx={{ marginLeft: "4px" }}>
                        {unpaidcount}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="p"
                        sx={{ fontSize: "0.85rem", fontWeight: "medium" }}
                      >
                        paid Bookings
                      </Typography>
                      <Typography variant="h6" sx={{ marginLeft: "4px" }}>
                        {paidcount}
                      </Typography>
                    </Box>
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
                    textAlign: "center",
                  }}
                >
                  <Box>
                    <PaidIcon sx={{ fontSize: "2.8rem" }} />
                  </Box>
                  <Box>
                    <Typography
                      variant="p"
                      sx={{ fontSize: "0.9rem", fontWeight: "medium" }}
                    >
                      Earnings
                    </Typography>
                    <Typography variant="h6" sx={{ marginLeft: "10px" }}>
                      {earning}
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
                  <Box>
                    <HomeIcon sx={{ fontSize: "2.8rem" }} />
                  </Box>
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
    </Box>
  );
};

export default PDashboardCon;
