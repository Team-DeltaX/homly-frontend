import {
  Box,
  Button,
  Grid,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import PreviewIcon from "@mui/icons-material/Preview";
import theme from "../../HomlyTheme";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { useState } from "react";
import ConfirmPopup from "./ConfirmPopup";

const AuthorizationsCard = (props) => {
  const [open, Setopen] = useState(false);

  const approve = () => {
    axios
      .put(
        `${global.API_BASE_URL}/admin/auth/locationadmin/holidayhome/accept`,
        {
          id: props.data.HolidayHomeId,
        },
        { withCredentials: true }
      )
      
      .then((res) => {
        props.get_pending();
        props.Setopensn(true);
      })
      .catch((error) => {
        props.opensnE(true);
      });
  };

  const rejectHH = () => {
    console.log("reject called ");
    console.log(props.data.HolidayHomeId);
    axios
      .delete(
        `${global.API_BASE_URL}/admin/auth/locationadmin/holidayhome/reject`,
        {
          data: {
            id: props.data.HolidayHomeId,
          },
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log("rejection done");
        props.get_pending();
        Setopen(false);
      })
      .catch((error) => {
        props.opensnE(true);
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <ConfirmPopup
        open={open}
        setOpen={Setopen}
        title={"Holiday Home Rejection"}
        text={"Are you sure you want to Decline this HolidayHome"}
        controlfunction={rejectHH}
      />
      <Stack
        sx={{
          width: "350px",
          background: "#E9E9E9",
          padding: "20px",
          borderRadius: "20px",
          margin: "30px",
        }}
      >
        <Box></Box>
        <Box>
          {" "}
          <Grid container>
            <Grid md={9} xs={12}>
              <Grid md={12}>
                <Grid md={12}>
                  <Typography sx={{ fontWeight: "light" }}>District</Typography>
                </Grid>
                <Grid md={12}>{props.data.District}</Grid>
              </Grid>

              <Grid md={12} sx={{ marginTop: "5%" }}>
                <Grid md={12}>
                  <Typography sx={{ fontWeight: "light" }}>
                    Holiday Home
                  </Typography>
                </Grid>
                <Grid md={12}>{props.data.Name}</Grid>
              </Grid>
            </Grid>

            <Grid md={3} xs={12}>
              <Grid md={12}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    width: "80px",
                    height: "30px",
                    borderRadius: "15px",
                    display: { xs: "none", md: "flex" },
                  }}
                  startIcon={<PreviewIcon />}
                >
                  <Typography>View</Typography>
                </Button>
              </Grid>
              <Grid md={12}>
                <Grid md={12} sx={{ marginTop: "25px" }}>
                  <Typography sx={{ fontWeight: "light" }}>Admin</Typography>{" "}
                </Grid>
                <Grid md={12}>{props.data.AdminNo}</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: { md: "row", sm: "row", xs: "column" },
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{
              margin: "10px",
              width: "100px",
              height: "30px",
              borderRadius: "15px",
              background: "#39e75f",
              color: "black",
            }}
            startIcon={<CheckIcon />}
            onClick={() => {
              approve();
            }}
          >
            <Typography>Accept</Typography>
          </Button>
          <Button
            type="submit"
            variant="outlined"
            sx={{
              margin: "10px",
              width: "100px",
              height: "30px",
              borderRadius: "15px",
              color: "red",
              borderBlockColor: "red",
            }}
            onClick={() => {
              Setopen(true);
            }}
            startIcon={<CloseIcon />}
          >
            <Typography>Decline</Typography>
          </Button>
          <Button
            type="submit"
            variant="outlined"
            sx={{
              margin: "10px",
              width: "100px",
              height: "30px",
              borderRadius: "15px",
              display: { xs: "flex", md: "none" },
            }}
            startIcon={<PreviewIcon />}
            onClick={() => {}}
          >
            <Typography>View</Typography>
          </Button>
        </Box>
      </Stack>
    </ThemeProvider>
  );
};
export default AuthorizationsCard;
