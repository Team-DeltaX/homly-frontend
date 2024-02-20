import React, { useRef, useEffect } from "react";
import { Container, Box, ThemeProvider, Pagination } from "@mui/material";
import NavBar from "../../Components/User/NavBar/NavBar";
import Footer from "../../Components/User/Footer/Footer";
import theme from "../../HomlyTheme";
import AOS from "aos";
import "aos/dist/aos.css";
export default function HolidayHomeDetails() {
  const refContactUS = useRef(null);
  useEffect(() => {
    AOS.init();
  }, []);
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
          <Container
            maxWidth="lg"
            sx={{
              bgcolor: "white",
              marginTop: { xs: "20px", sm: "10px", ms: "0" },
            }}
          >
            <Container
              sx={{
                bgcolor: "blue",
                width: { xs: "100%", sm: "95%", padding: 0 },
                height: "100dvh",
              }}
            ></Container>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
              }}
            >
              <Pagination count={10} variant="outlined" shape="rounded" color="primary"/>
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
