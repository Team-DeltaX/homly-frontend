import React, { useState } from "react";
import { ThemeProvider, TextField, InputAdornment } from "@mui/material";
import theme from "../../../HomlyTheme";

export default function InputTextWithIcon({
  lable,
  icon,
  inputType,
  error,
  helperText,
  required,
  inputValue,
  setInputValue,
  marginBottom,
}) {
  const [focused, setFocused] = useState(false);
  const countChar = (str) => {
    let withoutSpace = str.replace(/\s/g, "");
    let len = withoutSpace.length;
    return len;
  };
  return (
    <ThemeProvider theme={theme}>
      <TextField
        autoComplete="off"
        sx={{
          marginBottom: marginBottom
            ? marginBottom
            : { xs: "7%", sm: "6%", md: "5%" },
          width: "90%",
        }}
        id={lable}
        label={lable}
        required={required}
        type={inputType}
        error={error}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
        }}
        InputLabelProps={{
          shrink: focused || countChar(inputValue) !== 0,
          style: {
            marginLeft: focused || countChar(inputValue) !== 0 ? 0 : 35,
          },
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
        size="small"
        helperText={helperText}
        fullWidth
      />
    </ThemeProvider>
  );
}
