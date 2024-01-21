import React from "react";
import { useContext } from "react";
import { Box, Button } from "@mui/material";

import { EditPersonalDetailsContext } from "../../Contexts/EditPersonalDetailsContext";

const UpdateButton = () => {
  const { handleUpdate,handleCancel,isEnable } = useContext(EditPersonalDetailsContext);
   
  return (
    <Box>
      <Button
        variant="outlined"
        size="small"
        onClick={handleCancel}
        disabled={!isEnable}
        //   style={{ display: props.editable ? "block" : "none" }}
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        size="small"
        sx={{ backgroundColor: "primary.main" }}
        onClick={handleUpdate}
        disabled={!isEnable}
        //   style={{ display: props.editable ? "block" : "none" }}
      >
        Update
      </Button>
    </Box>
  );
};

export default UpdateButton;
