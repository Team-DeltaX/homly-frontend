import {
  Box,
  Button,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";

const historypopup2 = (props) => {
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
            padding: "5px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            maxHeight: { md: "100%", xs: "740px" },
            overflow: "auto",
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
            <Box sx={{ display: "flex", flexDirection: "" }}>
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
                    Service Number......
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
                  User Name
                </Typography>
              </Box>
              <Box>
                <TextField
                  disabled
                  value={props.selecteduser.User_name}
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
                  Contact Number
                </Typography>
              </Box>
              <Box>
                <TextField
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
                  E-mail
                </Typography>
              </Box>
              <Box>
                <TextField
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
                  Nic Number
                </Typography>
              </Box>
              <Box>
                <TextField
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
                  Work Location
                </Typography>
              </Box>
              <Box>
                <TextField
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
                  Personal Address
                </Typography>
              </Box>
              <Box>
                <TextField
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
                  Residental District
                </Typography>
              </Box>
              <Box>
                <TextField
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
                  Blacklisted Date
                </Typography>
              </Box>
              <Box>
                <TextField
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
                  Removed Reson
                </Typography>
              </Box>
              <Box>
                <TextField
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
                justifyContent: "flex-end",
                alignItems: "center",
                margin: "10px",
              }}
            >
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
export default historypopup2;
