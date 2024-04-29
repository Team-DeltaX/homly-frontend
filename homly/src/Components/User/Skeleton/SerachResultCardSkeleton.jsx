import React from "react";
import { Skeleton, Stack, Card, Box } from "@mui/material";

const SerachResultCardSkeleton = () => {
  return (
    <Card sx={{ margin: "10px 5px", padding: "10px 7px" }}>
      <Stack direction="column" spacing={2}>
        <Box sx={{ display: "flex" }}>
          <Skeleton
            variant="rectangular"
            width={{ xs: "100%", sm: "130px" }}
            height={{ xs: "150px", sm: "130px" }}
            sx={{ borderRadius: { xs: 0, sm: "10px" } }}
          />
        </Box>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Box sx={{ flex: 1 }}>
            <Skeleton variant="text" height={30} />
            <Skeleton variant="text" height={20} />
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" alignItems="center">
                <Skeleton variant="text" width={30} />
                <Skeleton variant="text" width={50} />
              </Stack>
              <Stack direction="row" alignItems="center">
                <Skeleton variant="circle" width={30} height={30} />
                <Skeleton variant="text" width={30} />
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Card>
  );
};

export default SerachResultCardSkeleton;
