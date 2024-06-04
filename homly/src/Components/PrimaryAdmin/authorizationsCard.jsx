import {
  Box,
  Button,
  Grid,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import PreviewIcon from "@mui/icons-material/Preview";
import theme from "../../HomlyTheme";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useContext, useState } from "react";
import ConfirmPopup from "./ConfirmPopup";
import AxiosClient from "../../services/AxiosClient";
import { SocketioContext } from "../../Contexts/SocketioContext";

const AuthorizationsCard = (props) => {
  const [open, Setopen] = useState(false);
  const { socket } = useContext(SocketioContext);

  const approve = () => {
  AxiosClient
      .put(
        `/admin/auth/locationadmin/holidayhome/accept`,
        {
          id: props.data.HolidayHomeId,
        },
        { withCredentials: true }
      )
      
      .then((res) => {
        props.get_pending();
        props.Setopensn(true);
        //sent approvel notification to location admin
        socket.emit("newNotification", {
          senderId: sessionStorage.getItem("userId"),
          receiverId: props.data.AdminNo,
          data: `${props.data.Name} Holiday Home has been approved`,
          type: "Authorization Denied",
          time: new Date(),
        });
      })
      .catch((error) => {
        props.opensnE(true);
      });
  };

  const rejectHH = () => {
    console.log("reject called ");
    console.log(props.data.HolidayHomeId);
    AxiosClient
      .delete(
        `/admin/auth/locationadmin/holidayhome/reject`,
        {
          data: {
            id: props.data.HolidayHomeId,
          },
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log("rejection done");
        props.get_pending();
        Setopen(false);
        socket.emit("newNotification", {
          senderId: localStorage.getItem("userId"),
          receiverId: props.data.AdminNo,
          data: `${props.data.Name} Holiday Home has been Declined`,
          type: "Authorization Denied",
          time: new Date(),
        });
      })
      .catch((error) => {
        props.opensnE(true);
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <ConfirmPopup
        open={open}
        setOpen={Setopen}
        title={"Holiday Home Rejection"}
        text={"Are you sure you want to Decline this HolidayHome"}
        controlfunction={rejectHH}
      />
      <Stack
        sx={{
          width:{md:'350px',xs:'300px'},
          background: "#E9E9E9",
          padding: "20px",
          borderRadius: "20px",
          margin: "30px",
        }}
      >
        <Box></Box>
        <Box>
          {" "}
          <Grid container  >
            <Grid md={9} xs={12}>
              <Grid md={12} sx={{display:"flex",flexDirection:{xs:'row',md:'column'},justifyContent:'center'}}>
                <Grid md={12}>
                  <Typography sx={{ fontWeight: "light" }}>District</Typography>
                </Grid>
                <Grid md={12} sx={{marginLeft:{md:'0px',xs:'10px'}}}>{props.data.District}</Grid>
              </Grid>

              <Grid md={12} sx={{ marginTop: "5%",display:"flex",flexDirection:{xs:'row',md:'column'},justifyContent:'center' }} >
                <Grid md={12}>
                  <Typography sx={{ fontWeight: "light" }}>
                    Holiday Home
                  </Typography>
                </Grid>
                <Grid md={12} sx={{marginLeft:{md:'0px',xs:'10px'}}}>{props.data.Name}</Grid>
              </Grid>
            </Grid>

            <Grid md={3} xs={12}>
              <Grid md={12} >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    width: "80px",
                    height: "30px",
                    borderRadius: "15px",
                    display: { xs: "none", md: "flex" },
                  }}
                  startIcon={<PreviewIcon />}
                >
                  <Typography>View</Typography>
                </Button>
              </Grid>
              <Grid md={12}  sx={{display:"flex",flexDirection:{xs:'row',md:'column'},justifyContent:'center'}}>
                <Grid md={12} sx={{ marginTop: {md:'25px',xs:'0'}}}>
                  <Typography sx={{ fontWeight: "light" }}>Admin</Typography>{" "}
                </Grid>
                <Grid md={12} sx={{marginLeft:{md:'8px',xs:'10px'}}} >{props.data.AdminNo}</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: { md: "row", sm: "row", xs: "row" },
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{
              margin: "10px",
              width: "100px",
              height: "30px",
              borderRadius: "15px",
              background: "#39e75f",
              color: "black",
            }}
            startIcon={<CheckIcon sx={{display:{xs:'none',md:'block'}}}/>}
            onClick={() => {
              approve();
            }}
          >
            <Typography>Accept</Typography>
          </Button>
          <Button
            type="submit"
            variant="outlined"
            sx={{
              margin: "10px",
              width: "100px",
              height: "30px",
              borderRadius: "15px",
              color: "red",
              borderBlockColor: "red",
            }}
            onClick={() => {
              Setopen(true);
            }}
            startIcon={<CloseIcon sx={{display:{xs:'none',md:'block'}}}/>}
          >
            <Typography>Decline</Typography>
          </Button>
          <Button
            type="submit"
            variant="outlined"
            sx={{
              margin: "10px",
              width: "100px",
              height: "30px",
              borderRadius: "15px",
              display: { xs: "flex", md: "none" },
            }}
            startIcon={<PreviewIcon  sx={{display:{xs:'none',md:'block'}}}/>}
            onClick={() => {}}
          >
            <Typography>View</Typography>
          </Button>
        </Box>
      </Stack>
    </ThemeProvider>
  );
};
export default AuthorizationsCard;
