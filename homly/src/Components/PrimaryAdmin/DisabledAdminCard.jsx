import {
  Box,
  Button,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import theme from "../../HomlyTheme";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import Copy from "./Copy";

const DisabledAdminCard = (props) => {
  const [Disabled, setDisabled] = useState(true);
  const [mobileerror, setmobileerror] = useState(false);
  const [emaileerror, setemailerror] = useState(false);
  const [contact, setContact] = useState(props.data.ContactNo);
  const [email, setemail] = useState(props.data.Email);
  const validatemobile = (number) => {
    const pattern = /^(?:\+94|0)?(?:7\d{8}|[1-9]\d{8})$/;
    setmobileerror(!pattern.test(number));
  };
  const validateemail = (email) => {
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (pattern.test(email)) {
      setemailerror(false);
    } else {
      setemailerror(true);
    }
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
          alignItems: { xs: "center", md: "normal" },
          columnGap: "84px",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
        }}
      >
        <Box
          sx={{
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AccountCircleIcon sx={{ color: "Black", fontSize: "70px" }} />
        </Box>
        <Box sx={{ padding: "10px", textAlign: "center" }}>
          <Box>Admin Number</Box>
          <Box>
            <Typography sx={{ color: "grey" }}>
              {" "}
              {props.data.AdminNo}
            </Typography>
          </Box>

          <Box>E-mail</Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            {props.editadmin === props.data.AdminNo ? (
              <TextField
                error={emaileerror}
                disabled={Disabled}
                onChange={(e) => {
                  validateemail(e.target.value);
                  setemail(e.target.value);
                }}
                size="small"
                type="text"
                value={email}
                sx={{
                  backgroundColor: "white",
                  "& fieldset": {
                    border:
                      props.editadmin === props.data.AdminNo
                        ? "1px solid #ccc"
                        : "none",
                  },
                }}
                InputProps={{
                  inputProps: {
                    style: { textAlign: "left" },
                  },
                }}
                alignItems="center"
              ></TextField>
            ) : (
              <Typography
                style={{
                  color: "grey",
                  overflowX: "scroll",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  width: "100px",
                }}
              >
                {" "}
                {props.data.Email}
              </Typography>
            )}

            <Copy text={props.data.Email} />
          </Box>
        </Box>

        <Box sx={{ padding: "10px", textAlign: "center" }}>
          <Box>User Name</Box>
          <Box>
            <Typography sx={{ color: "grey" }}>
              {" "}
              {props.data.UserName}
            </Typography>
          </Box>

          <Box>Contact Number</Box>
          <Box sx={{ textAlign: "center" }}>
            {props.editadmin === props.data.AdminNo ? (
              <TextField
                error={mobileerror}
                disabled={Disabled}
                onChange={(e) => {
                  validatemobile(e.target.value);
                  setContact(e.target.value);
                }}
                type="text"
                value={contact}
                alignItems="center"
                sx={{
                  backgroundColor: "white",
                  "& fieldset": {
                    border:
                      props.editadmin === props.data.AdminNo
                        ? "1px solid #ccc"
                        : "none",
                  },
                }}
                size="small"
              ></TextField>
            ) : (
              <Typography
                style={{
                  color: "grey",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  width: "100px",
                }}
              >
                {" "}
                {props.data.ContactNo}
              </Typography>
            )}
          </Box>
        </Box>

        <Box
          sx={{
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            textAlign: "center",
          }}
        >
          <Box>WorkLocation</Box>
          <Box>
            <Typography sx={{ color: "grey", marginTop: "5px" }}>
              {" "}
              {props.data.WorkLocation}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        ></Box>
      </Box>
    </ThemeProvider>
  );
};
export default DisabledAdminCard;
