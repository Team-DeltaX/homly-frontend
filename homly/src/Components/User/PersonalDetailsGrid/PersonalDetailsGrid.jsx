import React from "react";
// import { useContext } from "react";
// import Editable from "./Readable";
// import Readable from "./Editable";
import { Grid, Typography, TextField } from "@mui/material";

// import { EditPersonalDetailsContext } from "../../../Contexts/EditPersonalDetailsContext";

const PersonalDetailsGrid = (props) => {
  
  return (
    <Grid container key={props.id} sx={{ width: "100%",marginBottom:'16px' }}>
      <Grid item xs={12} sm={4} md={4}>
        <Typography variant="h6" fontWeight={"bold"} sx={{margin:'4px 0'}}>
          {props.lable}
        </Typography>
      </Grid>
      <Grid item xs={9} sm={6} md={6}>
        {props.editable? 
          <TextField
            id="outlined-basic"
            value={props.value}
            variant="outlined"
            size="small"
            onChange={(e) => props.setData(e.target.value)}
            helperText={props.helperText}
            error={props.error}
          />
         : 
          <Typography
            variant="h6"
            fontWeight={"regular"}
            sx={{margin:'4px 0'}}
          >
            {props.value}
          </Typography>
        }
      </Grid>
    </Grid>
  );
};

export default PersonalDetailsGrid;
