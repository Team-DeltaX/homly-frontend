import { Box, Button, Typography, Container } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import HolidayHomeCard from "./HolidayHomeCard";
import AxiosClient from "../../services/AxiosClient";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ManageHomeContent = () => {
  const [value, setValue] = React.useState(0);
  const [reload, setReload] = React.useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [pending, setPending] = React.useState([]);
  const [inactive, setInactive] = React.useState([]);
  const [active, setActive] = React.useState([]);
  const [declined, setDeclined] = React.useState([]);

  useEffect(() => {
    // axios.get('http://localhost:8080/admin/auth/locationadmin/holidayhome/')
    AxiosClient.get("/admin/auth/locationadmin/holidayhome/").then((res) => {
      if (Response) {
        setPending(res.data.pending);
        setActive(res.data.active);
        setInactive(res.data.inactive);
        setDeclined(res.data.declined);
      } else {
        console.log("No data found");
      }
    });
  }, [reload]);

  console.log("active homes", active);
  console.log("declined homes", declined);

  return (
    <Box>
      <Box
        className="search_container"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "1em",
        }}
      >
        <Link to="/locationadmin/holidayhomes/createholidayhome">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "primary.main",
              textTransform: "capitalize",
              fontWeight: "bold",
              color: "white",
            }}
            startIcon={<ControlPointIcon />}
          >
            <Typography sx={{ fontFamily: "sans-serif" }} variant="p">
              Create New
            </Typography>{" "}
          </Button>
        </Link>
        {/* <Input label={"Search"} icon={<SearchIcon />} /> */}
      </Box>
      <Container maxWidth={"md"}>
        <Box
          className="holidayhomes_card_container"
          sx={{ marginTop: "20px", padding: "0 40px" }}
        >
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Active" {...a11yProps(0)} />
                <Tab label="Pending" {...a11yProps(1)} />
                <Tab label="InActive" {...a11yProps(2)} />
                <Tab label="Declined" {...a11yProps(3)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Box className="homes_container_header">
                <Typography variant="p" className="header_title">
                  Active Holiday Homes
                </Typography>
                <hr />
              </Box>
              <Box
                className="homes_container"
                sx={{ overflowY: "scroll", maxHeight: "60vh" }}
              >
                <Box className="homes_container_body">
                  {active.map((item) => {
                    console.log("item", item);
                    return (
                      <HolidayHomeCard
                        setReload={setReload}
                        key={item.HolidayHomeId}
                        HolidayHomeName={item.Name}
                        Category={item.Category}
                        HolidayHomeId={item.HolidayHomeId}
                        image={item.MainImage}
                        status={item.Status}
                        activeToggler={true}
                      />
                    );
                  })}
                </Box>
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <Box className="homes_container_header">
                <Typography variant="p" className="header_title">
                  Pending Holiday Homes
                </Typography>
                <hr />
              </Box>
              <Box
                className="homes_container"
                sx={{ overflowY: "scroll", maxHeight: "60vh" }}
              >
                <Box className="homes_container_body">
                  {inactive.map((item) => {
                    return (
                      <HolidayHomeCard
                        setReload={setReload}
                        key={item.HolidayHomeId}
                        HolidayHomeName={item.Name}
                        Category={item.Category}
                        HolidayHomeId={item.HolidayHomeId}
                        activeToggler={true}
                        image={item.MainImage}
                      />
                    );
                  })}
                </Box>
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Box className="homes_container_header">
                <Typography variant="p" className="header_title">
                  InActive Holiday Homes
                </Typography>
                <hr />
              </Box>
              <Box
                className="homes_container"
                sx={{ overflowY: "scroll", maxHeight: "60vh" }}
              >
                <Box className="homes_container_body">
                  {pending.map((item) => {
                    return (
                      <HolidayHomeCard
                        key={item.HolidayHomeId}
                        HolidayHomeName={item.Name}
                        Category={item.Category}
                        HolidayHomeId={item.HolidayHomeId}
                        activeToggler={false}
                        image={item.MainImage}
                      />
                    );
                  })}
                </Box>
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <Box className="homes_container_header">
                <Typography variant="p" className="header_title">
                  Declined Holiday Homes
                </Typography>
                <hr />
              </Box>
              <Box
                className="homes_container"
                sx={{ overflowY: "scroll", maxHeight: "60vh" }}
              >
                <Box className="homes_container_body">
                  {declined.map((item) => {
                    return (
                      <HolidayHomeCard
                        key={item.HolidayHomeId}
                        HolidayHomeName={item.Name}
                        Category={item.Category}
                        HolidayHomeId={item.HolidayHomeId}
                        activeToggler={false}
                        reason={item.reason}
                        image={item.MainImage}
                      />
                    );
                  })}
                </Box>
              </Box>
            </CustomTabPanel>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ManageHomeContent;
