import { Drawer, Box, Typography } from "@mui/material";
import SerachResultCard from "./SerachResultCard";
import SerachResultCardSkeleton from "../Skeleton/SerachResultCardSkeleton";

export default function SearchResaltDrawer({
  open,
  setOpen,
  searchedHH,
  showSkeleton,
  setShowSkeleton,
}) {
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)} sx={{ zIndex: 1500 }}>
        <Box
          sx={{
            width: { xs: 275, sm: 400 },
            bgcolor: "#FEF2F4",
            overflowY: "auto",
            height: "100vh",
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <Typography color="initial" sx={{ ml: "10px", fontWeight: "bold" }}>
            Your Search result
          </Typography>
          {showSkeleton ? (
            <>
              <SerachResultCardSkeleton />
              <SerachResultCardSkeleton />
              <SerachResultCardSkeleton />
              <SerachResultCardSkeleton />
              <SerachResultCardSkeleton />
            </>
          ) : searchedHH && searchedHH.length > 0 ? (
            searchedHH.map((hh) => {
              return (
                <SerachResultCard searchedHH={hh} key={hh.HolidayHomeId} />
              );
            })
          ) : (
            <Box
              sx={{
                bgcolor: "red",
                display: "flex",
                justifyContent: "center",
                fontWeight: "medium",
              }}
            >
              <Typography color="initial">No result Found</Typography>
            </Box>
          )}
        </Box>
      </Drawer>
    </div>
  );
}
