import {
  Box,
  Button,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import theme from "../../HomlyTheme";
import "../../Components/PrimaryAdmin/Css/complaintpopup.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CancelIcon from "@mui/icons-material/Cancel";
import ConfirmPopup from "./ConfirmPopup";
import axios from "axios";

const ViewPopupComplaints = (props) => {
  const [reson, setReson] = useState("");
  const [expand, setExpand] = useState(false);

  const [Open, setOpen] = useState(false);
  const [disable, Setdisable] = useState(false);

  const check_already_exists = () => {
    axios
      .get(
        `http://localhost:3002/admin/auth/isexist/${props.selecteduser.ServiceNo}`
      )
      .then((res) => {
        Setdisable(res.data.exist);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const mark_on_open = () => {
    axios
      .put("http://localhost:3002/admin/auth/markcomplaint", {
        CompID: props.selecteduser.ComplaintID
      })
      .then(() => {
        console.log("marked as blacklisted");
        props.fetchcomplaints();
      });
  };

  const handleaddtoblacklist = () => {
    axios
      .post("http://localhost:3002/admin/auth/blacklist", {
        Reason: reson,
        ServiceNo: props.selecteduser.ServiceNo,
      })
      .then((res) => {
        console.log(res);
        props.SetOpensn(true);
      })
      .catch((err) => {
        console.log(err);
        props.SetOpensnE(true);
      });

    setOpen(false);
    props.handlepopup();
  };

  useEffect(() => {
    props.fetchprevcomplaints();
    check_already_exists();
    mark_on_open();
  }, [props.popup]);

  const handleclick = () => {
    console.log("handle");
    setOpen(false);
  };

  const getonlydate = (date) => {
    const dateTimeString = props.prevcomplaints[date].created_at;
    const dateObject = new Date(dateTimeString);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getDate()).padStart(2, "0");

    const dateOnlyString = `${year}-${month}-${day}`;
    return dateOnlyString;
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        className="popup"
        sx={{
          position: "fixed",
          left: "0",
          right: "0",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 100,
        }}
        onClick={(e) => {
          console.log(e.target.className);
          if (e.target.className === "popup MuiBox-root css-4e0c2m") {
            props.handlepopup();
          }
        }}
      >
        <Box>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "20px",
              width: { md: "500px", xs: "350px" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              maxHeight: { md: "100%", xs: "690px" },
              overflow: "auto",
              marginTop: { xs: "15px" },
            }}
          >
            <Button
              sx={{
                position: "absolute",
                right: "0px",
                top: "0px",
                padding: "10px",
                color: "black",
              }}
              onClick={() => {
                props.handlepopup();
              }}
            >
              <CancelIcon />
            </Button>
            <Box
              sx={{
                display: "felx",
                flexDirection: "column",
               
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { md: "row", xs: "column" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "10px",
                  marginTop: { md: "5px", xs: "129px" },
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography h6>Service Number</Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <TextField
                    disabled
                    value={props.selecteduser.ServiceNo}
                    size="small"
                    sx={{ width: "85%", margin: "5px" }}
                  ></TextField>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { md: "row", xs: "column" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "10px",
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography h6>Reservation Number</Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <TextField
                    disabled
                    value={props.selecteduser.ReservationNo}
                    size="small"
                    sx={{ width: "85%", margin: "5px" }}
                  ></TextField>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { md: "row", xs: "column" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "10px",
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography h6>Date</Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <TextField
                    value={props.selecteduser.created_at}
                    disabled
                    size="small"
                    sx={{ width: "85%", margin: "5px" }}
                  ></TextField>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { md: "row", xs: "column" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "10px",
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography h6>Description</Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <TextField
                    multiline
                    maxRows={2}
                    disabled
                    value={props.selecteduser.Reason}
                    size="small"
                    sx={{ width: "85%", margin: "5px" }}
                  ></TextField>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { md: "row", xs: "column" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "10px",
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography h6>Blacklist Reson</Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <TextField
                    value={reson}
                    size="small"
                    sx={{ width: "85%", margin: "5px" }}
                    onChange={(e) => {
                      setReson(e.target.value);
                    }}
                  ></TextField>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { md: "row", xs: "column" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "10px",
                }}
              >
                <div>
                  {props.prevcomplaints.length > 0 &&
                  props.selecteduser.ComplaintID !==
                    props.prevcomplaints[props.prevcomplaints.length - 1]
                      .ComplaintID ? (
                    <Accordion
                      expanded={!expand}
                      onClick={() => {
                        setExpand(!expand);
                      }}
                      sx={{
                        width: "330px",
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                      >
                        <Typography>
                          <Box>Complaint on</Box>
                        </Typography>
                        <Typography>
                          <Box>
                            {" "}
                            {getonlydate(props.prevcomplaints.length - 1)}
                          </Box>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          {
                            props.prevcomplaints[
                              props.prevcomplaints.length - 1
                            ].Reason
                          }
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ) : (
                    ""
                  )}
                  {props.prevcomplaints.length >= 2 &&
                  props.selecteduser.ComplaintID !==
                    props.prevcomplaints[props.prevcomplaints.length - 2]
                      .ComplaintID ? (
                    <Accordion
                      expanded={expand}
                      onClick={() => {
                        setExpand(!expand);
                      }}
                      sx={{
                        width: "330px",
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                      >
                        <Typography>
                          Complaint on{" "}
                          {getonlydate(props.prevcomplaints.length - 2)}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          {
                            props.prevcomplaints[
                              props.prevcomplaints.length - 2
                            ].Reason
                          }
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ) : (
                    ""
                  )}
                </div>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { md: "row", sx: "column" },
                  justifyContent: "flex-end",
                  alignItems: "center",
                  margin: "10px",
                }}
              >
                <Button variant="contained" sx={{ marginRight: "3%" }}>
                  <Typography sx={{ fontSize: "10px" }}>
                    Send Warning
                  </Typography>
                </Button>
                <ConfirmPopup
                  open={Open}
                  setOpen={setOpen}
                  title={"Black List User Confirmation"}
                  text={"Are you sure you want to Blacklist This User?"}
                  controlfunction={handleaddtoblacklist}
                />

                <Button
                  variant="contained"
                  sx={{ marginRight: "3%" }}
                  onClick={() => {
                    if (reson !== "") {
                      setOpen(true);
                    }
                  }}
                  disabled={disable}
                >
                  <Typography sx={{ fontSize: "10px" }}>
                    Add To Blacklist
                  </Typography>
                </Button>
                <Button
                  variant="outlined"
                  sx={{ marginRight: "5%" }}
                  onClick={() => {
                    setOpen(true);

                    props.handlepopup();
                  }}
                >
                  <Typography sx={{ fontSize: "11px" }}> Close</Typography>
                </Button>
              </Box>
              {disable && (
                <Typography sx={{ color: "red", fontSize: "10px" }}>
                  Note:This User Alread Blacklisted!
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default ViewPopupComplaints;
