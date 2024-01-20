import React from "react";
import { useState, useContext } from "react";

import { Grid, Typography, Button } from "@mui/material";

import { EditPersonalDetailsContext } from "../../Contexts/EditPersonalDetailsContext";

const Editable = (props) => {
  const { currentEditId, handleEditId } = useContext(
    EditPersonalDetailsContext
  );
  console.log("currentEditId");
  console.log(currentEditId);
  // const [buttonName, setButtonName] = useState("Edit");
  // const [active, setActive] = useState(false);

  const handleEdit = () => {
    {
      props.id && handleEditId(props.id);
    }
  };

  return (
    <Grid container key={props.id}>
      <Grid item md={4}>
        <Typography variant="h6" fontWeight={"regular"} component="div">
          {props.lable}
        </Typography>
      </Grid>
      <Grid item md={6}>
        <Typography variant="h6" fontWeight={"regular"} component="div">
          {props.value}
        </Typography>
      </Grid>
      <Grid item md={2}>
        <Button
          variant="contained"
          size="small"
          sx={{ backgroundColor: "primary.main" }}
          style={{ display: props.editable ? "block" : "none" }}
          onClick={handleEdit}
        >
          Edit
        </Button>
      </Grid>
    </Grid>
  );
};

export default Editable;
