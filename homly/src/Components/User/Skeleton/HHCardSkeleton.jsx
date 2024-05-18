import React from "react";
import { Skeleton, Stack, Card, Box } from "@mui/material";

export const HHCardSkeleton = ({ showInterest }) => {
  return (
    <Card
      sx={{
        width: "257px",
        height: "340px",
        position: "relative",
        margin: "0 20px",
        borderRadius: "20px",
        boxShadow: "12px 1px 30px -18px rgba(0,0,0,0.75)",
        textDecoration: "none !important",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            top: "5px",
            right: "5px",
            backgroundColor: "#ffffff",
            color: "#fc6c85",
            padding: "10px",
            borderRadius: "50%",
            zIndex: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Skeleton variant="circular" width={24} height={24} />
        </Box>
        <Skeleton
          variant="rectangular"
          width="100%"
          height="219px"
          sx={{
            borderRadius: "20px 20px 0 0",
          }}
        />
      </Box>
      <Box sx={{ width: "100%", height: "90px", padding: "0 4%" }}>
        <Stack direction="column">
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Skeleton variant="text" width="70%" />
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <Skeleton variant="circular" width={24} height={24} />
              <Skeleton variant="text" width={30} />
            </Stack>
          </Stack>
          <Skeleton
            variant="rectangular"
            width="100%"
            height="30px"
            sx={{
              marginTop: "8.5px",
            }}
          />
          <Skeleton
            variant="text"
            width="100%"
            height="20px"
            sx={{
              marginTop: "8.5px",
            }}
          />
          <Stack
            direction="row"
            sx={{ alignItems: "baseline", marginTop: "8.5px" }}
          >
            <Skeleton variant="text" width={20} height={20} />
            <Skeleton variant="text" width={50} height={20} />
          </Stack>
        </Stack>
      </Box>
    </Card>
  );
};

export default HHCardSkeleton;
