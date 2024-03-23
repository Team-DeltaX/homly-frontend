import {
  Box,
  Button,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import css from "./Css/viewadmin.css";
import theme from "../../HomlyTheme";
import EditIcon from "@mui/icons-material/EditCalendar";
import SaveIcon from "@mui/icons-material/Save";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";

const ViewAdminCard2 = (props) => {
  const [disabled, setDisabled] = useState(true);
  const [AdminNo, setAdminNo] = useState(props.data.Service_number);
  const [username, setUsername] = useState(props.data.User_name);
  const [password, setPassword] = useState(props.data.Nic_number);
  const [contactnumber, setContactnumber] = useState(props.data.Service_number);
  const [email, setEmail] = useState(props.data.Nic_number);
  const [worklocation, setworkLocation] = useState(props.data.Nic_number);
  const [displayr, setDisplayr] = useState(false);

  const handlesave = () => {
    const dataobj = {
      Adminno: AdminNo,
      username: username,
      password: password,
      contactno: contactnumber,
      email: email,
      worklocation: worklocation,
    };
    console.log("hello");
    console.log(dataobj);
    setDisplayr(!displayr);
    setDisabled(!disabled);
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
              disabled={disabled}
              onChange={(e) => {
                setAdminNo(e.target.value);
              }}
              value={AdminNo}
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
              disabled={disabled}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
              value={username}
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
              disabled={disabled}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              size="small"
              type="text"
              value={password}
              sx={{
                backgroundColor: "white",
              }}
              alignItems="center"
            ></TextField>
          </Box>
          <Box>Contact Number</Box>
          <Box>
            <TextField
              disabled={disabled}
              onChange={(e) => {
                setContactnumber(e.target.value);
              }}
              type="text"
              value={contactnumber}
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
              disabled={disabled}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              size="small"
              type="text"
              value={email}
              sx={{
                backgroundColor: "white",
              }}
              alignItems="center"
            ></TextField>
          </Box>
          <Box>WorkLocation</Box>
          <Box>
            <TextField
              disabled={disabled}
              onChange={(e) => {
                setworkLocation(e.target.value);
              }}
              type="text"
              value={worklocation}
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
            marginTop: "10px",
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
              handlesave();
            }}
          >
            <Typography>Disable</Typography>
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default ViewAdminCard2;
