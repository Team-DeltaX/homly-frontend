import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import imag from "../../Assets/images/H.png";
import { Link } from "react-router-dom";
import Switch from "@mui/material/Switch";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import AxiosClient from "../../services/AxiosClient";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const HolidayHomeCard = ({
  HolidayHomeId,
  HolidayHomeName,
  Category,
  image,
  status,
  setReload,
  activeToggler,
  reason,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    setState(!state);
  };

  const handleApprove = () => {
    setOpen(false);
    const statusValue = state === true ? "Active" : "Inactive";
    AxiosClient.post("/admin/auth/locationadmin/holidayhome/status", {
      HolidayHomeId: HolidayHomeId,
      Status: statusValue,
    })
      .then((res) => {
        console.log(res);
        setReload((prev) => !prev);
      })
      .catch((err) => {
        console.log("error in update status", err);
      });
  };

  let val = status === "Active" ? true : false;
  const [state, setState] = React.useState(val);
  const handleStatusChange = (event) => {
    setState(event.target.checked);
    setOpen(true);
  };

  return (
    <Paper
      elevation={3}
      className="home_card"
      sx={{
        borderRadius: "15px",
        backgroundColor: "grey1",
        marginBottom: "1em",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          padding: "5px 8px",
          alignItems: "center",
          backgroundColor: "grey1",
          borderRadius: "15px",
          marginBottom: "",
        }}
      >
        <Box className="home_image" sx={{ width: "160px" }}>
          {image ? (
            <img src={image} alt="holidayhome" style={{ width: "160px" }} />
          ) : (
            <img src={imag} alt="holidayhome" style={{ width: "100px" }} />
          )}
        </Box>
        <Box className="sub_details">
          <Typography variant="p">{HolidayHomeName}</Typography>
        </Box>

        <Box className="sub_details">
          <Typography variant="p">{Category}</Typography>
        </Box>

        <Box className="button_container">
          <Link
            to={`/locationadmin/holidayhomes/editholidayhome/${HolidayHomeId}`}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "primary.main",
                textTransform: "capitalize",
                fontWeight: "bold",
                color: "white",
              }}
            >
              <Typography sx={{ fontFamily: "sans-serif" }} variant="p">
                Edit
              </Typography>{" "}
            </Button>
          </Link>
          <Link
            to={`/locationadmin/holidayhomes/viewholidayhome/${HolidayHomeId}`}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "primary.main",
                textTransform: "capitalize",
                fontWeight: "bold",
                color: "white",
              }}
            >
              <Typography sx={{ fontFamily: "sans-serif" }} variant="p">
                View
              </Typography>{" "}
            </Button>
          </Link>
        </Box>
      </Box>

      {activeToggler === true ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "0 20px",
          }}
        >
          <Switch
            inputProps={{ "aria-label": "controlled" }}
            checked={state}
            onChange={handleStatusChange}
            sx={{ color: "primary.main" }}
          />
          <Typography variant="p" sx={{ fontWeight: "bold" }}>
            {state === true ? "Set Inactive" : "set Active"}
          </Typography>
        </Box>
      ) : reason ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-Start",
            alignItems: "center",
            padding: "0 0px 20px 30px",
          }}
        >
          <Typography
            variant="p"
            sx={{ fontWeight: "bold", marginRight: "10px" }}
          >
            Reason for Decline :
          </Typography>
          <Typography variant="p" sx={{ color: "red" }}>
            {reason}
          </Typography>
        </Box>
      ) : (
        ""
      )}

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Change Status"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Typography variant="p">
              Are you sure you want to change the status of {HolidayHomeName}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleApprove}>Yes</Button>
          <Button onClick={handleClose}>No</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default HolidayHomeCard;
