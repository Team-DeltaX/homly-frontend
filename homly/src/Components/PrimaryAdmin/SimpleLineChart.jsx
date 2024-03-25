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

  const Home2 = h2data;

  const Home3 = h3data;

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

  const [HolidayHome1, SetHolidayHome1] = React.useState("");
  const [HolidayHome2, SetHolidayHome2] = React.useState("");
  const [HolidayHome3, SetHolidayHome3] = React.useState("");


  const setearning_HH1 = (HolidayHome1) => {
    const promises = getLastSevenDays().map((date) => {
      return axios
        .get(`http://localhost:3002/admin/auth/dayincome/${date}/${HolidayHome1}`)
        .then((res) => {
        return res.data.sumForDate;
        })
        .catch((err) => {
          console.log(err);
          return null;
        });
    });

    Promise.all(promises)
      .then((results) => {
        const filteredResults = results.filter((result) => result !== null);
       
        setH1data(filteredResults)
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const setearning_HH2 = (HolidayHome2) => {
    const promises = getLastSevenDays().map((date) => {
      return axios
        .get(`http://localhost:3002/admin/auth/dayincome/${date}/${HolidayHome2}`)
        .then((res) => {
        return res.data.sumForDate;
        })
        .catch((err) => {
          console.log(err);
          return null;
        });
    });

    Promise.all(promises)
      .then((results) => {
        const filteredResults = results.filter((result) => result !== null);
       
        setH2data(filteredResults)
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const handleChangehh1 = (event) => {
    SetHolidayHome1(event.target.value);
    setearning_HH1(event.target.value);
    
   

    

  };

  const handleChangehh2 = (event) => {
    SetHolidayHome2(event.target.value);
    setearning_HH2(event.target.value);
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
  const getHHnames = () => {
    axios
      .get("http://localhost:3002/admin/auth/hhnames")
      .then((res) => {
        setHolidayHomes(res.data.HH);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(() => {
    setXasisd(getLastSevenDays());
    getHHnames();
  }, []);

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
              onChange={(e)=>{
                handleChangehh1(e)

              }}
            >
              {HolidayHomes.filter((hh) => {
                return (
                  HolidayHome2 !== hh.HolidayHomeId &&
                  HolidayHome3 !== hh.HolidayHomeId
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
              {HolidayHomes.filter((hh) => {
                return (
                  HolidayHome1 !== hh.HolidayHomeId &&
                  HolidayHome3 !== hh.HolidayHomeId
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
              {HolidayHomes.filter((hh) => {
                return (
                  HolidayHome1 !== hh.HolidayHomeId &&
                  HolidayHome2 !== hh.HolidayHomeId
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
