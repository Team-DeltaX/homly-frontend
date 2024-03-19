import React, { useRef, useEffect, useState } from "react";

const UploadImageCloudinary = ({folderName,image,setImage,isMultiple,limit}) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  const [croppedImage, setCroppedImage] = useState(""); // Change 'image' to 'croppedImage'

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
        folder: 'profile-pic',
        // crop image
        cropping: true,
        croppingAspectRatio: 1,
        croppingCoordinatesMode: 'custom',
        croppingShowDimensions: true,
        croppingDefaultSelectionRatio: 0.75
      },
      function (error, result) {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result);
          setCroppedImage(result.info.secure_url); // Use result.info.secure_url
        }
      }
    );
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div>cloudanaryTest</div>
      <button onClick={() => widgetRef.current.open()}>Upload Image</button>
      <div>
        {croppedImage && <img src={croppedImage} alt="cropped" style={{ width: "200px" }} />} {/* Use 'croppedImage' */}
      </div>
    </div>
  );
};

export default UploadImageCloudinary;
