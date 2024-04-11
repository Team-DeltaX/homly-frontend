import { Box, Button, ThemeProvider, Typography } from "@mui/material";
import theme from "../../HomlyTheme";
import { useEffect, useState } from "react";
import axios from "axios";

const BlacklistedUsersCardNew = (props) => {
  const [User, SetUser] = useState({});
  const [Employee, SetEmployee] = useState({});
  const fetchfromemployee = () => {
    axios
      .get(
        `${global.API_BASE_URL}/admin/auth/locationadmin/employee/${props.data.ServiceNo}`
      )
      .then((res) => {
        SetEmployee(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchfromuser = () => {
    axios
      .get(
        `${global.API_BASE_URL}/admin/auth/locationadmin/user/${props.data.ServiceNo}`
      )
      .then((res) => {
        SetUser(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchfromemployee();
    fetchfromuser();
  }, [props.data.ServiceNo]);
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { md: "row", xs: "column", sm: "row" },
          alignItems: { xs: "center" },
          backgroundColor: "#E9E9E9",
          padding: "20px",
          borderRadius: "15px",
          margin: "10px",
        }}
        key={props.data.ServiceNo}
      >
        <Box
          sx={{
            width: { md: "10%" },
          }}
        >
          <img
            src="https://img.nbc.com/files/images/2023/2/08/Blacklist_S10-Logo-1920x1080.jpg"
            height="50px"
            width="50px"
            style={{ borderRadius: "50%" }}
          ></img>
        </Box>
        <Box
          sx={{
            width: { md: "18%" },
          }}
        >
          <Typography sx={{ textAlign: "center" }}>Service Number</Typography>
          <Typography sx={{ fontWeight: "light", textAlign: "center" }}>
            {props.data.ServiceNo}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { md: "18%" },
          }}
        >
          <Typography sx={{ textAlign: "center" }}>User Name</Typography>
          <Typography sx={{ fontWeight: "light", textAlign: "center" }}>
            {Employee.name}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { md: "18%" },
          }}
        >
          <Typography sx={{ textAlign: "center" }}>Nic Number</Typography>
          <Typography sx={{ fontWeight: "light", textAlign: "center" }}>
            {Employee.nic}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { md: "18%" },
          }}
        >
          <Typography sx={{ textAlign: "center" }}>Blacklisted Date</Typography>
          <Typography sx={{ fontWeight: "light", textAlign: "center" }}>
            {props.data.Date.slice(0, 10)}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { md: "10%" },
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              props.handlepopup();
              props.setSelecteduser(props.data);
              props.setSelectuser(User);
              props.setselectemp(Employee);
            }}
          >
            <Typography>View</Typography>
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default BlacklistedUsersCardNew;
