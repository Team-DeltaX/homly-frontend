import React from "react";
import { ThemeProvider, MenuItem, Select, InputLabel, FormControl  } from "@mui/material";

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
         <FormControl fullWidth>
        <InputLabel id="district">District</InputLabel>
      <Select
        size="small"
        labelId="district"
        value={district}
        label="District"
        sx={{ width: "100%" }}
        onChange={handleChange}
      >
        {districts.map((district) => {
          return <MenuItem key={district} value={district.toLowerCase()}>{district}</MenuItem>;
        })}
      </Select>
      </FormControl>
    </ThemeProvider>
  );
}
