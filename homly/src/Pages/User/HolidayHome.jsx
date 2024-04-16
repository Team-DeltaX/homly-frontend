/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState } from "react";
import {
  Container,
  Box,
  ThemeProvider,
  Pagination,
  Typography,
  TextField,
  Stack,
  Button,
} from "@mui/material";
import { useParams } from "react-router-dom";
import NavBar from "../../Components/User/NavBar/NavBar";
import Footer from "../../Components/User/Footer/Footer";
import HolidayHomeCard from "../../Components/User/HHCard/HolidayHomeCard";
import HHCardSkeleton from "../../Components/User/Skeleton/HHCardSkeleton";
import theme from "../../HomlyTheme";
import AOS from "aos";
import "aos/dist/aos.css";
import AxiosClient from "../../services/AxiosClient";
export default function HolidayHomes() {
  const refContactUS = useRef(null);
  const refPageTop = useRef(null);
  const [holidayHomes, setHolidayHomes] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [selectedPage, setSelectedPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init();
  }, []);

  const params = useParams();
  const district = params ? params.district : " ";

  const fetchData = () => {
    AxiosClient.get("/user/auth/holidayhomes", {
      params: { district: district, search: searchValue, page:selectedPage },
    })
      .then((res) => {
        console.log("res", res);
        if (res) {
          console.log('dataaaaa',res);
          setPagination(Math.ceil(res.data.HHcount / 9));
          setHolidayHomes(res.data.holidayHomes);
        } else {
          setHolidayHomes([]);
        }
        setShowSkeleton(false);
      })
      .catch(() => {
        console.log("error");
        setShowSkeleton(false);
      });
  };

  useEffect(() => {
    setShowSkeleton(true);
    fetchData();
  }, [selectedPage]);

  const handleSearch = () => {
    setShowSkeleton(true);
    fetchData();
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl" style={{ padding: 0 }} ref={refPageTop}>
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
                marginTop: { xs: "20px", sm: "10px", ms: "0" },
                width: { xs: "100%", sm: "95%", padding: 0 },
                justifyContent: "center",
              }}
            >
              <Stack direction="column">
                <Stack
                  direction="row"
                  sx={{
                    width: "95%",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <TextField
                    id="search"
                    placeholder="Search"
                    size="small"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    sx={{
                      marginRight: "10px",
                    }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSearch}
                    size="small"
                    sx={{
                      padding: "7px 10px",
                    }}
                  >
                    Search
                  </Button>
                </Stack>

                <Box
                  sx={{
                    width: "100%",
                    flexWrap: "wrap",
                    display: !showSkeleton ? "flex" : "none",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {holidayHomes.length > 0 ? (
                    holidayHomes.map((item) => (
                      <Box sx={{ padding: "7px" }} key={item.HolidayHomeId}>
                        <HolidayHomeCard
                          key={item.HolidayHomeId}
                          HHID={item.HolidayHomeId}
                          HHName={item.Name}
                          HHLocation={item.Address}
                          HHPrice={item.TotalRental}
                          HHRating={item.overall_rating}
                          HHImage={item.HHImage}
                          showInterest={false}
                          isWishListed={item.isWishListed}
                        />
                      </Box>
                    ))
                  ) : (
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "20px",
                      }}
                    >
                      <Typography variant="h6">
                        No Holiday Homes Found!
                      </Typography>
                    </Box>
                  )}
                </Box>
                <Box
                  sx={{
                    flexWrap: "wrap",
                    display: showSkeleton ? "flex" : "none",
                  }}
                >
                  <Box sx={{ padding: "20px" }}>
                    <HHCardSkeleton showInterest={false} />
                  </Box>
                  <Box sx={{ padding: "20px" }}>
                    <HHCardSkeleton showInterest={false} />
                  </Box>
                  <Box sx={{ padding: "20px" }}>
                    <HHCardSkeleton showInterest={false} />
                  </Box>
                </Box>
              </Stack>
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
                  setSelectedPage(value);
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
