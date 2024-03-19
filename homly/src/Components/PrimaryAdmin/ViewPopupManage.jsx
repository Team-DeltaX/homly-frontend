import {
  Box,
  Button,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useState } from "react";
import theme from "../../HomlyTheme";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";

const ViewPopupManage = (props) => {
  const [removeReson, setRemoveReson] = useState("");

  const handleremovefromblacklist = () => {
    axios
      .delete(
        "http://localhost:3002/admin/auth/unblacklist",
        {
            data: { ServiceNo: props.selectemp.service_number }, 
            withCredentials: true,
          }
      )
      .then((res) => {
        console.log("----------fetch after remove from blacklist--------");
        props.fetch_current_blacklist();
        console.log("remove from blacklist sucess");
        
      })
      .catch((error) => {

        console.log(`delete from error is : ${error}`);
      });

    axios
      .put(
        "http://localhost:3002/admin/auth/unblacklist",
        {
          Email: props.selectuser.email,
          ServiceNo: props.selectemp.service_number,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log("unblacklist homly usertable sucess");
       
      })
      .catch((error) => {
        console.log(error);
      });

    axios.post(
      "http://localhost:3002/admin/auth/blacklisthistory",
      {
        ServiceNo: props.selectemp.service_number,
        AddReason: props.selecteduser.BlackListReason,
        BlacklistedDate: props.selecteduser.Date,
        RemoveReason: removeReson,
      },
      { withCredentials: true }
    ) .then((res) => {
        console.log("added to blacklist history sucess");
        
      })
      .catch((error) => {
        console.log(error);
      });

     
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
              width: { md: "400px" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              maxHeight: { md: "100%", xs: "690px" },
              overflow: "auto",
              marginTop: { xs: "20px" },
            }}
          >
            <Button
              sx={{
                position: "absolute",
                right: "0px",
                top: "0px",
                padding: "10px",
                borderRadius: "50%",
                color: "black",
              }}
              onClick={() => {
                props.handlepopup();
              }}
            >
              <CancelIcon />
            </Button>

            <Box
            //    sx={{
            //     Height:'50px',
            //     overflow:'scroll',
            //     background:'red'
            //    }}
            >
              <Button
                sx={{
                  position: "absolute",
                  right: "0px",
                  top: "0px",
                  padding: "10px",
                  borderRadius: "50%",
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
                  // width:'100%',
                }}
              >
                <Box
                  sx={{
                    // width:"100%",
                    display: "flex",
                    flexDirection: { md: "row", xs: "column" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    // margin:'5px'
                    marginTop: { md: "5px", xs: "199px" },
                  }}
                >
                  <Box>
                    <Typography h6>Service Number</Typography>
                  </Box>
                  <Box>
                    <TextField
                      disabled
                      value={props.selectemp.service_number}
                      size="small"
                      sx={{ width: "85%", margin: "5px" }}
                    ></TextField>
                  </Box>
                </Box>
                <Box
                  sx={{
                    // width:"100%",
                    display: "flex",
                    flexDirection: { md: "row", xs: "column" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <Box>
                    <Typography h6>User Name</Typography>
                  </Box>
                  <Box>
                    <TextField
                      disabled
                      value={props.selectemp.name}
                      size="small"
                      sx={{ width: "85%", margin: "5px" }}
                    ></TextField>
                  </Box>
                </Box>
                <Box
                  sx={{
                    // width:"100%",
                    display: "flex",
                    flexDirection: { md: "row", xs: "column" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <Box>
                    <Typography h6>Contact Number</Typography>
                  </Box>
                  <Box>
                    <TextField
                      disabled
                      size="small"
                      sx={{ width: "85%", margin: "5px" }}
                      value={
                        props.selectuser && props.selectuser.contact_number
                      }
                    ></TextField>
                  </Box>
                </Box>
                <Box
                  sx={{
                    // width:"100%",
                    display: "flex",
                    flexDirection: { md: "row", xs: "column" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <Box>
                    <Typography h6>E-mail</Typography>
                  </Box>
                  <Box>
                    <TextField
                      disabled
                      size="small"
                      sx={{ width: "85%", margin: "5px" }}
                      value={props.selectuser && props.selectuser.email}
                    ></TextField>
                  </Box>
                </Box>
                <Box
                  sx={{
                    // width:"100%",
                    display: "flex",
                    flexDirection: { md: "row", xs: "column" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <Box>
                    <Typography h6>Nic Number</Typography>
                  </Box>
                  <Box>
                    <TextField
                      disabled
                      size="small"
                      sx={{ width: "85%", margin: "5px" }}
                      value={props.selectemp.nic}
                    ></TextField>
                  </Box>
                </Box>
                <Box
                  sx={{
                    // width:"100%",
                    display: "flex",
                    flexDirection: { md: "row", xs: "column" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <Box>
                    <Typography h6>Work Location</Typography>
                  </Box>
                  <Box>
                    <TextField
                      disabled
                      size="small"
                      sx={{ width: "85%", margin: "5px" }}
                      value={props.selectemp.work_place}
                    ></TextField>
                  </Box>
                </Box>
                <Box
                  sx={{
                    // width:"100%",
                    display: "flex",
                    flexDirection: { md: "row", xs: "column" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  {/* <Box><Typography  h6>Personal Address</Typography></Box>
                                <Box ><TextField disabled size="small" sx={{width:'85%',margin:"5px"}}></TextField></Box>
                            </Box>
                            <Box sx={{
                                // width:"100%",
                                display:'flex',
                                flexDirection:{md:'row',xs:'column'},
                                justifyContent:"space-between",
                                alignItems:'center',
                                margin:'5px'
                            }}>
                                <Box><Typography  h6>Residental District</Typography></Box>
                                <Box ><TextField disabled size="small" sx={{width:'85%',margin:"5px"}}></TextField></Box> */}
                </Box>
                <Box
                  sx={{
                    // width:"100%",
                    display: "flex",
                    flexDirection: { md: "row", xs: "column" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <Box>
                    <Typography h6>Blacklisted Date</Typography>
                  </Box>
                  <Box>
                    <TextField
                      disabled
                      size="small"
                      sx={{ width: "85%", margin: "5px" }}
                      value={props.selecteduser.Date}
                    ></TextField>
                  </Box>
                </Box>
                <Box
                  sx={{
                    // width:"100%",
                    display: "flex",
                    flexDirection: { md: "row", xs: "column" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <Box>
                    <Typography h6>Blacklist Reason</Typography>
                  </Box>
                  <Box>
                    <TextField
                      disabled
                      size="small"
                      sx={{ width: "85%", margin: "5px" }}
                      value={props.selecteduser.BlackListReason}
                    ></TextField>
                  </Box>
                </Box>
                <Box
                  sx={{
                    // width:"100%",
                    display: "flex",
                    flexDirection: { md: "row", xs: "column" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <Box>
                    <Typography h6>Remove Reason</Typography>
                  </Box>
                  <Box>
                    <TextField
                      size="small"
                      sx={{ width: "85%", margin: "5px" }}
                      onChange={(e) => setRemoveReson(e.target.value)}
                    ></TextField>
                  </Box>
                </Box>
                <Box
                  sx={{
                    // width:"100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  {/* <Box><Typography sx={{fontFamily:'roboto',}} h6>Service Number</Typography></Box>
                                <Box ></Box> */}

                  <Button
                    disabled={(removeReson?.trim().length ?? 0) === 0}
                    variant="contained"
                    sx={{ marginRight: "3%" }}
                    onClick={() => {
                        console.log("remove clicked");
                        handleremovefromblacklist();
                      
                        props.handlepopup();
                    }}
                  >
                    <Typography>Remove</Typography>
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ marginRight: "5%" }}
                    onClick={() => {
                      props.handlepopup();
                    }}
                  >
                    <Typography>Close</Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default ViewPopupManage;
