import { Avatar, Box, Typography } from "@mui/material";
import { useEffect } from "react";

const DashViewAdminBox = (props) => {
  useEffect(()=>{
   

  },[])
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: "20px",
        margin: "3px",
        
      
      }}
    >
      <Box>
        <Avatar
          sx={{ bgcolor: props.color, width: "50px", height: "50px" }}
          src="/broken-image.jpg"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          background: "white",
          padding: "10px",
          borderRadius: "10px",
          columnGap: "20px",
          width:'210px'
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box>
            <Typography>User Name</Typography>
          </Box>
          <Box>
            <Typography>Work Location</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box>
            <Typography sx={{ color: "#8e918f" }}>{props.data?.UserName}</Typography>
          </Box>
          <Box>
            <Typography sx={{ color: "#8e918f" }}>{props.data?.WorkLocation}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default DashViewAdminBox;
