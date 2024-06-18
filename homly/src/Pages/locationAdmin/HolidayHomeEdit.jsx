import "./style.css";
import React, { useState, useEffect } from "react";

import {
  Grid,
  ThemeProvider,
  Container,
  Box,
  Typography,
  Button,
} from "@mui/material";
import theme from "../../HomlyTheme";
import SideNavbar from "../../Components/locationAdmin/SideNavbar";
import PageTitle from "../../Components/locationAdmin/PageTitle";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import EditHolidayHomeDetails from "../../Components/locationAdmin/CreateHolidayHome/EditHolidayHomes/EditHolidayHomeDetails";
import EditCaretakerDetails from "../../Components/locationAdmin/CreateHolidayHome/EditHolidayHomes/EditCaretakerDetails";
import EditHolidayHomeBreakdown from "../../Components/locationAdmin/CreateHolidayHome/EditHolidayHomes/EditHolidayHomeBreakdown";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AxiosClient from "../../services/AxiosClient";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
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

const HolidayHomeEdit = () => {
  const navigate = useNavigate();

  const [approvedClicked, setApprovedClicked] = useState(false);
  const [submitDisable, setSubmitDisable] = useState(false);
  const [showNav, setShowNav] = useState("nav_grid_deactive");
  const [value, setValue] = useState(0);

  const [caretaker1Id, setCaretaker1Id] = useState("");
  const [caretaker2Id, setCaretaker2Id] = useState("");

  const [EditSuccessfullAlert, setEditSuccessfullAlert] = useState(false);
  const handleEditSuccessfullAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setEditSuccessfullAlert(false);
  };

  const [detailsValue, setDetailsValue] = useState({
    name: "",
    address: "",
    district: "",
    description: "",
    contactNo1: "",
    contactNo2: "",
    category: "",
    status: "",
  });

  const [roomArray, setRoomArray] = useState([]);
  const [unitArray, setUnitArray] = useState([]);
  const [hallArray, setHallArray] = useState([]);
  const [roomTypeArray, setRoomTypeArray] = useState([]);
  const [settingRoomRentalArray, setSettingRoomRentalArray] = useState([]);

  const [valueCaretaker, setValueCareTaker] = useState({
    caretakerName: "",
    caretakerContactNo: "",
    caretakerStatus: "",
    caretakerAddress: "",
    caretakerDescription: "",
  });

  const [careTakerImage1, setCareTakerImage1] = useState("");

  const [valueSecond, setValueSecond] = useState({
    caretakerName: "",
    caretakerContactNo: "",
    caretakerStatus: "",
    caretakerAddress: "",
    caretakerDescription: "",
  });

  const [careTakerImage2, setCareTakerImage2] = useState("");

  const [bdValue, setBdValue] = useState({
    otherCharges: "",
    serviceCharges: "",
    totalRental: "",
    facilities: "",
    gym: false,
    kitchen: false,
    park: false,
    wifi: false,
    pool: false,
    bar: false,
  });

  const [adultsCount, setAdultsCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [selectedRoomDetails, setSelectedRoomDetails] = useState({});
  const [mainImage, setMainImage] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNextToUnit = () => {
    setValue(1);
  };

  const handleNextToHall = () => {
    setValue(2);
  };

  const { homeId } = useParams();

  useEffect(() => {
    // axios.get(`http://localhost:8080/admin/auth/locationadmin/holidayhome/${homeId}`)
    AxiosClient.get(`admin/auth/locationadmin/holidayhome/${homeId}`).then(
      (res) => {
        if (Response) {
          const roomDetails = res.data.room;
          const unitDetails = res.data.unit;
          const hallDetails = res.data.hall;
          const caretakerDetails = res.data.caretaker;
          const homeDetails = res.data.homeDetails[0];
          const contactNo = res.data.contactNo;
          const roomTypeSettings = res.data.roomTypeSettings;
          const settingRoomRental = res.data.roomRentalSettings;

          setRoomArray(roomDetails);
          setUnitArray(unitDetails);
          setHallArray(hallDetails);
          setCaretaker1Id(caretakerDetails[0].CareTakerId);
          setValueCareTaker({
            caretakerName: caretakerDetails[0].Name,
            caretakerContactNo: caretakerDetails[0].ContactNo,
            caretakerStatus: caretakerDetails[0].Status,
            caretakerAddress: caretakerDetails[0].Address,
            caretakerDescription: caretakerDetails[0].Description,
          });
          setCareTakerImage1(caretakerDetails[0].Image);

          if (caretakerDetails[1]) {
            setCaretaker2Id(caretakerDetails[1].CareTakerId);
            setValueSecond({
              caretakerName: caretakerDetails[1].Name || "",
              caretakerContactNo: caretakerDetails[1].ContactNo || "",
              caretakerStatus: caretakerDetails[1].Status || "",
              caretakerAddress: caretakerDetails[1].Address || "",
              caretakerDescription: caretakerDetails[1].Description || "",
            });
            setCareTakerImage2(caretakerDetails[1].Image || "");
          }
          setAdultsCount(homeDetails.MaxNoOfAdults);
          setChildCount(homeDetails.MaxNoOfChildren);
          setBdValue({
            ...bdValue,
            otherCharges: homeDetails.OtherCharge,
            serviceCharges: homeDetails.ServiceCharge,
            totalRental: homeDetails.TotalRental,
            facilities: homeDetails.Facilities,
            gym: homeDetails.Gym,
            kitchen: homeDetails.Kitchen,
            park: homeDetails.Park,
            wifi: homeDetails.Wifi,
            pool: homeDetails.Pool,
            bar: homeDetails.Bar,
          });

          setDetailsValue({
            name: homeDetails.Name || "",
            address: homeDetails.Address || "",
            district: homeDetails.District || "", // Add the logic to get district if available
            description: homeDetails.Description || "",
            contactNo1:
              contactNo && contactNo.length > 0 ? contactNo[0].ContactNo : "",
            contactNo2:
              contactNo && contactNo.length > 1 ? contactNo[1].ContactNo : "",
            category: homeDetails.Category || "",
            status: homeDetails.Status || "",
          });

          setMainImage(homeDetails.MainImage || "");
          setImage1(homeDetails.Image1 || "");
          setImage2(homeDetails.Image2 || "");
          setImage3(homeDetails.Image3 || "");

          setRoomTypeArray(roomTypeSettings);
          setSettingRoomRentalArray(settingRoomRental);
        } else {
          console.log("No data found");
        }
      }
    );
  }, [homeId]);

  console.log("caretakerimage1", careTakerImage1);
  console.log("caretakerimage2", careTakerImage2);

  const [holidayHomeSubmit, setHolidayHomeSubmit] = useState(false);
  const [caretakerSubmit, setCaretakerSubmit] = useState(false);
  const [homeBreakdownSubmit, setHomeBreakdownSubmit] = useState(false);

  useEffect(() => {
    if (holidayHomeSubmit && caretakerSubmit && homeBreakdownSubmit) {
      setSubmitDisable(false);
    } else {
      setSubmitDisable(true); // Make sure to set to false or true explicitly
    }
  }, [holidayHomeSubmit, caretakerSubmit, homeBreakdownSubmit]);

  const handleApproval = (e) => {
    const updatedUnitArray = unitArray.map((unit) => {
      return {
        ...unit,
        selectedRooms: selectedRoomDetails[unit.unitCode] || [],
        roomAttached:
          selectedRoomDetails[unit.unitCode].length > 0 ? true : false,
      };
    });

    let updatedData = {
      holidayHomeId: homeId,
      caretaker1Id: caretaker1Id,
      caretaker2Id: caretaker2Id,
      holidayHomeDetails: detailsValue,
      images: null,
      caretaker1: valueCaretaker,
      caretaker2: valueSecond,
      homeBreakDown: { bdValue, adultsCount, childCount },
      roomArray: roomArray,
      unitArray: updatedUnitArray,
      hallArray: hallArray,
      roomTypeArray: roomTypeArray,
      settingRoomRentalArray: settingRoomRentalArray,
      mainImage: mainImage,
      image1: image1,
      image2: image2,
      image3: image3,
      careTakerImage1: careTakerImage1,
      careTakerImage2: careTakerImage2,
      selectedRoomDetails: selectedRoomDetails,
    };
    e.preventDefault();
    setApprovedClicked(true);
    console.log("allvalues", updatedData);
    AxiosClient.post("admin/auth/locationadmin/holidayhome/update", updatedData)
      .then((res) => {
        console.log(res);
        setEditSuccessfullAlert(true);
        // navigate("/locationadmin/manage");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const fetchSelectedRooms = async () => {
      for (const unit of unitArray) {
        try {
          const response = await AxiosClient.get(
            `admin/auth/locationadmin/holidayhome/${homeId}/${unit.unitCode}`
          );
          console.log("res", response.data.selectedRooms);
          setSelectedRoomDetails((prev) => ({
            ...prev,
            [unit.unitCode]: response.data.selectedRooms,
          }));
        } catch (error) {
          console.log("error", error);
        }
      }
    };

    fetchSelectedRooms();
  }, [unitArray, homeId]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        className="main_container"
        sx={{
          width: "100%",
          backgroundColor: "primary.main",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl" style={{ padding: 0 }}>
          <Grid container sx={{ position: "relative" }}>
            <Grid
              className={showNav}
              xs={3}
              sx={{ backgroundColor: "primary.main", height: "100vh" }}
            >
              <SideNavbar setShowNav={setShowNav}></SideNavbar>
            </Grid>
            <Grid
              className="container_grid"
              xs={9}
              sx={{
                backgroundColor: "white",
                borderTopLeftRadius: "20px",
                padding: "10px 30px",
                height: "100vh",
                position: "relative",
              }}
            >
              <Box sx={{ height: "100%" }}>
                <PageTitle
                  setShowNav={setShowNav}
                  title={"Manage Holiday Home"}
                  bell={true}
                />
                <Box sx={{ width: "100%" }}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                    >
                      <Tab label="Edit HolidayHome Details" {...a11yProps(0)} />
                      <Tab label="Edit Room/Unit Details" {...a11yProps(1)} />
                      <Tab label="Edit Caretaker Details" {...a11yProps(2)} />
                    </Tabs>
                  </Box>
                  <CustomTabPanel value={value} index={0}>
                    <EditHolidayHomeDetails
                      setSubmit={setHolidayHomeSubmit}
                      value={detailsValue}
                      setValue={setDetailsValue}
                      mainImage={mainImage}
                      setMainImage={setMainImage}
                      image1={image1}
                      setImage1={setImage1}
                      image2={image2}
                      setImage2={setImage2}
                      image3={image3}
                      setImage3={setImage3}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginRight: "1.5em",
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{ marginTop: "1em" }}
                        onClick={handleNextToUnit}
                      >
                        Next
                      </Button>
                    </Box>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                    <EditHolidayHomeBreakdown
                      setSubmit={setHomeBreakdownSubmit}
                      roomArray={roomArray}
                      setRoomArray={setRoomArray}
                      unitArray={unitArray}
                      setUnitArray={setUnitArray}
                      hallArray={hallArray}
                      setHallArray={setHallArray}
                      bdValue={bdValue}
                      setBdValue={setBdValue}
                      adultsCount={adultsCount}
                      setAdultsCount={setAdultsCount}
                      childCount={childCount}
                      setChildCount={setChildCount}
                      roomTypeArray={roomTypeArray}
                      setRoomTypeArray={setRoomTypeArray}
                      settingRoomRentalArray={settingRoomRentalArray}
                      setSettingRoomRentalArray={setSettingRoomRentalArray}
                      selectedRoomDetails={selectedRoomDetails}
                      setSelectedRoomDetails={setSelectedRoomDetails}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginRight: "1.5em",
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{ marginTop: "1em" }}
                        onClick={handleNextToHall}
                      >
                        Next
                      </Button>
                    </Box>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={2}>
                    <EditCaretakerDetails
                      setSubmit={setCaretakerSubmit}
                      value={valueCaretaker}
                      setValue={setValueCareTaker}
                      valueSecond={valueSecond}
                      setValueSecond={setValueSecond}
                      image1={careTakerImage1}
                      image2={careTakerImage2}
                      setImage1={setCareTakerImage1}
                      setImage2={setCareTakerImage2}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginRight: "1.5em",
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{ marginTop: "1em" }}
                        disabled={submitDisable}
                        onClick={handleApproval}
                      >
                        Update
                      </Button>
                    </Box>
                  </CustomTabPanel>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* alert type already exist*/}
      <div>
        <Snackbar
          open={EditSuccessfullAlert}
          autoHideDuration={4000}
          onClose={handleEditSuccessfullAlert}
        >
          <Alert
            onClose={handleEditSuccessfullAlert}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            HolidayHome Successfully Updated
          </Alert>
        </Snackbar>
      </div>
    </ThemeProvider>
  );
};

export default HolidayHomeEdit;
