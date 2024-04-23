import React from "react";
import {
  ThemeProvider,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
} from "@mui/material";

import theme from "../../HomlyTheme";

const districts = [
  "Colombo",
  "Gampaha",
  "Kalutara",
  "Kandy",
  "Matale",
  "Nuwara Eliya",
  "Galle",
  "Matara",
  "Hambantota",
  "Jaffna",
  "Mannar",
  "Vavuniya",
  "Mullaitivu",
  "Kilinochchi",
  "Batticaloa",
  "Ampara",
  "Trincomalee",
  "Kurunegala",
  "Puttalam",
  "Anuradhapura",
  "Polonnaruwa",
  "Badulla",
  "Monaragala",
  "Ratnapura",
  "Kegalle",
];

export default function DistrictSelectCom({ district, setDistrict }) {
  const handleChange = (event) => {
    setDistrict(event.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <FormControl fullWidth size="small">
        <InputLabel id="district">District</InputLabel>
        <Select
          size="small"
          labelId="district"
          defaultValue={"None"}
          value={district}
          label="District"
          sx={{ width: "100%" }}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>

          {districts.map((district, index) => (
            <MenuItem key={index} value={district}>
              {district}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </ThemeProvider>
  );
}
