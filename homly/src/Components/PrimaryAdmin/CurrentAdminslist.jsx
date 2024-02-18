import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import ViewAdminCard2 from "./ViewAdminCard2";
import CurrentAdminCard from "./CurrentAdminCard";
import AutohideSnackbar from "../../Components/PrimaryAdmin/AutohideSnackbar";
import { CustomTabContext } from "../../Contexts/primryadmin/CustomTabContext";

import axios from "axios";

const CurrentAdminslist = () => {
  const [blacklistedusers, setBlacklistedusers] = useState([]);
  const [open, setOpen] = useState(false);
  const [snacktext, setsnacktext] = useState("");
  const { load, SetLoad } = useContext(CustomTabContext);
  const [editadmin,Seteditadmin]=useState('')

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const fetchadmins = () => {
    SetLoad(true);
    axios
      .get("http://localhost:3002/locationadmin/all")
      .then((res) => {
        SetLoad(false);
        console.log(res.data);
         //reverse array to keep new ones first 
        setBlacklistedusers(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchadmins();
  }, []);

  return (
    <Box sx={{ marginTop: "2%", maxHeight: "450px", overflow: "scroll" }}>
      <AutohideSnackbar
        handleClick={handleClick}
        handleClose={handleClose}
        snacktext={snacktext}
        open={open}
        setOpen={setOpen}
      />
      {load === true ? (
        <h1>Loading...</h1>
      ) : (
        <Box>
          {blacklistedusers
            .filter((item) => item.Disabled === false)
            .map((item) => {
              return (
                <CurrentAdminCard
                  data={item}
                  key={item.AdminNo}
                  fetchadmins={fetchadmins}
                  setsnacktext={setsnacktext}
                  handlesnack={handleClick}
                  loading={load}
                  editadmin={editadmin}
                  Seteditadmin={Seteditadmin}
                  
                />
              );
            })}
        </Box>
      )}
    </Box>
  );
};
export default CurrentAdminslist;
