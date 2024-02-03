// import React, { useContext } from "react";
import React from "react";
import {
  Box,
  //   Container,
  ThemeProvider,
  Typography,
  //   Card,
  //   CardContent,
  //   CardActions,
} from "@mui/material";

// import PersonalDetailsGrid from "../PersonalDetailsGrid/PersonalDetailsGrid";
// import UpdateButton from "../PersonalDetailsGrid/UpdateButton";

// import { EditPersonalDetailsContext } from "../../Contexts/EditPersonalDetailsContext";

import theme from "../../../HomlyTheme";

const PaymentDetailsCom = () => {
  // const { userPersonalDetails } = useContext(EditPersonalDetailsContext);
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Typography variant="h4">Payment Details</Typography>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: { xs: "3% 0 20% 0" },
          }}
        >
          <Card sx={{ width: { xs: "100%", sm: "90%" } }}>
            <CardContent
              sx={{ display: "flex", flexDirection: "column" }}
            ></CardContent>
          </Card>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default PaymentDetailsCom;
