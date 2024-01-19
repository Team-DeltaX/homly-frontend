import React from 'react'

import {Grid,Typography,Button} from '@mui/material'

const PersonalDetailsGrid = (props) => {
    return(
        <Grid container>
                    <Grid item md={4}>
                      <Typography
                        variant="h6"
                        fontWeight={"regular"}
                        component="div"
                      >
                        {props.lable}
                      </Typography>
                    </Grid>
                    <Grid item md={6}>
                      <Typography
                        variant="h6"
                        fontWeight={"regular"}
                        component="div"
                      >
                        {props.value}
                      </Typography>
                    </Grid>
                    <Grid item md={2}>
                      <Button
                        size="small"
                        variant="outline"
                        style={{ display: props.editable ? "block" : "none" }}
                      >
                        Edit
                      </Button>
                    </Grid>
                  </Grid>
    )
}

export default PersonalDetailsGrid