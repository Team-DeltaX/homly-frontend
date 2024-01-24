// import React, { useContext } from "react";
import React from "react";
import { useState } from "react";
import {
  Box,
  //   Container,
  ThemeProvider,
  Typography,
  Card,
  CardContent,
  Grid,
  //   CardActions,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";

// import PersonalDetailsGrid from "../PersonalDetailsGrid/PersonalDetailsGrid";
// import UpdateButton from "../PersonalDetailsGrid/UpdateButton";

// import { EditPersonalDetailsContext } from "../../Contexts/EditPersonalDetailsContext";

import theme from "../../HomlyTheme";

const gridData = [
  {
    id: "currentPass",
    lable: "Current Password",
    placeholder: "Enter Current Password",
  },
  { id: "newPass", lable: "New Password", placeholder: "Enter New Password" },
  {
    id: "confirmPass",
    lable: "Confirm New Password",
    placeholder: "Confirm New Password",
  },
];

const Security = () => {
  // const { userPersonalDetails } = useContext(EditPersonalDetailsContext);
  const [password, setPassword] = useState({
    currentPass: "",
    newPass: "",
    confirmPass: "",
  });
  const [error, setError] = useState({
    currentPass: false,
    newPass: false,
    confirmPass: false,
  });
  const [visible, setVisible] = useState({
    currentPass: false,
    newPass: false,
    confirmPass: false,
  });

  const handlePassword = (data, name) => {
    setPassword({ ...password, [name]: data });
  };

  const passwordComp = (id, lable, placeholder) => {
    // <Grid container sx={{ width: "100%" }}>
    //   <Grid item xs={12} sm={4} md={4}>
    //     <Typography
    //       variant="h6"
    //       fontWeight={"bold"}
    //       padding={"4 0"}
    //       component="div"
    //     >
    //       {lable}
    //     </Typography>
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={6}>
    //     <TextField
    //       sx={{ marginBottom: " 6%", width: "90%" }}
    //       id={id}
    //       placeholder={placeholder}
    //       required
    //       // error={errorConfirmPassword}
    //       // type={showConfirmPassword ? "text" : "password"}
    //       InputProps={{
    //         endAdornment: (
    //           <IconButton
    //             aria-label="toggle password visibility"
    //             // onClick={handleClickShowConfirmPassword}
    //             // onMouseDown={handleMouseDownPassword}
    //             edge="end"
    //           >
    //             {/* {showConfirmPassword ? (
    //                           <VisibilityOff />
    //                         ) : (
    //                           <Visibility />
    //                         )} */}
    //           </IconButton>
    //         ),
    //       }}
    //       // onFocus={() => setFocusedConfirmPassword(true)}
    //       // onBlur={() => setFocusedConfirmPassword(false)}
    //       // onChange={(e) => {
    //       //   setConfirmPassword(e.target.value);
    //       //   checkConfirmPassword(e.target.value, Password);
    //       // }}
    //       // value={ConfirmPassword}
    //       size="small"
    //       // helperText={
    //       //   errorConfirmPassword ? "password not match" : ""
    //       // }
    //       fullWidth
    //     />
    //   </Grid>
    // </Grid>
    <div>
      {lable}
    </div>
  };

  console.log("password", password);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Typography variant="h4">Security</Typography>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: { xs: "3% 0 20% 0", sm: "3% 0 0 0" },
          }}
        >
          <Card sx={{ width: { xs: "100%", sm: "90%" } }}>
            <CardContent sx={{ display: "flex", flexDirection: "column" }}>
              <form action="">
                sadfsdf
                {/* {gridData.map((item) => {
                  {
                    passwordComp(item.id, item.lable, item.placeholder);
                  }
                })} */}
                {passwordComp('1','2','3')}
              </form>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Security;
