import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";



export default function Snackbarp({ isOpen, type, message, setIsOpen }) {

  const vertical= 'top';
  const horizontal='center';
  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsOpen(false);
  };
  

  return (
    <div>
      <Snackbar 
      open={isOpen}
       autoHideDuration={4000} 
       onClose={handleClose}
       anchorOrigin={{ vertical,horizontal}}
       >
        <Alert
          onClose={handleClose}
          severity={type}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
