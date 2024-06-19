import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import dayjs from "dayjs";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

export default function ViewPopUp(props) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        View
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Reservation Details
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box sx={{ width: "100%" }}>
            <Grid container spacing={1}>
              <Grid
                xs={6}
                sm={3}
                sx={{
                  display: {
                    xs: "flex",
                    sm: "flex",
                  },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Item>
                  <Box
                    component="img"
                    src={props.holidayhome && props.holidayhome.MainImage}
                    alt=""
                    sx={{
                      width: { xs: "6rem", sm: "7rem", md: "8rem" },
                      height: { xs: "6rem", sm: "7rem", md: "8rem" },
                      borderRadius: "50%",
                    }}
                  />
                </Item>
              </Grid>
              <Grid xs={6} sm={5}>
                <Item sx={{ textAlign: "left" }}>
                  <Typography
                    variant="button"
                    display="block"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    {props.holidayhome && props.holidayhome.Name.toUpperCase()}
                  </Typography>
                  <Typography
                    sx={{
                      display: { xs: "block", sm: "block" },
                      "::before": {
                        content: { sm: '"Reservation Number "', xs: '""' },
                        fontWeight: "normal",
                      },
                      fontWeight: "bold",
                    }}
                    variant="body2"
                    display="block"
                    gutterBottom
                  >
                    {props.reservation.ReservationId}
                  </Typography>
                  <Typography
                    sx={{
                      display: { xs: "block", sm: "block" },
                      "::before": {
                        content: { sm: '"Amount : LKR "', xs: '"LKR "' },
                        fontWeight: "normal",
                      },
                      fontWeight: "bold",
                    }}
                    variant="body2"
                    display="block"
                    gutterBottom
                  >
                    {props.reservation.Price}
                  </Typography>
                  {props.reservation.isPaid ? (
                    <Typography
                      variant="button"
                      sx={{
                        color: "green",
                        fontSize: { xs: "13px", sm: "14px", md: "15px" },
                      }}
                    >
                      PAID
                    </Typography>
                  ) : (
                    <Typography
                      variant="button"
                      sx={{
                        color: "red",
                        fontSize: { xs: "13px", sm: "14px", md: "15px" },
                      }}
                    >
                      NOT PAID
                    </Typography>
                  )}
                </Item>
              </Grid>
              <Grid xs={6} sm={4}>
                <Item>
                  <Typography
                    variant="button"
                    align="right"
                    display="block"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    {props.holidayName}
                  </Typography>
                  <Typography
                    sx={{
                      display: { xs: "block", sm: "block" },
                      "::before": {
                        content: { sm: '"Check In : "', xs: '"From : "' },
                        fontWeight: "normal",
                      },
                      fontWeight: "bold",
                    }}
                    variant="body2"
                    align="right"
                    display="block"
                    gutterBottom
                  >
                    {dayjs(props.reservation.CheckinDate).format("DD/MM/YYYY")}
                  </Typography>
                  <Typography
                    sx={{
                      display: { xs: "block", sm: "block" },
                      "::before": {
                        content: { sm: '"Check out : "', xs: '"To : "' },
                        fontWeight: "normal",
                      },
                      fontWeight: "bold",
                    }}
                    variant="body2"
                    align="right"
                    display="block"
                    gutterBottom
                  >
                    {dayjs(props.reservation.CheckoutDate).format("DD/MM/YYYY")}
                  </Typography>
                </Item>
              </Grid>
              <Grid xs={6} sm={5}>
                <Item>
                  <Stack direction="column" spacing={1} sx={{ width: "100%" }}>
                    <Typography
                      sx={{
                        "::before": {
                          content: "'No. of Rooms : '",
                          fontWeight: "normal",
                        },
                        fontWeight: "bold",
                      }}
                      variant="body2"
                      align="left"
                      display="block"
                      gutterBottom
                    >
                      {props.reservation.NoOfRooms}
                    </Typography>
                    <Typography
                      sx={{
                        "::before": {
                          content: "'No. of Halls : '",
                          fontWeight: "normal",
                        },
                        fontWeight: "bold",
                      }}
                      variant="body2"
                      align="left"
                      display="block"
                      gutterBottom
                    >
                      {props.reservation.NoOfHalls}
                    </Typography>
                    <Typography
                      sx={{
                        display: { xs: "none", sm: "block", md: "block" },
                        "::before": {
                          content: "'Reserved date : '",
                          fontWeight: "normal",
                        },
                        fontWeight: "bold",
                      }}
                      variant="body2"
                      align="left"
                      display="block"
                      gutterBottom
                    >
                      {dayjs(props.reservation.createdAt).format("DD/MM/YYYY")}
                    </Typography>
                  </Stack>
                </Item>
              </Grid>
              <Grid xs={12} sm={7}>
                <Item>
                  <Stack
                    direction={{ xs: "row", sm: "row" }}
                    spacing={3}
                    divider={<Divider orientation="vertical" flexItem />}
                  >
                    <Item>
                      <Typography
                        variant="body2"
                        align="center"
                        display="block"
                        gutterBottom
                      >
                        Reserved Room ID
                      </Typography>
                      {props.reservedRoom && props.reservedRoom.length > 0 ? (
                        props.reservedRoom.map((room) => (
                          <Typography
                            variant="body1"
                            align="center"
                            display="block"
                            fontWeight="bold"
                            gutterBottom
                            key={room.roomCode}
                          >
                            {room.roomCode}
                          </Typography>
                        ))
                      ) : (
                        <Typography
                          variant="body1"
                          align="center"
                          display="block"
                          fontWeight="bold"
                          gutterBottom
                        >
                          -None-
                        </Typography>
                      )}
                    </Item>
                    <Item>
                      <Typography
                        variant="body2"
                        align="center"
                        display="block"
                        gutterBottom
                      >
                        Reserved Hall ID
                      </Typography>
                      {props.reservedHall && props.reservedHall.length > 0 ? (
                        props.reservedHall.map((hall) => (
                          <Typography
                            variant="body1"
                            align="center"
                            display="block"
                            fontWeight="bold"
                            gutterBottom
                            key={hall.hallCode}
                          >
                            {hall.hallCode}
                          </Typography>
                        ))
                      ) : (
                        <Typography
                          variant="body1"
                          align="center"
                          display="block"
                          fontWeight="bold"
                          gutterBottom
                        >
                          -None-
                        </Typography>
                      )}
                    </Item>
                  </Stack>
                </Item>
              </Grid>
              <Grid xs={12}>
                <Typography
                  sx={{
                    display: { xs: "block", sm: "none", md: "none" },
                    "::before": {
                      content: "'Reserved on : '",
                      fontWeight: "normal",
                    },
                    fontWeight: "bold",
                  }}
                  variant="body2"
                  align="left"
                  display="block"
                >
                  {dayjs(props.reservation.createdAt).format("DD/MM/YYYY")}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
