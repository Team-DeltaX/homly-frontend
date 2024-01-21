import { Box, Menu, MenuItem } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from "react";
import theme from "../../HomlyTheme";

const Pagetop = ({heading}) => {
//     const [open,setOpen]=useState(false)
//     const [anchorEl, setAnchorEl] = useState(null);
//     const handleIconClick=()=>{
//         setOpen(!open)
//     }
//     const handleClose = () => {
//         setOpen(false);
//         setAnchorEl(null);
//     };
//     const notifyarray=[{
//         id:1,
//         name:"admin add",
//         description:"admin added holiday home request abscalkjf"
//     },
//     {
//         id:2,
//         name:"admin add",
//         description:"admin added holiday home request abscalkjf"
//     },
//     {
//         id:3,
//         name:"admin add request",
//         description:"admin added holiday home request abscalkjf"
//     },
//     {
//       id:4,
//       name:"admin add request",
//       description:"admin added holiday home request abscalkjf"
//   },
//   {
//     id:5,
//     name:"admin add request",
//     description:"admin added holiday home request abscalkjf"
// }

    return (
      <Box sx={{display:"flex",justifyContent:'space-between',width:"100%",marginLeft:"0%",marginTop:"1%",background:'white',} }>
       <Box sx={{fontSize:"30px",fontWeight:"bold"}} >
        {heading}
       </Box>
     
      </Box>
    );
  };
  
export default Pagetop;