import React from "react";
import { useContext } from "react";

import { Grid, Typography, Button } from "@mui/material";

import { EditPersonalDetailsContext } from "../../../Contexts/EditPersonalDetailsContext";

const Readable = (props) => {
  const {  handleEditId } = useContext(
    EditPersonalDetailsContext
  );
  
  const handleEdit = () => {
    if (props.id) handleEditId(props.id);
  };

  return (
    <Grid container key={props.id} sx={{width:'100%'}}>
      <Grid item xs={12} sm={4} md={4}>
        <Typography variant="h6" fontWeight={"bold"} padding={'4 0'} component="div">
          {props.lable}
        </Typography>
      </Grid>
      <Grid item xs={9} sm={6} md={6}>
        <Typography variant="h6" fontWeight={"regular"} sx={{margin:'4px 0'}} component="div">
          {props.value}
        </Typography>
      </Grid>
      <Grid item xs={3} sm={2} md={2}>
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

export default Readable;
