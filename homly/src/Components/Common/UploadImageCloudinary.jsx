import React, { useRef, useEffect, useState } from "react";
import { Stack, ThemeProvider, Button, Typography } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import theme from "../../HomlyTheme";

const UploadImageCloudinary = ({
  folderName,
  setImage,
  isMultiple,
  limit,
  buttonName,
  buttonVariant,
  buttonSize,
  isDisabled,
  isDisplayImageName,
  setImageName,
}) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  const [imgName, setImgName] = useState("");

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;

    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dwgeetnoj",
        uploadPreset: "auzerdek",
        // select file and url
        sources: ["local", "url"],
        // add one image limit
        multiple: isMultiple,
        // maxFiles: limit,
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
          setImgName(result.info.original_filename);
          setImageName && setImageName(result.info.original_filename);
        }
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Stack direction="row" sx={{ justifyContent: "center" }}>
        <Button
          variant={buttonVariant ? buttonVariant : "outlined"}
          size={buttonSize ? buttonSize : "small"}
          startIcon={<CloudUploadIcon />}
          disabled={isDisabled ? isDisabled : false}
          onClick={() => widgetRef.current.open()}
        >
          {buttonName ? buttonName : "upload"}
        </Button>
        <Typography
          sx={{
            display: isDisplayImageName ? "flex" : "none",
            marginLeft: "5px",
          }}
        >
          {imgName}
        </Typography>
      </Stack>
    </ThemeProvider>
  );
};

export default UploadImageCloudinary;
