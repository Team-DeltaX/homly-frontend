import React, { useState, useEffect } from "react";
import { Box, TextField, Typography, Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import UploadImageCloudinary from "../../../Common/UploadImageCloudinary";
import AxiosClient from "../../../../services/AxiosClient";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const EditHolidayHomeDetails = ({
  value,
  setValue,
  mainImage,
  setMainImage,
  image1,
  setImage1,
  image2,
  setImage2,
  image3,
  setImage3,
  setSubmit,
}) => {
  const [error, setError] = useState({
    name: false,
    address: false,
    description: false,
    contactNo1: false,
    contactNo2: false,
  });
  const [openNameExistAlert, setOpenNameExistAlert] = useState(false);
  const handleCloseNameExistAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenNameExistAlert(false);
  };
  const [names, setNames] = useState([]);

  useEffect(() => {
    AxiosClient.get(
      "http://localhost:8080/admin/auth/locationadmin/holidayhome/allnames"
    )
      .then((res) => {
        const data = res.data.names;
        data.forEach((item) => {
          names.push(item.name);
        });
        // remove duplicates in name array
        const uniqueNames = [...new Set(names)];
        //remove a item from array
        uniqueNames.splice(uniqueNames.indexOf(value.name), 1);
        setNames(uniqueNames);
        console.log("names", names);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const isDetailsComplete =
      value.name !== "" &&
      value.address !== "" &&
      value.district !== "" &&
      value.description !== "" &&
      value.contactNo1 !== "" &&
      value.category !== "" &&
      value.status !== "";

    const areErrorsEmpty =
      !error.name &&
      !error.address &&
      !error.description &&
      !error.contactNo1 &&
      !error.contactNo2;

    if (isDetailsComplete && areErrorsEmpty && !openNameExistAlert) {
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  }, [value, error, setSubmit, openNameExistAlert]);

  console.log("edithomedetails", value);
  const handleNameChange = (e) => {
    console.log("names", names);
    const isNameDuplicate = names.includes(e.target.value);
    console.log("nameExist", isNameDuplicate);
    if (isNameDuplicate) {
      setOpenNameExistAlert(true);
    } else {
      setOpenNameExistAlert(false);
    }

    setValue({ ...value, name: e.target.value });
    const name_regex = /^[a-zA-Z0-9\s-]+$/;
    if (e.target.value.length > 0) {
      if (!name_regex.test(e.target.value)) {
        setError({ ...error, name: true });
      } else {
        setError({ ...error, name: false });
      }
    }
  };

  const handleAddressChange = (e) => {
    setValue({ ...value, address: e.target.value });
  };

  const handleDistrictChange = (e) => {
    setValue({ ...value, district: e.target.value });
  };

  const handleDisriptionChange = (e) => {
    setValue({ ...value, description: e.target.value });
  };

  const handleContactNo1Change = (e) => {
    setValue({ ...value, contactNo1: e.target.value });
    const phone_regex = /^\d{10}$/;
    if (e.target.value.length > 0) {
      if (!phone_regex.test(e.target.value)) {
        setError({ ...error, contactNo1: true });
      } else {
        setError({ ...error, contactNo1: false });
      }
    }
  };

  const handleContactNo2Change = (e) => {
    setValue({ ...value, contactNo2: e.target.value });
    const phone_regex = /^\d{10}$/;
    if (e.target.value.length > 0) {
      if (!phone_regex.test(e.target.value)) {
        setError({ ...error, contactNo2: true });
      } else {
        setError({ ...error, contactNo2: false });
      }
    }
  };

  const handlestatusChange = (e) => {
    setValue({ ...value, status: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setValue({ ...value, category: e.target.value });
  };

  return (
    <Box>
      <fieldset
        className="edit_container"
        style={{
          borderRadius: "16px",
          color: "grey",
          overflow: "scroll",
          paddingBottom: "20px",
        }}
      >
        <legend>Holiday Home Details</legend>
        <Grid container spacing={4}>
          <Grid item md={6} sm={12} xs={12}>
            <Box
              className="input_container"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1em",
                marginBottom: "12px",
              }}
            >
              <Box
                sx={{ minWidth: "100px", maxWidth: "200px" }}
                className="label_container"
              >
                <Typography variant="p" sx={{ color: "black" }}>
                  Name
                </Typography>
              </Box>
              <TextField
                error={error.name}
                className="input_field"
                required
                id="outlined-required"
                label="Enter Name"
                placeholder="Enter Name"
                fullWidth
                size="small"
                onChange={handleNameChange}
                helperText={error.name ? "Invalid Input" : ""}
                value={value.name}
              />
            </Box>
            <Box
              className="input_container"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1em",
                marginBottom: "12px",
              }}
            >
              <Box
                sx={{ minWidth: "100px", maxWidth: "200px" }}
                className="label_container"
              >
                <Typography variant="p" sx={{ color: "black" }}>
                  District
                </Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel required id="demo-simple-select-label">
                    District
                  </InputLabel>
                  <Select
                    xs={{ width: "5%" }}
                    size="small"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value.district}
                    label="Age"
                    onChange={handleDistrictChange}
                  >
                    <MenuItem value={"colombo"}>Colombo</MenuItem>
                    <MenuItem value={"gampaha"}>Gampaha</MenuItem>
                    <MenuItem value={"kalutara"}>Kalutara</MenuItem>
                    <MenuItem value={"kandy"}>Kandy</MenuItem>
                    <MenuItem value={"matale"}>Matale</MenuItem>
                    <MenuItem value={"nuwara eliya"}>Nuwara Eliya</MenuItem>
                    <MenuItem value={"galle"}>Galle</MenuItem>
                    <MenuItem value={"matara"}>Matara</MenuItem>
                    <MenuItem value={"hambantota"}>Hambantota</MenuItem>
                    <MenuItem value={"jaffna"}>Jaffna</MenuItem>
                    <MenuItem value={"kilinochchi"}>Kilinochchi</MenuItem>
                    <MenuItem value={"mannar"}>Mannar</MenuItem>
                    <MenuItem value={"vavuniya"}>Vavuniya</MenuItem>
                    <MenuItem value={"mullaitivu"}>Mullaitivu</MenuItem>
                    <MenuItem value={"batticaloa"}>Batticaloa</MenuItem>
                    <MenuItem value={"ampara"}>Ampara</MenuItem>
                    <MenuItem value={"trincomalee"}>Trincomalee</MenuItem>
                    <MenuItem value={"kurunegala"}>Kurunegala</MenuItem>
                    <MenuItem value={"puttalam"}>Puttalam</MenuItem>
                    <MenuItem value={"anuradhapura"}>Anuradhapura</MenuItem>
                    <MenuItem value={"bolonnaruwa"}>Polonnaruwa</MenuItem>
                    <MenuItem value={"badulla"}>Badulla</MenuItem>
                    <MenuItem value={"monaragala"}>Monaragala</MenuItem>
                    <MenuItem value={"ratnapura"}>Ratnapura</MenuItem>
                    <MenuItem value={"kegalle"}>Kegalle</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box
              className="input_container"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1em",
                marginBottom: "12px",
              }}
            >
              <Box
                sx={{ minWidth: "100px", maxWidth: "200px" }}
                className="label_container"
              >
                <Typography variant="p" sx={{ color: "black" }}>
                  Contact No 1
                </Typography>
              </Box>
              <TextField
                error={error.contactNo1}
                required
                id="outlined-required"
                label="Enter Contact No"
                placeholder="Enter Contact No"
                fullWidth
                size="small"
                onChange={handleContactNo1Change}
                helperText={error.contactNo1 ? "There should be 10 digits" : ""}
                value={value.contactNo1}
              />
            </Box>
            <Box
              className="input_container"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1em",
                marginBottom: "12px",
              }}
            >
              <Box
                sx={{ minWidth: "100px", maxWidth: "200px" }}
                className="label_container"
              >
                <Typography variant="p" sx={{ color: "black" }}>
                  Category
                </Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-label">select</InputLabel>
                  <Select
                    required
                    xs={{ width: "5%" }}
                    size="small"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value.category}
                    label="Age"
                    onChange={handleCategoryChange}
                  >
                    <MenuItem value={"exclusive"}>Exclusive</MenuItem>
                    <MenuItem value={"nonExclusive"}>Non-Exclusive</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box
              className="input_container"
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                flexDirection: "column",
                gap: "1em",
                marginBottom: "12px",
                marginTop: "22px",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{ minWidth: "100px", maxWidth: "100px" }}
                  className="label_container"
                >
                  <Typography variant="p" sx={{ color: "black" }}>
                    Main Image
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <UploadImageCloudinary
                    folderName="caretaker"
                    setImage={setMainImage}
                    isMultiple={false}
                    limit={1}
                    buttonName="Upload Image"
                    buttonVariant="outlined"
                    isDisplayImageName={true}
                  />
                </Box>
              </Box>
              <Box sx={{ width: "200px" }}>
                <img
                  src={mainImage}
                  alt="mainimage"
                  style={{ width: "100%" }}
                />
              </Box>
            </Box>
            <Box
              className="input_container"
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                flexDirection: "column",
                gap: "1em",
                marginBottom: "12px",
                marginTop: "22px",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{ minWidth: "100px", maxWidth: "100px" }}
                  className="label_container"
                >
                  <Typography variant="p" sx={{ color: "black" }}>
                    Image1
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <UploadImageCloudinary
                    folderName="caretaker"
                    setImage={setImage1}
                    isMultiple={false}
                    limit={1}
                    buttonName="Upload Image"
                    buttonVariant="outlined"
                    isDisplayImageName={true}
                  />
                </Box>
              </Box>
              <Box sx={{ width: "200px" }}>
                <img src={image1} alt="image1" style={{ width: "100%" }} />
              </Box>
            </Box>
            <Box
              className="input_container"
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                flexDirection: "column",
                gap: "1em",
                marginBottom: "12px",
                marginTop: "22px",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{ minWidth: "100px", maxWidth: "100px" }}
                  className="label_container"
                >
                  <Typography variant="p" sx={{ color: "black" }}>
                    Image2
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <UploadImageCloudinary
                    folderName="caretaker"
                    setImage={setImage2}
                    isMultiple={false}
                    limit={1}
                    buttonName="Upload Image"
                    buttonVariant="outlined"
                    isDisplayImageName={true}
                  />
                </Box>
              </Box>
              <Box sx={{ width: "200px" }}>
                <img src={image2} alt="image2" style={{ width: "100%" }} />
              </Box>
            </Box>
            <Box
              className="input_container"
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                flexDirection: "column",
                gap: "1em",
                marginBottom: "12px",
                marginTop: "22px",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{ minWidth: "100px", maxWidth: "100px" }}
                  className="label_container"
                >
                  <Typography variant="p" sx={{ color: "black" }}>
                    Image3
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <UploadImageCloudinary
                    folderName="caretaker"
                    setImage={setImage3}
                    isMultiple={false}
                    limit={1}
                    buttonName="Upload Image"
                    buttonVariant="outlined"
                    isDisplayImageName={true}
                  />
                </Box>
              </Box>
              <Box sx={{ width: "200px" }}>
                <img src={image3} alt="image3" style={{ width: "100%" }} />
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Box
              className="input_container"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1em",
                marginBottom: "12px",
              }}
            >
              <Box
                sx={{ minWidth: "100px", maxWidth: "200px" }}
                className="label_container"
              >
                <Typography variant="p" sx={{ color: "black" }}>
                  Address
                </Typography>
              </Box>
              <TextField
                required
                id="outlined-required"
                label="Enter Address"
                placeholder="Enter Address"
                fullWidth
                size="small"
                onChange={handleAddressChange}
                value={value.address}
              />
            </Box>
            <Box
              className="input_container"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1em",
                marginBottom: "12px",
              }}
            >
              <Box
                sx={{ minWidth: "100px", maxWidth: "200px" }}
                className="label_container"
              >
                <Typography variant="p" sx={{ color: "black" }}>
                  Description
                </Typography>
              </Box>
              <TextField
                required
                multiline
                id="outlined-required"
                label="Enter Description"
                placeholder="Enter Description"
                fullWidth
                size="small"
                onChange={handleDisriptionChange}
                value={value.description}
              />
            </Box>
            <Box
              className="input_container"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1em",
                marginBottom: "12px",
              }}
            >
              <Box
                sx={{ minWidth: "100px", maxWidth: "200px" }}
                className="label_container"
              >
                <Typography variant="p" sx={{ color: "black" }}>
                  Contact No 2
                </Typography>
              </Box>
              <TextField
                error={error.contactNo2}
                id="outlined-required"
                label="Enter Contact No2"
                placeholder="Enter Contact No2"
                fullWidth
                size="small"
                onChange={handleContactNo2Change}
                helperText={error.contactNo2 ? "There should be 10 digits" : ""}
                value={value.contactNo2}
              />
            </Box>
            <Box
              className="input_container"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1em",
                marginBottom: "12px",
              }}
            >
              <Box
                sx={{ minWidth: "100px", maxWidth: "100px" }}
                className="label_container"
              >
                <Typography variant="p" sx={{ color: "black" }}>
                  Status
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={value.status}
                  onChange={handlestatusChange}
                >
                  <FormControlLabel
                    value="Active"
                    control={<Radio />}
                    label="Active"
                    sx={{ display: "inline-block", width: "fit-content" }}
                  />
                  <FormControlLabel
                    value="Inactive"
                    control={<Radio />}
                    label="Inactive"
                  />
                </RadioGroup>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </fieldset>
      {/* alert same hall exist add hall popup*/}
      <div>
        <Snackbar open={openNameExistAlert} onClose={handleCloseNameExistAlert}>
          <Alert
            onClose={handleCloseNameExistAlert}
            severity="error"
            variant="filled"
            sx={{ width: "100%" }}
          >
            {value.name} Already Exist
          </Alert>
        </Snackbar>
      </div>
    </Box>
  );
};

export default EditHolidayHomeDetails;
