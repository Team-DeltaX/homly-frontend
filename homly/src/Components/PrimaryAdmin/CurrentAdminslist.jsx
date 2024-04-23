import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import CurrentAdminCard from "./CurrentAdminCard";
import AutohideSnackbar from "../../Components/PrimaryAdmin/AutohideSnackbar";
import { CustomTabContext } from "../../Contexts/primryadmin/CustomTabContext";
import { SearchContext } from "../../Contexts/primryadmin/Searchcontext";
import axios from "axios";

const CurrentAdminslist = () => {
  const [admins, setAdmins] = useState([]);
  const [open, setOpen] = useState(false);
  const [snacktext, setsnacktext] = useState("");
  const { load, SetLoad } = useContext(CustomTabContext);
  const [editadmin, Seteditadmin] = useState("");
  const { Search, SetSearch } = useContext(SearchContext);

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
      .get(`http://localhost:8080/admin/auth/locationadmin/all`)
      .then((res) => {
        SetLoad(false);
        setAdmins(res.data.reverse());
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
      {load === true ? (
        <h1>Loading...</h1>
      ) : (
        <Box>
          {admins
            .filter((item) => {
              return (
                item.Disabled === false &&
                (Search.toLowerCase() === ""
                  ? item
                  : item.WorkLocation.toLowerCase().startsWith(
                      Search.toLowerCase()
                    ))
              );
            })
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
