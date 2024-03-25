import React from "react";
import { Skeleton, Stack, Card, Box } from "@mui/material";

export const HHCardSkeleton = ({showInterest}) => {
  return (
    <Stack direction="row" spacing={2}>
      <Card
        sx={{
          width: "257px",
          height: showInterest ?"340px":"309px",
          position: "relative",
          margin: "0 20px",
          borderRadius: "20px",
          boxShadow: "12px 1px 30px -18px rgba(0,0,0,0.75)",
          textDecoration:'none !important'
        }}
      >
        <Skeleton variant="rectangular" animation='wave' width="100%" height="219px" />
        <Box sx={{ width: "100%", height: "90px", padding: "0 4%" }}>
          <Stack direction="column">
            <Stack
              direction="row"
              sx={{ justifyContent: "space-between", alignItem: "center" }}
            >
             {/* text */}
             <Skeleton variant="text" animation='wave' width="80%" height="20px" />
              <Stack direction="row" sx={{ alignItems: "center" }}>
                {/* star icon */}
                <Skeleton variant="circular" animation='wave' width="20px" height="20px" />
               {/* rating */}
                <Skeleton variant="text" animation='wave' width="20px" height="20px" />
              </Stack>
            </Stack>
            <Stack
              direction="row"
              sx={{ display: showInterest ? "flex" : "none", padding:"8.5px" }}
            >
             {/* 3 progress bar */}
             <Skeleton variant="circular" animation='wave' width="20px" height="20px" />
             <Skeleton variant="circular" animation='wave' width="20px" height="20px" />
             <Skeleton variant="circular" animation='wave' width="20px" height="20px" />
            </Stack>
                <Skeleton sx={{display: !showInterest ? "flex" : "none"}} variant="text" animation='wave' width="100%" height="20px" />

            <Stack direction="row" sx={{ display: !showInterest ? "flex" : "none",alignItems: "baseline" }}>
              {/* text */}
                <Skeleton variant="text" animation='wave' width="50%" height="20px" />
            </Stack>
          </Stack>
        </Box>
      </Card>
    </Stack>
  );
};

export default HHCardSkeleton;
