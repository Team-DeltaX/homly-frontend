import {
  Box,
  Button,
  Grid,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import theme from "../../HomlyTheme";
import { useEffect, useState } from "react";
import axios from "axios";

const BlacklistHistoryCard = (props) => {
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
      >
        <Box
          sx={{
            width: { md: "10%" },
          }}
        >
          <img
            src="http://dummyimage.com/130x100.png/cc0000/ffffff"
            height="50px"
            width="50px"
            style={{ borderRadius: "50%" }}
          ></img>
        </Box>
        <Box
          sx={{
            width: { md: "16%" },
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              textAlign: "center",
              textAlign: "center",
            }}
          >
            Service Number
          </Typography>
          <Typography
            sx={{
              fontWeight: "light",
              textAlign: "center",
              textAlign: "center",
              textAlign: "center",
            }}
          >
            {props.data.ServiceNo}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { md: "16%" },
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              textAlign: "center",
              textAlign: "center",
            }}
          >
            User Name
          </Typography>
          <Typography
            sx={{
              fontWeight: "light",
              textAlign: "center",
              textAlign: "center",
              textAlign: "center",
            }}
          >
            {Employee.name}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { md: "16%" },
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              textAlign: "center",
              textAlign: "center",
            }}
          >
            Nic Number
          </Typography>
          <Typography
            sx={{
              fontWeight: "light",
              textAlign: "center",
              textAlign: "center",
              textAlign: "center",
            }}
          >
            {Employee.nic}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { md: "16%" },
          }}
        >
          <Typography sx={{ textAlign: "center", textAlign: "center" }}>
            Blacklisted Date
          </Typography>
          <Typography
            sx={{
              fontWeight: "light",
              textAlign: "center",
              textAlign: "center",
            }}
          >
            {props.data.BlacklistedDate.slice(0, 10)}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { md: "16%" },
          }}
        >
          <Typography sx={{ textAlign: "center" }}>Removed Date</Typography>
          <Typography sx={{ fontWeight: "light", textAlign: "center" }}>
            {props.data.RemovedDate.slice(0, 10)}
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
              props.SetSelectEmp(Employee);
              props.SetSelectUser(User);
            }}
          >
            <Typography>View</Typography>
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default BlacklistHistoryCard;
