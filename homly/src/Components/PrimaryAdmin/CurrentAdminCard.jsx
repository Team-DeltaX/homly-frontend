import {
  Box,
  Button,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import theme from "../../HomlyTheme";
import axios from 'axios'

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";

const CurrentAdminCard = (props) => {
  // const [disabled, setDisabled] = useState(true);
  // const [AdminNo, setAdminNo] = useState(props.data.Service_number);
  // const [username, setUsername] = useState(props.data.User_name);
  // const [password, setPassword] = useState(props.data.Nic_number);
  // const [contactnumber, setContactnumber] = useState(props.data.Service_number);
  // const [email, setEmail] = useState(props.data.Nic_number);
  // const [worklocation, setworkLocation] = useState(props.data.Nic_number);
  // const [displayr, setDisplayr] = useState(false);

  const handleClick = (id) => {
    axios.put(`http://localhost:3002/locationadmin/disable/${id}`,{
      dis:true
    })
    .then(res=>{
      // setnacktext('Admin Added Sucessfully!')
      // handleClick();
      props.fetchadmins();
      console.log('response')
      
     
    })
    .catch(error=>{
      // setnacktext('Somthing Went Wrong,May be admin no duplicaion,Please Try Again!')
      // handleClick();
      console.log(`error is  nm ${error}`)

    })


  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column", background: "white" },
          margin: "10px",
          padding: "0px",
          borderRadius: "15px",
          alignItems: { xs: "center" },
          columnGap: "30px",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
        }}
      >
        <Box sx={{ padding: "10px" }}>
          <AccountCircleIcon sx={{ color: "Black", fontSize: "70px" }} />
        </Box>
        <Box sx={{ padding: "10px" }}>
          <Box>Admin Number</Box>
          <Box>
            <TextField
              disabled={true}
              // onChange={(e) => {
              //   setAdminNo(e.target.value);
              // }}
              value={props.data.AdminNo}
              size="small"
              type="text"
              sx={{
                backgroundColor: "white",
              }}
              alignItems="center"
            ></TextField>
          </Box>
          <Box>User Name</Box>
          <Box>
            <TextField
              disabled={true}
              // onChange={(e) => {
              //   setUsername(e.target.value);
              // }}
              type="text"
              value={props.data.UserName}
              alignItems="center"
              sx={{
                backgroundColor: "white",
              }}
              size="small"
            ></TextField>
          </Box>
        </Box>
        <Box sx={{ padding: "10px" }}>
          <Box>Password</Box>
          <Box>
            <TextField
              disabled={true}
              // onChange={(e) => {
              //   setPassword(e.target.value);
              // }}
              size="small"
              type="text"
              value={props.data.Password}
              sx={{
                backgroundColor: "white",
              }}
              alignItems="center"
            ></TextField>
          </Box>
          <Box>Contact Number</Box>
          <Box>
            <TextField
              // disabled={disabled}
              // onChange={(e) => {
              //   setContactnumber(e.target.value);
              // }}
              type="text"
              value={props.data.ContactNo}
              alignItems="center"
              sx={{
                backgroundColor: "white",
              }}
              size="small"
            ></TextField>
          </Box>
        </Box>
        <Box sx={{ padding: "10px" }}>
          <Box>E-mail</Box>
          <Box>
            <TextField
              disabled={true}
              // onChange={(e) => {
              //   setEmail(e.target.value);
              // }}
              size="small"
              type="text"
              value={props.data.Email}
              sx={{
                backgroundColor: "white",
              }}
              alignItems="center"
            ></TextField>
          </Box>
          <Box>WorkLocation</Box>
          <Box>
            <TextField
              disabled={true}
              // onChange={(e) => {
              //   setworkLocation(e.target.value);
              // }}
              type="text"
              value={props.data.WorkLocation}
              alignItems="center"
              sx={{
                backgroundColor: "white",
              }}
              size="small"
            ></TextField>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "35px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* <Button
                  startIcon={<EditIcon />}
                  sx={{ width: "90px", borderRadius: "15px", height: "30px" }}
                  variant="contained"
                  onClick={() => {
                    setDisabled(!disabled);
                  }}
                >
                  <Typography>Edit</Typography>
                </Button> */}
          {/* <Box>{dataobj}</Box> */}
          <Box sx={{ height: "20px" }}></Box>
          <Button
            sx={{ width: "90px", height: "30px", borderRadius: "15px" }}
            variant="contained"
            onClick={() => {
              handleClick(props.data.AdminNo);
            }}
          >
            <Typography>Disable</Typography>
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default CurrentAdminCard;
