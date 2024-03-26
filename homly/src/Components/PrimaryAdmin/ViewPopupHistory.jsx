import {
  Box,
  Button,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { useEffect } from "react";

const ViewPopupManage = (props) => {
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
            padding: "10px",
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
                marginTop: { md: "1px", xs: "199px" },
              }}
            >
              <Box>
                <Typography h6>Service Number</Typography>
              </Box>
              <Box>
                <TextField
                  disabled
                  value={props.SelectEmp.service_number}
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
                margin: "5px",
              }}
            >
              <Box>
                <Typography h6>User Name</Typography>
              </Box>
              <Box>
                <TextField
                  disabled
                  value={props.SelectEmp.name}
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
                margin: "5px",
              }}
            >
              <Box>
                <Typography h6>Contact Number</Typography>
              </Box>
              <Box>
                <TextField
                  value={props.SelectUser.contact_number}
                  disabled
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
                <Typography h6>E-mail</Typography>
              </Box>
              <Box>
                <TextField
                  value={props.SelectUser.email}
                  disabled
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
                <Typography h6>Nic Number</Typography>
              </Box>
              <Box>
                <TextField
                  value={props.SelectEmp.nic}
                  disabled
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
                <Typography h6>Work Location</Typography>
              </Box>
              <Box>
                <TextField
                  value={props.SelectEmp.work_place}
                  disabled
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
                <Typography h6>Personal Address</Typography>
              </Box>
              <Box>
                <TextField
                  value={props.SelectEmp.address}
                  disabled
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
                <Typography h6>Blacklisted Date</Typography>
              </Box>
              <Box>
                <TextField
                  value={props.selecteduser.BlacklistedDate}
                  disabled
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
                <Typography h6>Blacklist Reason</Typography>
              </Box>
              <Box>
                <TextField
                  value={props.selecteduser.Addreason}
                  disabled
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
                <Typography h6>Removed Reason</Typography>
              </Box>
              <Box>
                <TextField
                  value={props.selecteduser.RemoveReason}
                  disabled
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
                justifyContent: "flex-end",
                alignItems: "center",
                margin: "5px",
              }}
            >
              <Button
                variant="outlined"
                sx={{ marginRight: "5%" }}
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
    // </Themeprovider>
  );
};
export default ViewPopupManage;
