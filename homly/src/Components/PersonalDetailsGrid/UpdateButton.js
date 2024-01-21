import React from "react";
import { useContext, useState } from "react";
import { Box, Button } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import { EditPersonalDetailsContext } from "../../Contexts/EditPersonalDetailsContext";

const UpdateButton = () => {
  const { handleUpdate, handleCancel, isEnable } = useContext(
    EditPersonalDetailsContext
  );
  const [isUpdate, setIsUpdate] = useState(false);
  const [isCancel, setIsCancel] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    if (isUpdate) {
      setIsUpdate(false);
    } else {
      setIsCancel(false);
    }
  };

  const handleUpdateData = () => {
    handleUpdate();
    console.log("update");
    setIsUpdate(true);
  };

  const handleCancelData = () => {
    handleCancel();
    console.log("cancel");
    setIsCancel(true);
  };

  return (
    <Box sx={{width:'100%',display:"flex",justifyContent:"flex-end"}}>
      <Button
        variant="outlined"
        size="small"
        onClick={handleCancelData}
        disabled={!isEnable}
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        size="small"
        sx={{ backgroundColor: "primary.main",marginLeft:'2%' }}
        onClick={handleUpdateData}
        disabled={!isEnable}
      >
        Update
      </Button>
      <Snackbar autoHideDuration={3000} onClose={handleClose} open={isCancel} >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{
            width: "100%",
            backgroundColor:"error.light",
          }}
        >
          "Cancelled your changes!"
        </Alert>
      </Snackbar>
      <Snackbar autoHideDuration={3000} onClose={handleClose} open={isUpdate } >
        <Alert
          severity= "success" 
          variant="filled"
          sx={{
            width: "100%",
            backgroundColor:  "success.light" ,
          }}
        >
           "Successfully Updated!" 
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default UpdateButton;
