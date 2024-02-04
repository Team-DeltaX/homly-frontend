import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Button from "@mui/material/Button";
import { ThemeProvider, Box } from "@mui/material";
import theme from "../../../HomlyTheme";
import "./MyReservationCard.css";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  width: "100%",
  height: "100%",
});

export default function MyReservationCard(props) {
  let paidBox;

  if (props.paid === "true") {
    paidBox = (
      <Box className="booking-status-box" sx={{ backgroundColor: "grey2" }}>
          <Box>
          <Typography className="booking-status-box-text-date" sx={{padding:"3%",fontWeight:'bold'}}>Reserved date : {props.reserved}</Typography>
          </Box>
          <Box sx={{display:'flex', justifyContent:'center', height:'80%', flexDirection:'row'}}>
            <Box sx={{display:'flex',alignItems:'center'}}>
              <CheckCircleOutlineIcon sx={{fontSize:'9vh',color:'success.light',}}/>
              <Typography className="booking-status-box-text" sx={{fontSize:'8vh',color:'success.light',fontWeight:'medium'}}>Paid</Typography>
            </Box>
          </Box>
      </Box>
    );
  } else if (props.paid === "false") {
    paidBox = (
      <Box className="booking-status-box" sx={{ backgroundColor: "grey2",paddingBottom:"1.5%" }}>
          <Box>
          <Typography variant="h7" className="booking-status-box-text-date" sx={{padding:"3%",color:'error.main', fontWeight:'bold'}}>Auto Expire date : {props.reservedExpire} </Typography>
          </Box>
          <Box sx={{display:'flex', justifyContent:'center', height:'40%', flexDirection:'row'}}>
            <Box sx={{display:'flex',alignItems:'center'}}>
              <Typography className="booking-status-box-text" sx={{fontSize:'6vh',color:'error.main',fontWeight:'medium'}}>Pending</Typography>
            </Box>
          </Box>
          <Box sx={{display:'flex',justifyContent:'flex-end'}}>
            <Button variant="outlined" sx={{width:{xs:'40%' ,sm:'60%' ,md:'50%'},padding:{xs:'2%'},alignItems:'flex-end',margin:"1%"}} color="error" >Check out</Button>
            </Box>
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Paper
        className="myreservarion-card"
        sx={{
          margin: "auto",
          maxWidth: "1160px",
          flexGrow: 1,
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        <Grid container direction="row" spacing={{ xs: 2, sm: 2, md: 1 }}>
          <Grid item xs={12} sm={3} md={4}>
            <Img alt="complex" src={props.image} />
            {/* <ButtonBase sx={{ width: 250, height: 250 }}>
            </ButtonBase> */}
          </Grid>
          <Grid
            className="reservation-card-details"
            item
            xs={12}
            sm={5}
            md={4}
            container
          >
            <Grid
              item
              container
              direction="column"
              justifyContent="space-between"
              spacing={3}
            >
              <Grid item container direction="row">
                <Grid item xs>
                  {/* title */}
                  <Typography variant="h6" component="div">
                    {props.title}
                  </Typography>
                  {/* address */}
                  <Typography variant="body2">{props.address}</Typography>
                  {/* check-in date */}
                  <Grid
                    item
                    container
                    sx={{ marginTop: "4%" }}
                    className="checkin-out"
                  >
                    <Grid item xs={5} md={4}>
                      <Typography variant="body2" className="checkin-out-text">
                        Check-in date
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" className="checkin-out-date">
                        {props.cheking}
                      </Typography>
                    </Grid>
                  </Grid>
                  {/* check-out */}
                  <Grid item container className="checkin-out">
                    <Grid item xs={5} md={4}>
                      <Typography variant="body2" className="checkin-out-text">
                        Check-out date
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" className="checkin-out-date">
                        {props.checkout}
                      </Typography>
                    </Grid>
                  </Grid>
                  {/* adult count */}
                  <Grid
                    item
                    container
                    sx={{ marginTop: "4%" }}
                    className="counts"
                  >
                    <Grid item xs={7} md={8}>
                      <Typography variant="body2" className="counts-text">
                        Number of Adults :
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" className="counts-value">
                        {props.adultCount}
                      </Typography>
                    </Grid>
                  </Grid>
                  {/* child count */}
                  <Grid item container className="counts">
                    <Grid item xs={7} md={8}>
                      <Typography variant="body2" className="counts-text">
                        Number of Children :
                      </Typography>
                    </Grid>
                    <Grid item >
                      <Typography variant="body2" className="counts-value">
                        {props.childCount}
                      </Typography>
                    </Grid>
                  </Grid>
                  {/* room count */}
                  <Grid item container className="counts">
                    <Grid item xs={7} md={8}>
                      <Typography variant="body2" className="counts-text">
                        Number of Rooms :
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" className="counts-value">
                        {props.roomCount}
                      </Typography>
                    </Grid>
                  </Grid>
                  {/* hall count */}
                  <Grid item container className="counts">
                    <Grid item xs={7} md={8}>
                      <Typography variant="body2" className="counts-text">
                        Number of Halls :
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" className="counts-value">
                        {props.hallCount}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      backgroundColor: "red",
                      padding: "7px 8px",
                      borderRadius: "10%",
                      boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                      color: "white",
                    }}
                  >
                    {props.rating}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            className="reservation-card-details booking-status-main"
            item
            xs={12}
            sm={4}
            md={4}
            sx={{ display: "flex" }}
          >
            <Box
              className="reservation-card-details-payment"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box
                className="reservation-card-details-payment-inner"
                sx={{
                  height: "80%",
                  display: "flex",
                }}
              >
                <Divider
                  className="reservation-card-details-payment-inner-divider"
                  sx={{ backgroundColor: "grey4", width: "2px" }}
                />
              </Box>
            </Box>
            <Box
              className="booking-status"
              sx={{ width: "100%", display: "flex", flexDirection: "column" }}
            >
              {/* title */}
              <Typography variant="h6" className="booking-status-title">
                Booking Status
              </Typography>
              <Box className="booking-status-container">{paidBox}</Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}
