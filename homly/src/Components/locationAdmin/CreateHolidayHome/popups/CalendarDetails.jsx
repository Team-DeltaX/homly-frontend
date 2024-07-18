import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

export default function CalendarDetails({
  date,
  open,
  handleClose,
  paidRooms,
  pendingRooms,
}) {
  let dateString = date.toString();
  return (
    <div>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle sx={{ textAlign: "center", marginBottom: "0.8em" }}>
          Date {dateString}
        </DialogTitle>
        {paidRooms.length === 0 && pendingRooms.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 2em 2em 2em",
            }}
          >
            <Typography sx={{ padding: "1em" }}>
              No reservations for this date
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 2em 2em 2em",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                gap: "2em",
                marginBottom: "12px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5em",
                  width: "100px",
                }}
              >
                <MonetizationOnIcon />
                Reserved
              </Typography>
              <Box>
                {paidRooms.length === 0 ? (
                  <Typography sx={{ color: "grey" }}>Not Yet</Typography>
                ) : (
                  paidRooms.map((room) => (
                    <Typography key={room} sx={{ color: "grey" }}>
                      {room.toUpperCase()}
                    </Typography>
                  ))
                )}
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                gap: "2em",
                marginBottom: "12px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5em",
                  width: "100px",
                }}
              >
                <HistoryToggleOffIcon sx={{ color: "black" }} />
                Pending
              </Typography>
              <Box>
                {pendingRooms.length === 0 ? (
                  <Typography sx={{ color: "grey" }}>Not Yet</Typography>
                ) : (
                  pendingRooms.map((room) => (
                    <Typography key={room} sx={{ color: "grey" }}>
                      {room.toUpperCase()}
                    </Typography>
                  ))
                )}
              </Box>
            </Box>
            <Box></Box>
          </Box>
        )}
      </Dialog>
    </div>
  );
}
