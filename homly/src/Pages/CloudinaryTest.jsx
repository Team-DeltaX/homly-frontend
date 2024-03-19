import React, { useRef, useEffect,useState } from "react";

const CloudinaryTest = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  const [image, setImage] = useState("");

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dwgeetnoj",
        uploadPreset: "uih1dn9u",
      },
      function (error, result) {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          setImage(result.info.url);
        }
      }
    );
  }, []);

  return (
    <div>
      <div>cloudanaryTest</div>
      <button onClick={() => widgetRef.current.open()}>Upload Image</button>
      <img src={image} alt="uploaded" />
    </div>
  );
};

export default CloudinaryTest;
