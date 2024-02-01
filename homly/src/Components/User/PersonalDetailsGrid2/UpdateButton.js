import React from "react";
import { useContext, useState } from "react";
import { Box, Button } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import { EditPersonalDetailsContext } from "../../../Contexts/EditPersonalDetailsContext";

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
    <Box>
      <Button
        variant="outlined"
        size="small"
        onClick={handleCancelData}
        disabled={!isEnable}
        //   style={{ display: props.editable ? "block" : "none" }}
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        size="small"
        sx={{ backgroundColor: "primary.main" }}
        onClick={handleUpdateData}
        disabled={!isEnable}
        //   style={{ display: props.editable ? "block" : "none" }}
      >
        Update
      </Button>
      <Snackbar open={isUpdate || isCancel} autoHideDuration={3000}>
        <Alert
          onClose={handleClose}
          severity={isUpdate ? "success" : "error"}
          variant="filled"
          sx={{
            width: "100%",
            backgroundColor: isUpdate ? "success.light" : "error.light",
          }}
        >
          {isUpdate ? "Successfully Updated!" : "Cancelled your changes!"}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default UpdateButton;
