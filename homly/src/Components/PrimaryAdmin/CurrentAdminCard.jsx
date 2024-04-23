import {
  Box,
  Button,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import theme from "../../HomlyTheme";
import axios from "axios";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import ConfirmPopup from "./ConfirmPopup";
import Copy from "./Copy";

const CurrentAdminCard = (props) => {
  const [open, setOpen] = useState(false);
  const [opend, setOpend] = useState(false);
  const [Disabled, setDisabled] = useState(true);
  const [buttonname, setbuttonname] = useState("Edit");
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

  const handlesave = () => {
    console.log("saved");
    setbuttonname("Edit");
    props.Seteditadmin("");
    setDisabled(true);
    axios
      .put("http://localhost:8080/admin/auth/locationadmin", {
        AdminNo: props.data.AdminNo,
        Email: email,
        ContactNo: contact,
      })
      .then((res) => {
        props.fetchadmins();
        console.log("sucessfully updated");
      })
      .catch((error) => {
        console.log(`error occured when updating error is ${error}`);
      });
  };

  const resetpassword = () => {
    axios
      .post("http://localhost:8080/admin/auth/locationadmin/resetpassword", {
        UserName: props.data.UserName,
        Email: props.data.Email,
        AdminNo: props.data.AdminNo,
      })
      .then((res) => {
        console.log("sucessfully sent");
        props.fetchadmins();
      })
      .catch((error) => {
        console.log(`error occured when send mail error is ${error}`);
      });
    setOpen(false);
  };

  const handleClick = () => {
    axios
      .put(
        `http://localhost:8080/admin/auth/locationadmin/disable/${props.data.AdminNo}`,
        {
          dis: true,
        }
      )
      .then((res) => {
        props.fetchadmins();
        props.setsnacktext("Admin Disabled Successfully!");
        props.handlesnack();
      })
      .catch((error) => {
        console.log(`error is  nm ${error}`);
      });
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
                // disabled={disabled}
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
        >
          <ConfirmPopup
            open={opend}
            setOpen={setOpend}
            title={"Admin Disable Confirmation"}
            text={"Are you sure you want to Disable this Admin?"}
            data={props.data}
            controlfunction={handleClick}
          />
          <Button
            sx={{ width: "137px", height: "25px", borderRadius: "15px" }}
            variant="contained"
            onClick={() => {
              setOpend(true);
            }}
          >
            <Typography sx={{ fontSize: "12px" }}>Disable</Typography>
          </Button>

          <Button
            sx={{
              width: "137px",
              height: "25px",
              borderRadius: "15px",
              marginTop: "5px",
            }}
            variant="contained"
            onClick={() => {
              if (props.editadmin === "") {
                setDisabled(false);
                props.Seteditadmin(props.data.AdminNo);
                setbuttonname("Save");
              }
              if (
                buttonname == "Save" &&
                mobileerror == false &&
                emaileerror == false
              ) {
                handlesave();
              }
            }}
          >
            <Typography sx={{ fontSize: "12px" }}>{buttonname}</Typography>
          </Button>

          <ConfirmPopup
            open={open}
            setOpen={setOpen}
            title={"Reset Password"}
            text={"Are you sure you want to reset this Admin password?"}
            data={props.data}
            controlfunction={resetpassword}
          />

          <Button
            sx={{
              width: "137px",
              height: "25px",
              borderRadius: "15px",
              marginTop: "5px",
            }}
            variant="contained"
            onClick={() => {
              setOpen(true);
            }}
          >
            <Typography sx={{ fontSize: "12px" }}>Reset Password</Typography>
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default CurrentAdminCard;
