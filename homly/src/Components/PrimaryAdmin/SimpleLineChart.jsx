import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";



export default function SimpleLineChart() {

    const Home1 = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const Home2 = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
    const Home3 = [2434, 2398, 6345, 9533, 4999, 7600, 1000];
      const [xaxis,setXasis]=React.useState([])

    
    const xLabels = xaxis
    const HolidayHomes = [
      { id: "1", name: "hh1" },
      { id: "2", name: "hh2" },
      { id: "3", name: "hh3" },
      { id: "4", name: "hh4" },
      { id: "5", name: "hh5" },
      { id: "6", name: "hh6" },
      { id: "7", name: "hh7" },
      { id: "8", name: "hh8" },
    ];  




  const [HolidayHome1, SetHolidayHome1] = React.useState("");
  const [HolidayHome2, SetHolidayHome2] = React.useState("");
  const [HolidayHome3, SetHolidayHome3] = React.useState("");

  const handleChangehh1 = (event) => {
    SetHolidayHome1(event.target.value);
  };

  const handleChangehh2 = (event) => {
    SetHolidayHome2(event.target.value);
  };

  const handleChangehh3 = (event) => {
    SetHolidayHome3(event.target.value);
  };
  const getLastSevenDays = () => {
    const dates = [];
    const today = new Date();
  
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      dates.push(date.toISOString().split('T')[0]); // Format as YYYY-MM-DD
    }
  
    return dates;
  };
  React.useEffect(()=>{
    setXasis(getLastSevenDays)



  },[])
  return (
    <Box sx={{ marginTop: "40px" }}>
       
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">
              HolidayHome 1
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={HolidayHome1}
              label="Holidayhome1"
              onChange={handleChangehh1}
            >
              {/* <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
              {HolidayHomes.filter((hh) => {
                return HolidayHome2 !== hh.id && HolidayHome3 !== hh.id;
              }).map((hh) => {
                return <MenuItem value={hh.id}>{hh.name}</MenuItem>;
              })}
            </Select>
            <FormHelperText>
              select Home one to analyse {HolidayHome1}
            </FormHelperText>
          </FormControl>
        </Box>

        <Box>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">
              HolidayHome 2
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={HolidayHome2}
              label="Holidayhome2"
              onChange={handleChangehh2}
            >
              {/* <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
              {HolidayHomes.filter((hh) => {
                return HolidayHome1 !== hh.id && HolidayHome3 !== hh.id;
              }).map((hh) => {
                return <MenuItem value={hh.id}>{hh.name}</MenuItem>;
              })}
            </Select>
            <FormHelperText>select Home two to analyse</FormHelperText>
          </FormControl>
        </Box>

        <Box>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">
              HolidayHome 3
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={HolidayHome3}
              label="Holidayhome3"
              onChange={handleChangehh3}
            >
              {/* <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}

              {HolidayHomes.filter((hh) => {
                return  HolidayHome1 !== hh.id && HolidayHome2 !== hh.id;
              }).map((hh) => {
                return <MenuItem value={hh.id}>{hh.name}</MenuItem>;
              })}
            </Select>

            <FormHelperText>select Home three to analyse </FormHelperText>
          </FormControl>
        </Box>
      </Box>
      <LineChart
      sx={{marginTop:'40px'}}
        width={window.innerHeight < 100 ? "100" : "720"}
        height={300}
        series={[
          { data: Home1, label: "HH1" },
          { data: Home2, label: "HH2" },
          { data: Home3, label: "HH3" },
        ]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
      />
      
    </Box>
  );
}
