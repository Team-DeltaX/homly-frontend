import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import ViewPopUp from "./ViewPopup";
import AddComplainPopUp from "./AddComplainPopUp";
import ViewComplaintPopup from "./ViewComplainPopup";

const ReservationCard = (props) => {
  const isSpecial = props.reservation.IsSpecial;
  const isCancelled = props.reservation.IsCancelled;
  const isPaid = props.reservation.IsPaid;
  const isComplainTrue =
    props.type === "past" &&
    props.adminNumber !== "HomlyPriAdmin" &&
    props.isComplaint.length === 0
      ? true
      : false;
  const isViewComplainTrue =
    props.isComplaint && props.isComplaint.length > 0 ? true : false;
  return (
    <Grid
      container
      spacing={2}
      key={props.reservation.id}
      sx={{
        padding: { xs: "2px 1px", sm: "5px 1px", md: "10px 3px" },
        margin: { xs: "2px 1px", sm: "5px 1px", md: "10px 5px" },
        borderRadius: "20px",
        boxShadow: "3px 1px 3px 3px rgba(0,0,0,0.1)",
        borderBottom: "1px solid #fafafa",
        "&:hover": {
          boxShadow: "5px 3px 5px 3px rgba(50,1,1,0.5)",
        },
      }}
    >
      <Grid
        container
        sx={{ width: "100%" }}
        rowSpacing={0}
        columnSpacing={{ xs: 1, sm: 1, md: 1 }}
      >
        <Grid
          item
          xs={6}
          sm={4}
          md={3}
          sx={{
            display: { xs: "none", sm: "flex" },
            justifyContent: "center",
            alignItems: "left",
          }}
        >
          <Box
            component="img"
            src={props.employeeDetails.image}
            alt=""
            sx={{
              width: { xs: "5rem", sm: "6rem", md: "7rem" },
              height: { xs: "5rem", sm: "6rem", md: "7rem" },
              borderRadius: "50%",
            }}
          />
        </Grid>
        <Grid
          item
          xs={6}
          sm={4}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "15px", sm: "16px", md: "20px" },
              color: "#f1356d",
              marginBottom: "8px",
            }}
          >
            {props.employeeName.name}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              display: { xs: "none", sm: "block", md: "block" },
              fontSize: { xs: "13px", sm: "14px", md: "15px" },
            }}
          >
            Reservation Number: {props.reservation.ReservationId}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              display: { xs: "block", sm: "none", md: "none" },
              fontSize: { xs: "13px", sm: "14px", md: "15px" },
            }}
          >
            {props.reservation.ReservationId}
          </Typography>
          <Typography
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              fontSize: { xs: "13px", sm: "14px", md: "15px" },
            }}
          >
            Contact Number: {props.employeeDetails.contact_number}
          </Typography>
          <Typography
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              fontSize: { xs: "13px", sm: "14px", md: "15px" },
            }}
          >
            Amount: {props.reservation.Price}
          </Typography>
          {props.reservation.IsPaid ? (
            <Typography
              variant="button"
              sx={{
                color: "green",
                fontSize: { xs: "13px", sm: "14px", md: "15px" },
              }}
            >
              PAID
            </Typography>
          ) : (
            <Typography
              variant="button"
              sx={{
                color: "red",
                fontSize: { xs: "13px", sm: "14px", md: "15px" },
              }}
            >
              NOT PAID
            </Typography>
          )}
        </Grid>
        <Grid
          item
          xs={6}
          sm={4}
          md={5}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-start",
          }}
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-end"
            spacing={0.5}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "15px", sm: "16px", md: "20px" },
                color: "#f1356d",
                marginBottom: "8px",
              }}
            >
              {props.holidayHome && props.holidayHome.Name.toUpperCase()}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "13px", sm: "14px", md: "15px" },
              }}
            >
              Check In:{" "}
              {dayjs(props.reservation.CheckinDate).format("DD/MM/YYYY")}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "13px", sm: "14px", md: "15px" },
              }}
            >
              Check Out:{" "}
              {dayjs(props.reservation.CheckoutDate).format("DD/MM/YYYY")}
            </Typography>
            {props.reservation.IsSpecial && (
              <Typography
                variant="button"
                sx={{
                  color: "green",
                  fontSize: { xs: "13px", sm: "14px", md: "15px" },
                }}
              >
                Special
              </Typography>
            )}
            {props.reservation.IsCancelled && (
              <Typography
                variant="button"
                sx={{
                  color: "red",
                  fontSize: { xs: "13px", sm: "14px", md: "15px" },
                }}
              >
                Cancelled
              </Typography>
            )}
          </Stack>
        </Grid>
        <Grid container columnSpacing={1} sx={{ flexGrow: 1 }}>
          <Grid
            smOffset={1}
            xsOffset={3}
            mdOffset={9}
            xs={12}
            sm={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Stack direction="row" spacing={1}>
              <ViewPopUp
                reservation={props.reservation}
                reservedRoom={props.reservedRoom}
                reservedHall={props.reservedHall}
                holidayhome={props.holidayHome}
              />
              {isComplainTrue && <AddComplainPopUp reservation={props} />}
              {isViewComplainTrue && (
                <ViewComplaintPopup complain={props.isComplaint} />
              )}
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ReservationCard;
