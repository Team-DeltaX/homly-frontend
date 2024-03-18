import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CancelOutlined } from "@mui/icons-material";
import axios from "axios";

export default function SimpleLineChart() {
  const [h1data, setH1data] = React.useState([]);
  const [h2data, setH2data] = React.useState([]);
  const [h3data, setH3data] = React.useState([]);
  const [HolidayHomes, setHolidayHomes] = React.useState([]);

  const Home1 = h1data;
  // [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const Home2 = h2data;
  // [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const Home3 = h3data;
  // [2434, 2398, 6345, 9533, 4999, 7600, 1000];
  const [xaxisd, setXasisd] = React.useState([]);

  const xLabels = [
    xaxisd[0],
    xaxisd[1],
    xaxisd[2],
    xaxisd[3],
    xaxisd[4],
    xaxisd[5],
    xaxisd[6],
  ];
  // const HolidayHomes = [
  //   // { id: "0", name: "None" },
  //   { id: "1", name: "hh1" },
  //   { id: "2", name: "hh2" },
  //   { id: "3", name: "hh3" },
  //   { id: "4", name: "hh4" },
  //   { id: "5", name: "hh5" },
  //   { id: "6", name: "hh6" },
  //   { id: "7", name: "hh7" },
  //   { id: "8", name: "hh8" },
  // ];

  const [HolidayHome1, SetHolidayHome1] = React.useState("");
  const [HolidayHome2, SetHolidayHome2] = React.useState("");
  const [HolidayHome3, SetHolidayHome3] = React.useState("");

  const handleChangehh1 = (event) => {
    SetHolidayHome1(event.target.value);
    setH1data([4000, 3000, 2000, 2780, 1890, 2390, 3490]);
  };

  const handleChangehh2 = (event) => {
    SetHolidayHome2(event.target.value);
    setH2data([2400, 1398, 9800, 3908, 4800, 3800, 4300]);
  };

  const handleChangehh3 = (event) => {
    SetHolidayHome3(event.target.value);
    setH3data([2434, 2398, 6345, 9533, 4999, 7600, 1000]);
  };
  const getLastSevenDays = () => {
    const dates = [];
    const today = new Date();

    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      dates.push(date.toISOString().split("T")[0]);
    }

    return dates;
  };
  const getHHnames=()=>{
    axios.get('http://localhost:3002/admin/auth/hhnames')
    .then((res)=>{
      // setHolidayHomes1(res.data.HH)
      // console.log('---------holiday homes-------')
      // console.log(res.data.HH)
      setHolidayHomes(res.data.HH)
    
    })
    .catch((err)=>{
      console.log(err)
    }
    )
  }
  React.useEffect(() => {
    setXasisd(getLastSevenDays());
    getHHnames()
  }, []);

  return (
    <Box sx={{ marginTop: "40px" }}>
      {/* {xaxisd} */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
                return (
                  (HolidayHome2 !== hh.HolidayHomeId && HolidayHome3 !== hh.HolidayHomeId) 
                );
              }).map((hh) => {
                return <MenuItem value={hh.HolidayHomeId}>{hh.Name}</MenuItem>;
              })}
            </Select>
            <FormHelperText>
              {HolidayHome1 === "" ? (
                "select Home two to analyse"
              ) : (
                <Typography sx={{ color: "green" }}>
                  6.87 Total Ratings
                </Typography>
              )}
            </FormHelperText>
          </FormControl>
          <Box
            sx={{ marginBottom: "10px", cursor: "pointer" }}
            onClick={() => {
              SetHolidayHome1("");
              setH1data([]);
            }}
          >
            <CancelOutlined />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
                return (
                  (HolidayHome1 !== hh.HolidayHomeId && HolidayHome3 !== hh.HolidayHomeId)
                );
              }).map((hh) => {
                return <MenuItem value={hh.HolidayHomeId}>{hh.Name}</MenuItem>;
              })}
            </Select>
            <FormHelperText>
              {HolidayHome2 === "" ? (
                "select Home two to analyse"
              ) : (
                <Typography sx={{ color: "red" }}>
                  3.87 Total Ratings
                </Typography>
              )}
            </FormHelperText>
          </FormControl>
          <Box
            sx={{ marginBottom: "10px", cursor: "pointer" }}
            onClick={() => {
              SetHolidayHome2("");
              setH2data([]);
            }}
          >
            {" "}
            <CancelOutlined />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
                return (
                  (HolidayHome1 !== hh.HolidayHomeId && HolidayHome2 !== hh.HolidayHomeId)
                );
              }).map((hh) => {
                return <MenuItem value={hh.HolidayHomeId}>{hh.Name}</MenuItem>;
              })}
            </Select>

            <FormHelperText>
              {HolidayHome3 === "" ? (
                "select Home two to analyse"
              ) : (
                <Typography sx={{ color: "green" }}>
                  6.87 Total Ratings
                </Typography>
              )}{" "}
            </FormHelperText>
          </FormControl>
          <Box
            sx={{ marginBottom: "10px", cursor: "pointer" }}
            onClick={() => {
              SetHolidayHome3("");
              setH3data([]);
            }}
          >
            {" "}
            <CancelOutlined />
          </Box>
        </Box>
      </Box>
      <LineChart
        sx={{ marginTop: "40px" }}
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
