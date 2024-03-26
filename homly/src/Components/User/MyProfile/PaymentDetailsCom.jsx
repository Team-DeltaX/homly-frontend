import React, { useState } from "react";
import {
  Box,
  Stack,
  ThemeProvider,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";

import theme from "../../../HomlyTheme";
import AddedCardCom from "../PaymentCard/AddedCardCom";
import AddCardPopup from "../PaymentCard/AddCardPopup";

const PaymentDetailsCom = () => {
  const [cardOpen, setCardOpen] = useState(false);

  const [cardDetails, setCardDetails] = useState([]);

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
                  <Button variant="contained" onClick={() => setCardOpen(true)}>
                    Add Card
                  </Button>
                </Stack>
                <Stack
                  direction="column"
                  sx={{ width: "100%", margin: "10px 5px" }}
                >
                  <Box sx={{ marginTop: "10px" }}>
                    <AddedCardCom
                      cardName="Card Holder Name"
                      cardNumber="1234 5678 9101 1121"
                    />
                  </Box>
                  <Box sx={{ marginTop: "10px" }}>
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
        {/* add card popup */}
        <AddCardPopup
          open={cardOpen}
          setOpen={setCardOpen}
          cardDetails={cardDetails}
          setCardDetails={setCardDetails}
          cardCount={cardDetails ? cardDetails.length : 0}
        />
      </Box>
    </ThemeProvider>
  );
};

export default PaymentDetailsCom;
