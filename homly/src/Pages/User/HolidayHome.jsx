import React, { useRef, useEffect, useState } from "react";
import { Container, Box, ThemeProvider, Pagination , Typography} from "@mui/material";
import axios from "axios";
import { useParams} from "react-router-dom";
import NavBar from "../../Components/User/NavBar/NavBar";
import Footer from "../../Components/User/Footer/Footer";
import HolidayHomeCard from "../../Components/User/HHCard/HolidayHomeCard";
import theme from "../../HomlyTheme";
import AOS from "aos";
import "aos/dist/aos.css";
export default function HolidayHomes() {
  const refContactUS = useRef(null);
  const refPageTop = useRef(null);
  const [holidayHomes, setHolidayHomes] = useState([]);
  const [displayedHH, setDisplayedHH] = useState([]);
  const [pagination, setPagination] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init();
  }, []);

  const params = useParams();
  const searchData = params ? params.searchData : " ";

  useEffect(() => {
    console.log("searchData", searchData);
    axios
      .get(
        "http://localhost:3002/users/holidayhomes",
        { params : { search:searchData} },
        { withCredentials: true }
      )
      .then((res) => {
        console.log("hhdetails", res.data);
        setPagination( Math.ceil(res.data.length / 9));
        setHolidayHomes(res.data);
        setDisplayedHH(res.data.slice(0, 9));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchData]);
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl" style={{ padding: 0 }}  ref={refPageTop}>
          <NavBar refContactUS={refContactUS} />
          <Container
            maxWidth="lg"
            sx={{
              bgcolor: "white",
              marginTop: { xs: "60px", sm: "40px", ms: "0" },
            }}
          >
            <Container
              sx={{
                marginTop:{xs:"20px", sm:"10px", ms:"0"},
                width: { xs: "100%", sm: "95%", padding: 0 },
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {displayedHH ? displayedHH.map((item) => (
                <Box sx={{padding:"7px"}}>
                  <HolidayHomeCard
                    key={item.HolidayHomeId}
                    HHID={item.HolidayHomeId}
                    HHName={item.Name}
                    HHLocation={item.Address}
                    HHPrice={item.TotalRental}
                    HHRating={item.overall_rating}
                    // HHImage={
                    //   "https://www.cnaccountants.com.au/wp-content/uploads/2023/03/hOLIDAY-HOMES-TAX.jpg"
                    // }
                    HHImage={item.HHImage}
                    showInterest={false}
                  />
                </Box>
              )):
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "20px",
                }}
              ><Typography variant="h6">No Holiday Homes Found</Typography></Box>
              }
            </Container>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
              }}
            >
              <Pagination
                count={pagination}
                variant="outlined"
                shape="rounded"
                color="primary"
                onChange={(event, value) => { 
                  console.log("page", value);
                  setDisplayedHH(holidayHomes.slice((value-1)*9, value*9));
                  // go to pagetop
                  refPageTop.current.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </Box>
          </Container>
          <Box>
            <Footer refContactUS={refContactUS} />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
