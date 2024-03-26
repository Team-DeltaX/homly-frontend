import { Box, Typography } from "@mui/material";
import { ThemeProvider } from "styled-components";
import theme from "../../HomlyTheme";
const Populer = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            backgroundColor: "#002347",
            height: { md: "40px", sx: "60px" },
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "5px",
            margin: "5px",
          }}
        >
          <Typography sx={{ color: "white" }}>Most populer HH</Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#002347",
            height: { md: "40px", sx: "60px" },
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "5px",
            margin: "5px",
            marginLeft: "1px",
            marginRight: "1px",
          }}
        >
          <Typography sx={{ color: "white" }}>
            {" "}
            Colombo North Number 2
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#002347",
            height: { md: "40px", sx: "60px" },
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "5px",
            margin: "5px",
          }}
        >
          <Typography sx={{ color: "white" }}>Reservations </Typography>
          <Typography
            sx={{ color: "#FF5003", marginLeft: "10px", fontWeight: "bold" }}
          >
            {" "}
            34
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default Populer;
