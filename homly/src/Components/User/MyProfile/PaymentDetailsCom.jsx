// import React, { useContext } from "react";
import React from "react";
import {
  Box,
  Stack,
  ThemeProvider,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";

// import PersonalDetailsGrid from "../PersonalDetailsGrid/PersonalDetailsGrid";
// import UpdateButton from "../PersonalDetailsGrid/UpdateButton";

// import { EditPersonalDetailsContext } from "../../Contexts/EditPersonalDetailsContext";

import theme from "../../../HomlyTheme";
import AddedCardCom from "../PaymentCard/AddedCardCom";

const PaymentDetailsCom = () => {
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
            <CardContent sx={{ display: "flex", flexDirection: "column" }}>
              <Stack direction="column">
                <Stack
                  direction="row"
                  sx={{
                    width: "100%",
                    height: "50px",
                    alignItems: "center",
                    justifyContent: "end",
                  }}
                >
                  <Button variant="contained">Add Card</Button>
                </Stack>
                <Stack
                  direction="column"
                  sx={{ width: "100%", margin: "10px 5px" }}
                >
                  <Box sx={{marginTop:'10px'}}>
                    <AddedCardCom
                      cardName="Card Holder Name"
                      cardNumber="1234 5678 9101 1121"
                    />
                  </Box>
                  <Box sx={{marginTop:'10px'}}>
                    <AddedCardCom
                      cardName="Card Holder Name"
                      cardNumber="1234 5678 9101 1121"
                    />
                  </Box>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default PaymentDetailsCom;
