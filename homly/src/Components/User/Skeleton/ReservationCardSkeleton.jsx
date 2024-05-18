import React from "react";
import { Skeleton, Stack, Card, Box } from "@mui/material";

const ReservationCardSkeleton = () => {
  return (
    <Card sx={{maxWidth:"700px"}}>
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      sx={{
        padding: "20px",
      }}
    >
      <Box sx={{ width: 120, height: 120 }}>
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </Box>
      <Stack direction="column" spacing={1} sx={{ flex: 1 }}>
        <Skeleton variant="text" width={160} height={24} />
        <Skeleton variant="text" width={200} height={20} />
        <Stack direction="row" spacing={2} alignItems="center">
          <Skeleton variant="text" width={100} height={16} />
          <Skeleton variant="text" width={100} height={16} />
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <Skeleton variant="text" width={100} height={16} />
          <Skeleton variant="text" width={100} height={16} />
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <Skeleton variant="text" width={100} height={16} />
          <Skeleton variant="text" width={100} height={16} />
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <Skeleton variant="text" width={100} height={16} />
          <Skeleton variant="text" width={100} height={16} />
        </Stack>
      </Stack>
      <Stack direction="column" spacing={1} sx={{ alignItems: "flex-end" }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Skeleton variant="text" width={100} height={16} />
          <Skeleton variant="text" width={25} height={25} />
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <Skeleton variant="text" width={100} height={16} />
          <Skeleton variant="text" width={25} height={25} />
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <Skeleton variant="text" width={100} height={16} />
          <Skeleton variant="text" width={25} height={25} />
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <Skeleton variant="text" width={100} height={16} />
          <Skeleton variant="text" width={25} height={25} />
        </Stack>
        <Box sx={{ mt: 1 }}>
          <Skeleton variant="rectangular" width={100} height={40} />
        </Box>
      </Stack>
    </Stack>
  </Card>
  );
};

export default ReservationCardSkeleton;
