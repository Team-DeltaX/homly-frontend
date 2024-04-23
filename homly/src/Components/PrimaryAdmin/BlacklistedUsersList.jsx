import { Box, Button, Grid, Stack, ThemeProvider } from "@mui/material";
import theme from "../../HomlyTheme";

const BlacklistedUsersList = ({ item }) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        key={item.index}
        container
        sx={{
          width: "90%",
          marginLeft: "5%",
          marginTop: "0.5%",
          background: "#E9E9E9",
          padding: "10px",
          borderRadius: "15px",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row", md: "row" },
        }}
      >
        <Grid item md={2}>
          <img
            src={item.image}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              marginLeft: "20%",
            }}
            className="items"
          ></img>
        </Grid>
        <Grid item md={2} sm={6} sx={12}>
          <Stack direction={"column"}>
            <Box> Service Number</Box>
            <Box>{item.Service_number}</Box>
          </Stack>
        </Grid>
        <Grid item md={2} sm={6} sx={12} className="items">
          {" "}
          <Stack direction={"column"}>
            <Box>User Name</Box>
            <Box>{item.User_name}</Box>
          </Stack>
        </Grid>
        <Grid item md={2} sm={6} sx={12} className="items">
          {" "}
          <Stack direction={"column"}>
            <Box>NIC Number</Box>
            <Box>{item.Nic_number}</Box>
          </Stack>
        </Grid>
        <Grid item md={2} sm={6} sx={12} className="items">
          {" "}
          <Stack direction={"column"}>
            <Box>Blacklisted Date</Box>
            <Box>{item.date}</Box>
          </Stack>
        </Grid>
        <Grid item md={2} sm={6} sx={12} className="viewbutton">
          {" "}
          <Button
            sx={{ fontFamily: "Roboto", width: "100px", borderRadius: "15px" }}
            variant="contained"
          >
            View
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default BlacklistedUsersList;
