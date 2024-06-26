import React, { useState, useEffect } from "react";
import { Box, TextField, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import UploadImageCloudinary from "../../Common/UploadImageCloudinary";
import AxiosClient from "../../../services/AxiosClient";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const HomeDetailsView = ({
  setSubmit,
  value,
  setValue,
  setMainImage,
  setImage1,
  setImage2,
  setImage3,
}) => {
  const [error, setError] = useState({
    name: false,
    address: false,
    description: false,
    contactNo1: false,
    contactNo2: false,
  });

  const [names, setNames] = useState([]);

  const [openNameExistAlert, setOpenNameExistAlert] = useState(false);

  const handleCloseNameExistAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenNameExistAlert(false);
  };
  useEffect(() => {
    AxiosClient.get(
      "http://localhost:8080/admin/auth/locationadmin/holidayhome/allnames"
    )
      .then((res) => {
        const namesList = res.data.names;
        namesList.forEach((item) => {
          names.push(item.name);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });

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

  const handleNameChange = (e) => {
    setValue({ ...value, name: e.target.value });

    const isNameDuplicate = names.includes(e.target.value);
    console.log("nameExist", isNameDuplicate);
    if (isNameDuplicate) {
      setOpenNameExistAlert(true);
    } else {
      setOpenNameExistAlert(false);
    }

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
    let wordCount = e.target.value.split(" ").length;
    // console.log("word", wordCount);

    if (e.target.value.length > 0) {
      if (wordCount < 50 || wordCount > 150) {
        setError({ ...error, description: true });
      } else {
        setValue({ ...value, description: e.target.value });
        setError({ ...error, description: false });
      }
    }
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
      <fieldset style={{ borderRadius: "16px", color: "grey" }}>
        <legend>Holiday Home Details</legend>
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
            helperText={error.name ? "Invalid Name" : ""}
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
                <MenuItem value={"Colombo"}>Colombo</MenuItem>
                <MenuItem value={"Gampaha"}>Gampaha</MenuItem>
                <MenuItem value={"Kalutara"}>Kalutara</MenuItem>
                <MenuItem value={"Kandy"}>Kandy</MenuItem>
                <MenuItem value={"Matale"}>Matale</MenuItem>
                <MenuItem value={"Nuwara Eliya"}>Nuwara Eliya</MenuItem>
                <MenuItem value={"Galle"}>Galle</MenuItem>
                <MenuItem value={"Matara"}>Matara</MenuItem>
                <MenuItem value={"Hambantota"}>Hambantota</MenuItem>
                <MenuItem value={"Jaffna"}>Jaffna</MenuItem>
                <MenuItem value={"Kilinochchi"}>Kilinochchi</MenuItem>
                <MenuItem value={"Mannar"}>Mannar</MenuItem>
                <MenuItem value={"Vavuniya"}>Vavuniya</MenuItem>
                <MenuItem value={"Mullaitivu"}>Mullaitivu</MenuItem>
                <MenuItem value={"Batticaloa"}>Batticaloa</MenuItem>
                <MenuItem value={"Ampara"}>Ampara</MenuItem>
                <MenuItem value={"Trincomalee"}>Trincomalee</MenuItem>
                <MenuItem value={"Kurunegala"}>Kurunegala</MenuItem>
                <MenuItem value={"Puttalam"}>Puttalam</MenuItem>
                <MenuItem value={"Anuradhapura"}>Anuradhapura</MenuItem>
                <MenuItem value={"Polonnaruwa"}>Polonnaruwa</MenuItem>
                <MenuItem value={"Badulla"}>Badulla</MenuItem>
                <MenuItem value={"Monaragala"}>Monaragala</MenuItem>
                <MenuItem value={"Ratnapura"}>Ratnapura</MenuItem>
                <MenuItem value={"Kegalle"}>Kegalle</MenuItem>
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
              Description
            </Typography>
          </Box>
          <TextField
            error={error.description}
            required
            multiline
            id="outlined-required"
            label="Enter Description"
            placeholder="Enter Description"
            fullWidth
            size="small"
            onChange={handleDisriptionChange}
            helperText={error.description ? "50-150 words" : " "}
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
                value={value.catogery}
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
              />
              <FormControlLabel
                value="Inactive"
                control={<Radio />}
                label="Inactive"
              />
            </RadioGroup>
          </Box>
        </Box>
        <Box
          className="input_container"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "1em",
            marginBottom: "12px",
          }}
        >
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
        <Box
          className="input_container"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "1em",
            marginBottom: "12px",
          }}
        >
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
              setImage={setImage1}
              isMultiple={false}
              limit={1}
              buttonName="Upload Image"
              buttonVariant="outlined"
              isDisplayImageName={true}
            />
          </Box>
        </Box>
        <Box
          className="input_container"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "1em",
            marginBottom: "12px",
          }}
        >
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
              setImage={setImage2}
              isMultiple={false}
              limit={1}
              buttonName="Upload Image"
              buttonVariant="outlined"
              isDisplayImageName={true}
            />
          </Box>
        </Box>
        <Box
          className="input_container"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "1em",
            marginBottom: "12px",
          }}
        >
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
              setImage={setImage3}
              isMultiple={false}
              limit={1}
              buttonName="Upload Image"
              buttonVariant="outlined"
              isDisplayImageName={true}
            />
          </Box>
        </Box>
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

export default HomeDetailsView;
