import React, { useEffect, useState, useRef } from "react";
import {
  Container,
  Box,
  Typography,
  ThemeProvider,
  Stack,
  Divider,
} from "@mui/material";
import AxiosClient from "../../services/AxiosClient";
import NavBar from "../../Components/User/NavBar/NavBar";
import theme from "../../HomlyTheme";
import OurPlaces from "../../Components/User/OurPlaces/OurPlaces";
import BrowseMoreCom from "../../Components/User/BrowseMore/BrowseMoreCom";
import Footer from "../../Components/User/Footer/Footer";
import HHCarousel from "../../Components/User/Carousel/HHCarousel";
import UserInterestedPopup from "../../Components/User/UserInterestedPopup";
import UserInterestedHolidayHomes from "../../Components/User/UserInterestedHolidayHomes/UserInterestedHolidayHomes";
import SearchBarHome from "../../Components/User/SearchHome/SearchBarHome";

import "./UserStyle.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const refContactUS = useRef(null);
  const [sortedByRating, setSortedByRating] = useState([]);
  const [interestedHH, setInterestedHH] = useState();
  const [isDisplayInterest, setIsDisplayInterest] = useState(false);
  const [insterestedPopup, setInsterestedPopup] = useState(false);
  const [interestsIsSubmited, setInterestsIsSubmited] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    AxiosClient.get(`/user/auth/holidayhomes/sort/topRated`)
      .then((res) => {
        setSortedByRating(res.data);
      })
      .catch(() => {
        setSortedByRating([]);
      });

    AxiosClient.get(`/user/auth/interested`)
      .then((res) => {
        if (res.data.updated) {
          setInsterestedPopup(false);
        } else {
          setInsterestedPopup(true);
        }
      })
      .catch(() => {
        setInsterestedPopup(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    AxiosClient.get(`/user/auth/holidayhomes/sort`)
      .then((res) => {
        if (res.data.interested) {
          setInterestedHH(res.data.interested_hh);
          setIsDisplayInterest(true);
        } else {
          setIsDisplayInterest(false);
        }
      })
      .catch(() => {
        setIsDisplayInterest(false);
      });
  }, [interestsIsSubmited]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl" style={{ padding: 0 }}>
          <NavBar refContactUS={refContactUS} />
          <UserInterestedPopup
            open={insterestedPopup}
            setOpen={setInsterestedPopup}
            setInterestsIsSubmited={setInterestsIsSubmited}
          />

          <Container
            maxWidth="lg"
            sx={{
              bgcolor: "white",
              marginTop: { xs: "20px", sm: "10px", ms: "0" },
            }}
          >
            <Container
              sx={{
                bgcolor: "white",
                width: { xs: "100%", sm: "95%", padding: 0 },
              }}
            >
              <Box sx={{ position: "relative" }}>
                <Box
                  component="img"
                  src={
                    "https://res.cloudinary.com/dwgeetnoj/image/upload/v1710836477/homly-main-images/LandingPageTop_ekbjsh.jpg"
                  }
                  alt="top-image"
                  sx={{ width: "100%", height: "50vh", objectFit: "cover" }}
                />
                <Stack
                  direction="column"
                  sx={{
                    position: "absolute",
                    height: "50vh",
                    width: "100%",
                    bgcolor: "#2c2c2ca3",
                    top: 0,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Stack
                    direction="column"
                    sx={{ color: "white", fontWeight: 700 }}
                    display={{ xs: "none", sm: "flex" }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "1.7rem", sm: "3rem" },
                      }}
                    >
                      Discover the perfect getaway
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "1.7rem", sm: "3rem" },
                      }}
                    >
                      with beautiful views
                    </Typography>
                  </Stack>

                  <SearchBarHome />
                </Stack>
              </Box>
              <Box>
                {isDisplayInterest ? (
                  <UserInterestedHolidayHomes
                    setIsDisplayInterest={setIsDisplayInterest}
                    interestedHH={interestedHH}
                  />
                ) : (
                  ""
                )}
              </Box>
              <Stack sx={{ margin: "3% 0" }}>
                <Stack direction="column" sx={{ margin: "3% 0" }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "1.2rem", sm: "1.8rem" },
                      fontWeight: "bold",
                    }}
                  >
                    Our Places
                  </Typography>
                  <Divider
                    sx={{
                      width: "80%",
                      borderBottomWidth: "2px",
                      bgcolor: "#2c2c2c6e",
                      ml: "10px",
                    }}
                  />
                </Stack>
                <OurPlaces />
              </Stack>
              {/* top rated 5 */}
              <Stack sx={{ margin: "3% 0" }}>
                <Stack direction="column" sx={{ margin: "3% 0" }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "1.2rem", sm: "1.8rem" },
                      fontWeight: "bold",
                    }}
                  >
                    Top Rated Holiday Homes
                  </Typography>

                  <Divider
                    sx={{
                      width: "80%",
                      borderBottomWidth: "2px",
                      bgcolor: "#2c2c2c6e",
                      ml: "10px",
                    }}
                  />
                </Stack>
                <Box>
                  <HHCarousel sortedByRatingHH={sortedByRating} />
                </Box>
              </Stack>
              <Stack
                data-aos="fade-left"
                data-aos-duration="900"
                sx={{ margin: "5% 0 0 0" }}
              >
                {/* browse more holiday homes */}
                <BrowseMoreCom />
              </Stack>
            </Container>
            <Container
              sx={{
                // height: "100vh",
                width: { xs: "100%", sm: "95%" },
                padding: 0,
                paddingLeft: 0,
                "& .css-185m5ur-MuiContainer-root": {
                  padding: 0,
                  paddingLeft: 0,
                },
              }}
            ></Container>
          </Container>
          <Box>
            <Footer refContactUS={refContactUS} />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
