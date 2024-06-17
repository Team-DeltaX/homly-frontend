import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import imag from "../../Assets/images/H.png";
import { Link } from "react-router-dom";

const HolidayHomeCard = ({
  HolidayHomeId,
  HolidayHomeName,
  Category,
  image,
}) => {
  return (
    <Paper
      elevation={3}
      className="home_card"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        padding: "5px 8px",
        alignItems: "center",
        backgroundColor: "grey1",
        borderRadius: "15px",
        marginBottom: "1em",
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
          to={`/primaryadmin/holidayhomes/viewholidayhome/${HolidayHomeId}/view`}
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
    </Paper>
  );
};

export default HolidayHomeCard;
