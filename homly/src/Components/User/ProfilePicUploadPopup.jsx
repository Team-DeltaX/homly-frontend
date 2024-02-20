import React, { useState, useRef } from "react";
import {
  ThemeProvider,
  Dialog,
  DialogActions,
  TextField,
  Button,
  DialogContent,
  DialogTitle,
  Slider,
  Stack,
} from "@mui/material";
import theme from "../../HomlyTheme";
import AvatarEditor from "react-avatar-editor";

export default function ProfilePicUploadPopup({ setOpen, open, setImage }) {
  const editedImageRef = useRef(null);
  const [tempImage, setTempImage] = useState(null);
  const [scale, setScale] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const handleClose = () => {
    setOpen(false);
    setIsVisible(false);
  };

  const handleSubmit = () => {
    if (editedImageRef.current) {
      const canvas = editedImageRef.current.getImageScaledToCanvas();
      const dataURL = canvas.toDataURL();
      setImage(dataURL);
      console.log(dataURL);
      
    }
    setOpen(false);
    setIsVisible(false);
  };

  const handleChanege = (event) => {
    setIsVisible(true);
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      setTempImage(reader.result);
      console.log(reader.result);
    };
  };

  const handleScaleChange = (event, newValue) => {
    setScale(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Upload Image</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="image"
            type="file"
            fullWidth
            onChange={handleChanege}
          />
          <Stack direction='column' sx={{display:isVisible?'flex':'none'}}>
            <AvatarEditor
              ref={editedImageRef}
              image={tempImage}
              width={180}
              height={180}
              border={50}
              color={[255, 255, 255, 0.6]} // RGBA
              scale={scale}
              rotate={0}
            />
            <Slider
              aria-label="Volume"
              min={1}
              max={10}
              step={0.1}
              value={scale}
              onChange={handleScaleChange}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
