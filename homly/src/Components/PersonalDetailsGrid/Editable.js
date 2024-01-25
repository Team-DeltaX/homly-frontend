import React from "react";
import { useState, useContext } from "react";

import { Grid, Typography, Button, TextField } from "@mui/material";

import { EditPersonalDetailsContext } from "../../Contexts/EditPersonalDetailsContext";

const Editable = (props) => {
  const { handleEditId, handlePersonalDetails } = useContext(EditPersonalDetailsContext);
  const [data, setData] = useState(props.value);

  const handleSave = () => {

    if (props.id) { handleEditId(""); handlePersonalDetails([props.id, data]) };


    console.log(data);
    console.log("save");
  };

  return (
    <Grid container key={props.id} sx={{width:'100%'}}>
      <Grid item xs={12} sm={4} md={4}>
        <Typography variant="h6" fontWeight={"bold"} component="div">
          {props.lable}
        </Typography>
      </Grid>
      <Grid item xs={9} sm={6} md={6}>
        <TextField
          id="outlined-basic"
          value={data}
          variant="outlined"
          size="small"
          onChange={(e) => setData(e.target.value)}
        />
      </Grid>
      <Grid item xs={3} sm={2} md={2}>
        <Button
          variant="contained"
          size="small"
          sx={{ backgroundColor: "primary.main" }}
          style={{ display: props.editable ? "block" : "none" }}
          onClick={handleSave}
        >
          Save
        </Button>
      </Grid>
    </Grid>
  );
};

export default Editable;
