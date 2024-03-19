import React, { useRef, useEffect, useState } from "react";
import { Stack, ThemeProvider, Button, Typography } from "@mui/material";
import theme from "../../HomlyTheme";

const UploadImageCloudinary = ({
  folderName,
  setImage,
  isMultiple,
  limit,
  buttonName,
  buttonVariant,
  isDisplayImageName,
}) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  const [imageName, setImageName] = useState("");

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;

    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dwgeetnoj",
        uploadPreset: "auzerdek",
        // add one image limit
        multiple: isMultiple,
        maxFiles: limit,
        // upload folder
        folder: folderName,
        // crop image
        cropping: true,
        croppingAspectRatio: 1,
        croppingCoordinatesMode: "custom",
        croppingShowDimensions: true,
        croppingDefaultSelectionRatio: 0.75,
      },
      function (error, result) {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result);
          setImage(result.info.secure_url); // Use result.info.secure_url
          setImageName(result.info.original_filename);
        }
      }
    );
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Stack direction="row" sx={{justifyContent:"center"}}>
        <Button variant={buttonVariant} onClick={() => widgetRef.current.open()}>{buttonName}</Button>
        <Typography sx={{ display: isDisplayImageName?"flex":"none", marginLeft:"5px" }}>{imageName}</Typography>
      </Stack>
    </ThemeProvider>
  );
};

export default UploadImageCloudinary;
