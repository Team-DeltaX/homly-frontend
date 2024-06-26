import { Box, Button, ThemeProvider, Typography } from "@mui/material";
import theme from "../../HomlyTheme";
import { useEffect, useState } from "react";
import AxiosClient from "../../services/AxiosClient";

const BlacklistedUsersCardNew = (props) => {
  const [User, SetUser] = useState({});
  const [Employee, SetEmployee] = useState({});
  const fetchfromemployee = () => {
    AxiosClient.get(
      `/admin/auth/locationadmin/employee/${props.data.ServiceNo}`
    )
      .then((res) => {
        SetEmployee(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchfromuser = () => {
    AxiosClient.get(`/admin/auth/locationadmin/user/${props.data.ServiceNo}`)
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
            src={User.image ?User.image:"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"}
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
