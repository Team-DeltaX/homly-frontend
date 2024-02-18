import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import ViewAdminCard2 from "./ViewAdminCard2";
import DisabledAdminCard from "./DisabledAdminCard";
import AutohideSnackbar from "../../Components/PrimaryAdmin/AutohideSnackbar";

import axios from 'axios'

const DisabledAdminslist = () => {
  const [blacklistedusers, setBlacklistedusers] = useState([]);
  const [open, setOpen] = useState(false);
  const [snacktext,setsnacktext]=useState('')

  const handleClick = () => {
    setOpen(true);

  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };


  const fetchadmins=()=>{
    axios.get('http://localhost:3002/locationadmin/all')
    .then(res=>{
      console.log(res.data)
      //reverse array to keep new ones first 
      setBlacklistedusers(res.data)
    
    }).catch(err=>{
      console.log(err)
    })

  }

  useEffect(() => {
    fetchadmins();
  }, []);

return(
    <Box
    

            sx={{ marginTop: "2%", maxHeight: "450px", overflow: "scroll" }}
          >
              <AutohideSnackbar
              handleClick={handleClick}
              handleClose={handleClose}
              snacktext={snacktext}
              open={open}
              setOpen={setOpen}
            />
            {blacklistedusers.filter(item=>item.Disabled===true).map((item) => {
              return (
                <DisabledAdminCard data={item} key={item.AdminNo} fetchadmins={fetchadmins} setsnacktext={setsnacktext} handlesnack={handleClick} />
              );
            })}
          </Box> 
            
)
};
export default DisabledAdminslist;
