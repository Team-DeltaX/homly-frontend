import {
  Box,
  Button,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { grey } from "@mui/material/colors";
import theme from "../../HomlyTheme";

const ViewPopupComplaints = (props) => {
  const [reson, setReson] = useState("");

  return (
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
            X
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
              }}
            >
              <Box>
                <Typography sx={{ fontFamily: "roboto", flex: 2 }} h6>
                  Service Number
                </Typography>
              </Box>
              <Box>
                <TextField
                  disabled
                  value={props.selecteduser.Service_number}
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
              <Box>
                <Typography sx={{ fontFamily: "roboto" }} h6>
                  Reservation Number
                </Typography>
              </Box>
              <Box>
                <TextField
                  disabled
                  value={props.selecteduser.Nic_number}
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
              <Box>
                <Typography sx={{ fontFamily: "roboto" }} h6>
                  Date
                </Typography>
              </Box>
              <Box>
                <TextField
                  value={props.selecteduser.date}
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
              <Box>
                <Typography sx={{ fontFamily: "roboto" }} h6>
                  Blacklist Reson
                </Typography>
              </Box>
              <Box>
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
                flexDirection: { md: "row" },
                justifyContent: "flex-end",
                alignItems: "center",
                margin: "10px",
              }}
            >
              <Button
                variant="contained"
                sx={{ fontFamily: "roboto", marginRight: "3%" }}
              >
                Add To Blacklist
              </Button>
              <Button
                variant="outlined"
                sx={{ fontFamily: "roboto", marginRight: "5%" }}
                onClick={() => {
                  props.handlepopup();
                }}
              >
                Close
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
   
  );
};
export default ViewPopupComplaints;
