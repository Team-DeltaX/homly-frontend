import React, { useEffect, useState } from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import AxiosClient from "../../../../services/AxiosClient";
import { useParams } from "react-router";

const ViewUnitBreakDown = ({
  unitCode,
  unitAc,
  floorLevel,
  unitRemarks,
  unitRental,
  selectedRooms,
  roomArray,
  setRoomArray,
  handleUnitDelete,
  handleUnitEdit,
  index,
  setSelectedRoomDetails,
}) => {
  const [open, setOpen] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("sm");

  const [unitChildCount, setUnitChildCount] = useState(0);
  const [unitAdultCount, setUnitAdultCount] = useState(0);
  const [unitRoomCount, setUnitRoomCount] = useState(0);
  const { homeId } = useParams();

  console.log("selectedrooms", selectedRooms);

  const getSelectedRoom = async (unitCode) => {
    try {
      const response = await AxiosClient.get(
        `admin/auth/locationadmin/holidayhome/${homeId}/${unitCode}`
      );
      console.log("res", response.data.selectedRooms);
      setSelectedRoomDetails(response.data.selectedRooms);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleClickOpen = () => {
    getSelectedRoom(unitCode);
    setOpen(true);
  };

  const handleClose = () => {
    let adults = 0;
    let children = 0;
    selectedRooms.map((room) => {
      adults += parseInt(room.NoOfAdults, 10);
      children += parseInt(room.NoOfChildren, 10);
    });
    setUnitAdultCount(adults);
    setUnitChildCount(children);
    setUnitRoomCount(selectedRooms.length);
    setOpen(false);
  };

  const handleRoomAddToUnit = (roomCode, roomAc, unitAc) => {
    setRoomArray(
      roomArray.map((item, index) => {
        if (roomAc === unitAc) {
          if (item.roomCode === roomCode) {
            selectedRooms.push(item);

            return {
              ...item,
              groupByUnit: true,
            };
          } else {
            return item;
          }
        } else {
          setOpenAlert(true);
          return item;
        }
      })
    );
  };

  const handleCancelSelectedRoom = (roomCode) => {
    setRoomArray(
      roomArray.map((item, index) => {
        if (item.roomCode === roomCode) {
          return {
            ...item,
            groupByUnit: false,
          };
        } else {
          return item;
        }
      })
    );
    selectedRooms.splice(
      selectedRooms.findIndex((item) => item.roomCode === roomCode),
      1
    );
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  // //ADD ac nonac room alert
  // const [openAlert, setOpenAlert] = useState(false);

  // const handleCloseAlert = (event, reason) => {
  //     if (reason === 'clickaway') {
  //         return;
  //     }

  //     setOpenAlert(false);
  // };

  // // Sure dialog for remove unit

  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  // const [openUnitRemove, setOpenUnitRemove] = useState(false);//unit remove state pop up

  // const handleOpenUnitRemove = () => {
  //     setOpenUnitRemove(true);
  // };

  //ADD ac nonac room alert
  const [openAlert, setOpenAlert] = useState(false);

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  // Sure dialog for remove unit

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [openUnitRemove, setOpenUnitRemove] = useState(false); //unit remove state pop up

  const handleOpenUnitRemove = () => {
    setOpenUnitRemove(true);
  };

  const handleCloseUnitRemove = () => {
    setOpenUnitRemove(false);
  };

  return (
    <Paper
      elevation={8}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <Box sx={{ display: "flex", gap: "1em", marginBottom: "1em" }}>
        <Box className="card_item">
          <Typography variant="p" className="card_item_title">
            Unit No
          </Typography>
          <Typography variant="p" className="card_item_value">
            {unitCode}
          </Typography>
        </Box>
        <Box className="card_item">
          <Typography variant="p" className="card_item_title">
            Floor Level
          </Typography>
          <Typography variant="p" className="card_item_value">
            {floorLevel}
          </Typography>
        </Box>
        <Box className="card_item">
          <Typography variant="p" className="card_item_title">
            AC/Non AC
          </Typography>
          <Typography variant="p" className="card_item_value">
            {unitAc}
          </Typography>
        </Box>
        <Box className="card_item">
          <Typography variant="p" className="card_item_title">
            Number of Rooms
          </Typography>
          <Typography variant="p" className="card_item_value">
            {unitRoomCount}
          </Typography>
        </Box>
        <Box className="card_item">
          <Typography variant="p" className="card_item_title">
            Adults
          </Typography>
          <Typography variant="p" className="card_item_value">
            {unitAdultCount}
          </Typography>
        </Box>
        <Box className="card_item">
          <Typography variant="p" className="card_item_title">
            Children
          </Typography>
          <Typography variant="p" className="card_item_value">
            {unitChildCount}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "1em",
          width: "100%",
        }}
      >
        <Button
          size="small"
          variant="contained"
          sx={{ backgroundColor: "primary.main" }}
          onClick={handleClickOpen}
        >
          View Attach Rooms
        </Button>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="p">Room Attached?</Typography>
          <Checkbox
            {...label}
            disabled={selectedRooms.length === 0 ? true : false}
            checked={selectedRooms.length === 0 ? false : true}
          />
        </Box>
      </Box>

      <React.Fragment>
        <Dialog
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={open}
          onClose={handleClose}
        >
          <DialogTitle>Add Rooms to Unit</DialogTitle>
          <form>
            <DialogContent sx={{ overflow: "hidden" }}>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0em 2em",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: "1em",
                      marginBottom: "1em",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="p" className="card_item_title">
                      Unit Code
                    </Typography>
                    <Typography
                      variant="p"
                      className="card_item_value attach_room_value"
                    >
                      {unitCode}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "1em",
                      marginBottom: "1em",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="p" className="card_item_title">
                      Unit Rental
                    </Typography>
                    <Typography
                      variant="p"
                      className="card_item_value attach_room_value"
                    >
                      {unitRental}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0em 2em",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: "1em",
                      marginBottom: "1em",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="p" className="card_item_title">
                      AC/Non AC
                    </Typography>
                    <Typography
                      variant="p"
                      className="card_item_value attach_room_value"
                    >
                      {unitAc}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "1em",
                      marginBottom: "1em",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="p" className="card_item_title">
                      Selected Room Count
                    </Typography>
                    <Typography
                      variant="p"
                      className="card_item_value attach_room_value"
                    >
                      {unitRoomCount}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className="bottom_container_selected_rooms">
                <Box sx={{ marginBottom: "1.5em" }}>
                  <fieldset style={{ borderRadius: "10px" }}>
                    <legend>Rooms</legend>
                    {console.log("unitbreakdown", roomArray)}
                    {roomArray.length === 0 ? (
                      <Box
                        sx={{
                          display: "flex",
                          padding: "2em",
                          justifyContent: "center",
                        }}
                      >
                        <Typography variant="p" sx={{ color: "grey" }}>
                          No Rooms Available
                        </Typography>
                      </Box>
                    ) : (
                      roomArray
                        .filter((item) => !item.groupByUnit)
                        .map((item, index) => {
                          return (
                            <Paper
                              elevation={8}
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                flexWrap: "wrap",
                                padding: "10px",
                                marginBottom: "10px",
                              }}
                            >
                              {console.log("in")}
                              <Box sx={{ display: "flex", gap: "1em" }}>
                                <Box className="card_item">
                                  <Typography
                                    variant="p"
                                    className="attach_card_item_title"
                                  >
                                    Room Code
                                  </Typography>
                                  <Typography
                                    variant="p"
                                    className="attach_card_item_value"
                                  >
                                    {"item.roomCode"}
                                  </Typography>
                                </Box>
                                <Box className="card_item">
                                  <Typography
                                    variant="p"
                                    className="attach_card_item_title"
                                  >
                                    AC/Non AC
                                  </Typography>
                                  <Typography
                                    variant="p"
                                    className="attach_card_item_value"
                                  >
                                    {item.roomAc}
                                  </Typography>
                                </Box>
                                <Box className="card_item">
                                  <Typography
                                    variant="p"
                                    className="attach_card_item_title"
                                  >
                                    Room Type
                                  </Typography>
                                  <Typography
                                    variant="p"
                                    className="attach_card_item_value"
                                  >
                                    {item.RoomType}
                                  </Typography>
                                </Box>
                                <Box className="card_item">
                                  <Typography
                                    variant="p"
                                    className="attach_card_item_title"
                                  >
                                    Adults
                                  </Typography>
                                  <Typography
                                    variant="p"
                                    className="attach_card_item_value"
                                  >
                                    {item.NoOfAdults}
                                  </Typography>
                                </Box>
                                <Box className="card_item">
                                  <Typography
                                    variant="p"
                                    className="attach_card_item_title"
                                  >
                                    Children
                                  </Typography>
                                  <Typography
                                    variant="p"
                                    className="attach_card_item_value"
                                  >
                                    {item.NoOfChildren}
                                  </Typography>
                                </Box>
                              </Box>
                            </Paper>
                          );
                        })
                    )}
                  </fieldset>
                </Box>

                <Box>
                  <fieldset style={{ borderRadius: "10px" }}>
                    <legend>Selected Rooms for the Unit</legend>
                    {selectedRooms.length === 0 ? (
                      <Box
                        sx={{
                          display: "flex",
                          padding: "2em",
                          justifyContent: "center",
                        }}
                      >
                        <Typography variant="p" sx={{ color: "grey" }}>
                          No Selected Rooms
                        </Typography>
                      </Box>
                    ) : (
                      selectedRooms.map((item, index) => {
                        // console.log("item", item.room[0]);

                        return (
                          <Paper
                            elevation={8}
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              flexWrap: "wrap",
                              padding: "10px",
                              marginBottom: "10px",
                            }}
                          >
                            <Box sx={{ display: "flex", gap: "1em" }}>
                              <Box className="card_item">
                                <Typography
                                  variant="p"
                                  className="attach_card_item_title"
                                >
                                  Room Code
                                </Typography>
                                <Typography
                                  variant="p"
                                  className="attach_card_item_value"
                                >
                                  {item.roomCode}
                                </Typography>
                              </Box>
                              <Box className="card_item">
                                <Typography
                                  variant="p"
                                  className="attach_card_item_title"
                                >
                                  AC/Non AC
                                </Typography>
                                <Typography
                                  variant="p"
                                  className="attach_card_item_value"
                                >
                                  {item.roomAc}
                                </Typography>
                              </Box>
                              <Box className="card_item">
                                <Typography
                                  variant="p"
                                  className="attach_card_item_title"
                                >
                                  Room Type
                                </Typography>
                                <Typography
                                  variant="p"
                                  className="attach_card_item_value"
                                >
                                  {item.RoomType}
                                </Typography>
                              </Box>
                              <Box className="card_item">
                                <Typography
                                  variant="p"
                                  className="attach_card_item_title"
                                >
                                  Adults
                                </Typography>
                                <Typography
                                  variant="p"
                                  className="attach_card_item_value"
                                >
                                  {item.NoOfAdults}
                                </Typography>
                              </Box>
                              <Box className="card_item">
                                <Typography
                                  variant="p"
                                  className="attach_card_item_title"
                                >
                                  Children
                                </Typography>
                                <Typography
                                  variant="p"
                                  className="attach_card_item_value"
                                >
                                  {item.NoOfChildren}
                                </Typography>
                              </Box>
                            </Box>
                          </Paper>
                        );
                      })
                    )}
                  </fieldset>
                </Box>
              </Box>
            </DialogContent>

            <DialogActions>
              <Button variant="contained" onClick={handleClose}>
                Done
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </React.Fragment>
    </Paper>
  );
};

export default ViewUnitBreakDown;
