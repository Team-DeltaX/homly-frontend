import React, { useEffect } from "react";
import { useState } from "react";
import {
  Stack,
  ThemeProvider,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import theme from "../../../HomlyTheme";

export default function AddedCardCom(props) {
  const [hidecardNumber, setHideCardNumber] = useState("");

  useEffect(() => {
    const cardNumber = props.cardNumber;
    const hiddenCardNumber = cardNumber.slice(0, 4) + " **** **** ****";
    setHideCardNumber(hiddenCardNumber);
  }, [props.cardNumber]);

  const handleDelete = () => {};

  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction="row"
        sx={{
          bgcolor: "grey1",
          alignItems: { xs: "flex-start", sm: "center" },
          justifyContent: "space-between",
          borderRadius: "10px",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{
            width: { xs: "100%", sm: "70%" },
            padding: "10px",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">{props.cardName}</Typography>
          <Typography variant="h6">{hidecardNumber}</Typography>
        </Stack>
        <IconButton aria-label="delete" color="primary">
          <DeleteIcon />
        </IconButton>
      </Stack>
    </ThemeProvider>
  );
}
