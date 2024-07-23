import Box from "@mui/material/Box";
import { Container, Grid, ThemeProvider } from "@mui/material";
import theme from "../../HomlyTheme";
import Income from "../../Components/PrimaryAdmin/Income";
import PDashboardboxes from "./Dashboard/PDashboardboxes";
import HomeRating from "./Dashboard/HomeRatings";

const DashboardContent = () => {
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
              <Grid
                container
                sx={{
                  overflow: "scroll",
                  maxHeight: "100vh",
                  paddingBottom: "10rem",
                }}
              >
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
                    <Box>
                      <Income />
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
