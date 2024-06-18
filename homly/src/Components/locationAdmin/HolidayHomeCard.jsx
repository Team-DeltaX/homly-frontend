import React, { useEffect } from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import imag from "../../Assets/images/H.png";
import { Link } from "react-router-dom";
import Switch from "@mui/material/Switch";

const HolidayHomeCard = ({
  HolidayHomeId,
  HolidayHomeName,
  Category,
  image,
  status,
}) => {
  console.log(status);
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [state, setState] = React.useState("");
  const handleStatusChange = () => {
    console.log("status changed");
  };

  useEffect(() => {
    setState(status);
  }, []);
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <Switch
          {...label}
          checked={state === "Active" ? true : false}
          sx={{ color: "primary.main" }}
        />
        <Typography variant="p" sx={{ fontWeight: "bold" }}>
          {state === "Active" ? "Set Inactive" : "set Active"}
        </Typography>
      </Box>
    </Paper>
  );
};

export default HolidayHomeCard;
