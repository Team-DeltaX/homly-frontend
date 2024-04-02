import React from "react";
import {
  ThemeProvider,
  Card,
  Grid,
  Stack,
  Box,
  Typography,
} from "@mui/material";
import theme from "../../../HomlyTheme";

const SerachResultCard = ({ searchedHH }) => {
  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ margin: "10px 2px" }}>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Box
              component="img"
              src={searchedHH.image}
              alt="Holiday Home"
              sx={{
                width: { xs: "100%", sm: "130px" },
                height: { xs: "150px", sm: "130px" },
                objectFit: "cover",
                borderRadius: {xs:0,sm:"10px"},
              }}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Stack direction="column" sx={{padding:'5px'}}>
              <Typography variant="h6">{searchedHH.name}</Typography>
              <Typography variant="body1">{searchedHH.description}</Typography>
              <Typography variant="body2">{searchedHH.address}</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Card>
    </ThemeProvider>
  );
};

export default SerachResultCard;
