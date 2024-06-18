import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import AxiosClient from "../../../../services/AxiosClient";

const HolidayHomeImagesView = () => {
  const { homeId } = useParams();
  const [mainImage, setMainImage] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");

  useEffect(() => {
    AxiosClient.get(
      `http://localhost:8080/admin/auth/locationadmin/holidayhome/${homeId}`
    ).then((res) => {
      if (Response) {
        const homeDetails = res.data.homeDetails[0];
        console.log("images data", homeDetails);
        setMainImage(homeDetails.MainImage);
        setImage1(homeDetails.Image1);
        setImage2(homeDetails.Image2);
      } else {
        console.log("No data found");
      }
    });
  }, []);

  return (
    <Box>
      <fieldset style={{ borderRadius: "16px", color: "grey" }}>
        <legend style={{ color: "black", fontWeight: "bold" }}>
          Holiday Home Images
        </legend>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "1em",
          }}
        >
          <Box sx={{}}>
            <img src={mainImage} alt="mainImage" style={{ width: "220px" }} />
          </Box>

          <Box sx={{}}>
            <img src={image1} alt="image1" style={{ width: "220px" }} />
          </Box>
          <Box sx={{}}>
            <img src={image2} alt="image2" style={{ width: "220px" }} />
          </Box>
        </Box>
      </fieldset>
    </Box>
  );
};

export default HolidayHomeImagesView;
