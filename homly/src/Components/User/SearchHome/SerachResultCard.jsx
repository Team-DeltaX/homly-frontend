import React from "react";
import {
  ThemeProvider,
  Card,
  Grid,
  Stack,
  Box,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import theme from "../../../HomlyTheme";

const SerachResultCard = ({ searchedHH }) => {
  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ margin: "10px 5px", padding: "10px 7px" }}>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box
              component="img"
              src={searchedHH.HHImage}
              alt="Holiday Home"
              sx={{
                width: { xs: "100%", sm: "130px" },
                height: { xs: "150px", sm: "130px" },
                objectFit: "cover",
                borderRadius: { xs: 0, sm: "10px" },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Stack direction="column" sx={{ padding: "5px", margin:'0 10px',height:'100%' }}>
              <Typography variant="h6" sx={{fontWeight:'bold'}}>
                {searchedHH.Name.toUpperCase()}
              </Typography>
              <Typography variant="body2">{searchedHH.Address}</Typography>
              <Stack direction="row" sx={{justifyContent:"space-between"}}>
                <Stack direction="row" sx={{ alignItems: "baseline", }}>
                  <Typography
                    sx={{
                      fontWeight: "medium",
                      color: "primary.main",
                      fontSize: { sm: "1rem" },
                      marginRight: "5px",
                    }}
                  >
                    LKR
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "primary.main",
                      fontSize: { sm: "1.2rem" },
                    }}
                  >
                    {searchedHH.TotalRental.toFixed(2)}
                  </Typography>
                </Stack>

                <Stack direction="row" sx={{ alignItems: "center" }}>
                  <StarIcon sx={{ color: "primary.main" }} />
                  <Typography sx={{ fontWeight: "medium" }}>
                    {searchedHH.overall_rating.toFixed(1)}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Card>
    </ThemeProvider>
  );
};

export default SerachResultCard;
