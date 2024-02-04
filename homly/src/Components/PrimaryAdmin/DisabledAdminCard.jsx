import { Box, Button, Grid, TextField, ThemeProvider, Typography } from "@mui/material";
import theme from "../../HomlyTheme";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";

const DisabledAdminCard=(props)=>{
    
         
           return (
             <ThemeProvider theme={theme}>
               <Box
                 sx={{
                   display: "flex",
                   flexDirection: { md: "row", xs: "column", background: "white" },
                   margin: "10px",
                   padding: "0px",
                   borderRadius: "15px",
                   alignItems: { xs: "center" },
                   columnGap: "30px",
                   boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
                //    width:'100%'
                   
                 }}
               >
                 <Box sx={{ padding: "10px" }}>
                   <AccountCircleIcon sx={{ color: "Black", fontSize: "70px" }} />
                 </Box>
                 <Box sx={{ padding: "10px" }}>
                   <Box>Admin Number</Box>
                   <Box>
                     <TextField
                       disabled={true}
                       // onChange={(e) => {
                       //   setAdminNo(e.target.value);
                       // }}
                       value={props.data.Service_number}
                       size="small"
                       type="text"
                       sx={{
                         backgroundColor: "white",
                       }}
                       alignItems="center"
                     ></TextField>
                   </Box>
                   <Box>User Name</Box>
                   <Box>
                     <TextField
                       disabled={true}
                       // onChange={(e) => {
                       //   setUsername(e.target.value);
                       // }}
                       type="text"
                       value={props.data.User_name}
                       alignItems="center"
                       sx={{
                         backgroundColor: "white",
                       }}
                       size="small"
                     ></TextField>
                   </Box>
                 </Box>
                 <Box sx={{ padding: "10px" }}>
                   <Box>Password</Box>
                   <Box>
                     <TextField
                       disabled={true}
                       // onChange={(e) => {
                       //   setPassword(e.target.value);
                       // }}
                       size="small"
                       type="text"
                       value={props.data.Nic_number}
                       sx={{
                         backgroundColor: "white",
                       }}
                       alignItems="center"
                     ></TextField>
                   </Box>
                   <Box>Contact Number</Box>
                   <Box>
                     <TextField
                       // disabled={disabled}
                       // onChange={(e) => {
                       //   setContactnumber(e.target.value);
                       // }}
                       type="text"
                       value={props.data.Service_number}
                       alignItems="center"
                       sx={{
                         backgroundColor: "white",
                       }}
                       size="small"
                     ></TextField>
                   </Box>
                 </Box>
                 <Box sx={{ padding: "10px" }}>
                   <Box>E-mail</Box>
                   <Box>
                     <TextField
                       disabled={true}
                       // onChange={(e) => {
                       //   setEmail(e.target.value);
                       // }}
                       size="small"
                       type="text"
                       value={props.data.Nic_number}
                       sx={{
                         backgroundColor: "white",
                       }}
                       alignItems="center"
                     ></TextField>
                   </Box>
                   <Box>WorkLocation</Box>
                   <Box>
                     <TextField
                       disabled={true}
                       // onChange={(e) => {
                       //   setworkLocation(e.target.value);
                       // }}
                       type="text"
                       value={props.data.Nic_number}
                       alignItems="center"
                       sx={{
                         backgroundColor: "white",
                       }}
                       size="small"
                     ></TextField>
                   </Box>
                 </Box>
                 
               </Box>
             </ThemeProvider>
           
       )

}
export default DisabledAdminCard;