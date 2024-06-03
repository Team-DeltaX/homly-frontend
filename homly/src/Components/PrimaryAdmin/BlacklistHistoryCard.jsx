import React, { useState, useEffect } from "react";
import { Box, Button, Typography, ThemeProvider } from "@mui/material";
import theme from "../../HomlyTheme";
import Skeleton from "@mui/material/Skeleton";
import AxiosClient from "../../services/AxiosClient";

const BlacklistHistoryCard = (props) => {
  const [user, setUser] = useState({});
  const [employee, setEmployee] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchUserData = () => {
    AxiosClient.get(`/admin/auth/locationadmin/user/${props.data.ServiceNo}`)
      .then((res) => {
        setUser(res.data[0]);
      })
      .catch((error) => {
        props.SetOpensnE(true);
      });
  };

  const fetchEmployeeData = () => {
    AxiosClient.get(
      `/admin/auth/locationadmin/employee/${props.data.ServiceNo}`
    )
      .then((res) => {
        setEmployee(res.data[0]);
      })
      .catch((error) => {
        props.SetOpensnE(true);
      });
  };

  useEffect(() => {
    fetchUserData();
    fetchEmployeeData();
  }, [props.data.ServiceNo]);

  // Once data is fetched, set loading to false
  useEffect(() => {
    if (user && employee) {
      setLoading(false);
    }
  }, [user, employee]);

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
        {loading ? (
          // Render skeleton while loading
          <>
            <Skeleton variant="circular" width={50} height={50} />
            <Skeleton width={100} height={20} />
            <Skeleton width={100} height={20} />
            <Skeleton width={100} height={20} />
            <Skeleton width={100} height={20} />
            <Skeleton width={100} height={20} />
            <Skeleton width={50} height={30} />
          </>
        ) : (
          // Render actual content once data is loaded
          <>
            <Box sx={{ width: { md: "10%" } }}>
              <img
                src="http://dummyimage.com/130x100.png/cc0000/ffffff"
                height="50px"
                width="50px"
                style={{ borderRadius: "50%" }}
                alt="Employee"
              />
            </Box>
            <Box sx={{ width: { md: "16%" } }}>
              <Typography sx={{ textAlign: "center" }}>
                Service Number
              </Typography>
              <Typography sx={{ fontWeight: "light", textAlign: "center" }}>
                {props.data.ServiceNo}
              </Typography>
            </Box>
            <Box sx={{ width: { md: "16%" } }}>
              <Typography sx={{ textAlign: "center" }}>User Name</Typography>
              <Typography sx={{ fontWeight: "light", textAlign: "center" }}>
                {employee.name}
              </Typography>
            </Box>
            <Box sx={{ width: { md: "16%" } }}>
              <Typography sx={{ textAlign: "center" }}>Nic Number</Typography>
              <Typography sx={{ fontWeight: "light", textAlign: "center" }}>
                {employee.nic}
              </Typography>
            </Box>
            <Box sx={{ width: { md: "16%" } }}>
              <Typography sx={{ textAlign: "center" }}>
                Blacklisted Date
              </Typography>
              <Typography sx={{ fontWeight: "light", textAlign: "center" }}>
                {props.data.BlacklistedDate.slice(0, 10)}
              </Typography>
            </Box>
            <Box sx={{ width: { md: "16%" } }}>
              <Typography sx={{ textAlign: "center" }}>Removed Date</Typography>
              <Typography sx={{ fontWeight: "light", textAlign: "center" }}>
                {props.data.RemovedDate.slice(0, 10)}
              </Typography>
            </Box>
            <Box sx={{ width: { md: "10%" } }}>
              <Button
                variant="contained"
                onClick={() => {
                  props.handlepopup();
                  props.setSelecteduser(props.data);
                  props.SetSelectEmp(employee);
                  props.SetSelectUser(user);
                }}
              >
                <Typography>View</Typography>
              </Button>
            </Box>
          </>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default BlacklistHistoryCard;
