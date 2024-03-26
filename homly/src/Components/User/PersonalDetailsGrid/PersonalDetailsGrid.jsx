import React from "react";
import { Grid, Typography, TextField } from "@mui/material";

const PersonalDetailsGrid = (props) => {
  return (
    <Grid container key={props.id} sx={{ width: "100%", marginBottom: "16px" }}>
      <Grid
        item
        xs={12}
        sm={4}
        md={4}
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-start" },
          alignItems: { xs: "center", sm: "flex-start" },
        }}
      >
        <Typography
          fontWeight={"bold"}
          sx={{ margin: "4px 0", fontSize: { xs: "1.1rem", sm: "1.25rem" } }}
        >
          {props.lable}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-start" },
          alignItems: { xs: "center", sm: "flex-start" },
        }}
      >
        {props.editable ? (
          <TextField
            id="outlined-basic"
            value={props.value}
            variant="outlined"
            size="small"
            onChange={(e) => props.setData(e.target.value)}
            helperText={props.helperText}
            error={props.error}
          />
        ) : (
          <Typography
            fontWeight={"regular"}
            sx={{ margin: "4px 0", fontSize: { xs: "1.1rem", sm: "1.25rem" } }}
          >
            {props.value}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default PersonalDetailsGrid;
