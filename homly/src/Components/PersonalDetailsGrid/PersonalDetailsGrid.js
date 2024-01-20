import React from "react";
import { useState } from "react";

import { Grid, Typography, Button } from "@mui/material";

const PersonalDetailsGrid = (props) => {
    const [buttonName, setButtonName] = useState("Edit");

    const handleEdit = () => {
        if (buttonName === "Edit") {
            setButtonName("Save");
        } else {
            setButtonName("Edit");
        }
    }
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
                    sx={{ backgroundColor:"primary.main" }}
                    style={{ display: props.editable ? "block" : "none" }}
                    onClick={handleEdit}
                >
                    {buttonName}
                </Button>
            </Grid>
        </Grid>
    );
};

export default PersonalDetailsGrid;
