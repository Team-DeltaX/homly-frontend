import React from "react";
import { Skeleton, Stack, Card, Box } from "@mui/material";

const FavoritesHHCardSkeleton = () => {
  return (
    <Box sx={{ marginBottom: "20px" }}>
      <Card
        sx={{
          width: { xs: "300px", sm: "400px", md: "500px" },
          height: "209px",
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
              zIndex: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Skeleton variant="circular" width={24} height={24} />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "0",
              right: "0",
              width: "100%",
              height: "100%",
            }}
          ></Box>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              padding: "10px",
              color: "white",
              zIndex: 1,
              display: "flex",
              height: "95%",
              width: "100%",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "space-between",
            }}
          >
            <Stack>
              <Skeleton variant="text" width="70%" height={28} />
              <Skeleton variant="text" width="50%" height={20} />
            </Stack>
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
              <Stack direction="row" sx={{ alignItems: "center" }}>
                <Skeleton variant="text" width={20} height={20} />
              </Stack>
              <Stack direction="row" sx={{ alignItems: "baseline" }}>
                <Skeleton variant="text" width={20} height={20} />
                <Skeleton variant="text" width={30} height={20} />
              </Stack>
            </Stack>
          </Box>
          <Skeleton variant="rectangular" width="100%" height="209px" />
        </Box>
      </Card>
    </Box>
  );
}

export default FavoritesHHCardSkeleton;
