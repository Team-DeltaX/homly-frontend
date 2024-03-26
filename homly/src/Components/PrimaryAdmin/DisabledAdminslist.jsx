import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import ViewAdminCard2 from "./ViewAdminCard2";
import DisabledAdminCard from "./DisabledAdminCard";
import AutohideSnackbar from "../../Components/PrimaryAdmin/AutohideSnackbar";
import { SearchContext } from "../../Contexts/primryadmin/Searchcontext";
import axios from "axios";

const DisabledAdminslist = () => {
  const { Search, SetSearch } = useContext(SearchContext);

  const [blacklistedusers, setBlacklistedusers] = useState([]);
  const [open, setOpen] = useState(false);
  const [snacktext, setsnacktext] = useState("");

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
    axios
      .get("http://localhost:3002/admin/auth/locationadmin/all")
      .then((res) => {
        console.log(res.data);
        //reverse array to keep new ones first
        setBlacklistedusers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchadmins();
  }, []);

  return (
    <Box
      sx={{
        marginTop: "0.5%",
        maxHeight: { md: "450px", xs: "550px" },
        overflow: "scroll",
      }}
    >
      <AutohideSnackbar
        handleClick={handleClick}
        handleClose={handleClose}
        snacktext={snacktext}
        open={open}
        setOpen={setOpen}
      />
      {blacklistedusers
        .filter((item) => {
          return (
            item.Disabled === true &&
            (Search.toLowerCase() === ""
              ? item
              : item.WorkLocation.toLowerCase().startsWith(
                  Search.toLowerCase()
                ))
          );
        })
        .map((item) => {
          return (
            <DisabledAdminCard
              data={item}
              key={item.AdminNo}
              fetchadmins={fetchadmins}
              setsnacktext={setsnacktext}
              handlesnack={handleClick}
            />
          );
        })}
    </Box>
  );
};
export default DisabledAdminslist;
