import {
  Box,
  Button,
  Grid,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import theme from "../../HomlyTheme";

const ComplaintCard = (props) => {
  // extract only date from database created at
  const dateTimeString = props.data.created_at;
  const dateObject = new Date(dateTimeString);
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0");
  const day = String(dateObject.getDate()).padStart(2, "0");
  const dateOnlyString = `${year}-${month}-${day}`;

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { md: "row", xs: "column", sm: "row" },
          alignItems: { xs: "center" },
          backgroundColor: "#E9E9E9",
          padding: "20px",
          borderRadius: "15px",
          margin: "10px",
        }}
      >
        <Box>
          <img
            src="https://educationpro.a2sweb.com/demo/backend/themes/black/assets/custom/img/Complain.png"
            height="50px"
            width="50px"
            style={{ borderRadius: "50%" }}
          ></img>
        </Box>
        <Box>
          <Typography sx={{ textAlign: "center" }}>Admin Number</Typography>
          <Typography sx={{ fontWeight: "light", textAlign: "center" }}>
            {props.data.AdminNo}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ textAlign: "center" }}>Employee Number</Typography>
          <Typography sx={{ fontWeight: "light", textAlign: "center" }}>
            {props.data.ServiceNo}
          </Typography>
        </Box>

        <Box>
          <Typography sx={{ textAlign: "center" }}>Complained Date</Typography>
          <Typography sx={{ fontWeight: "light", textAlign: "center" }}>
            {dateOnlyString}
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            onClick={() => {
              props.setSelecteduser(props.data);

              props.handlepopup();
            }}
          >
            <Typography>View</Typography>
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default ComplaintCard;
