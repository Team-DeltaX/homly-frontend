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
          sx={{ bgcolor: props.color, width: "40px", height: "40px" }}
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
            <Typography sx={{fontSize:'14px'}}>User Name</Typography>
          </Box>
          <Box>
            <Typography sx={{fontSize:'14px'}}>Work Location</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box>
            <Typography sx={{ color: "#8e918f" ,fontSize:'14px'}}>{props.data?.UserName}</Typography>
          </Box>
          <Box>
            <Typography sx={{ color: "#8e918f" ,fontSize:'14px'}}>{props.data?.WorkLocation}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default DashViewAdminBox;
