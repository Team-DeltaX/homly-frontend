import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import UploadImageCloudinary from "../../Common/UploadImageCloudinary";

const CareTakerDetailsView = ({
  setSubmit,
  value,
  setValue,
  valueSecond,
  setValueSecond,
  setImage1,
  setImage2,
}) => {
  const [secondCaretaker, setSecondCaretaker] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    const isFirstCaretakerComplete =
      value.caretakerName !== "" &&
      value.caretakerContactNo !== "" &&
      value.caretakerStatus !== "" &&
      value.caretakerAddress !== "";

    const isSecondCaretakerComplete =
      valueSecond.caretakerName !== "" &&
      valueSecond.caretakerContactNo !== "" &&
      valueSecond.caretakerStatus !== "" &&
      valueSecond.caretakerAddress !== "";

    const areErrorsEmpty =
      !error.ctname &&
      !error.sctname &&
      !error.ctContactNo &&
      !error.sctContactNo;

    if (areErrorsEmpty) {
      // setcaretakerError(true);
    }

    if (secondCaretaker) {
      setSubmit(
        isFirstCaretakerComplete && isSecondCaretakerComplete && areErrorsEmpty
      );
    } else {
      setSubmit(isFirstCaretakerComplete && areErrorsEmpty);
    }
  }, [value, valueSecond, secondCaretaker, setSubmit]);

  const handleNameChange = (e) => {
    setValue({ ...value, caretakerName: e.target.value });
    const name_regex = /^[a-zA-Z\s]+$/;

    if (e.target.value.length > 0) {
      if (!name_regex.test(e.target.value)) {
        setError({ ...error, ctname: true });
      } else {
        setError({ ...error, ctname: false });
      }
    }
  };

  const handleNameChangeSecond = (e) => {
    setValueSecond({ ...valueSecond, caretakerName: e.target.value });
    const name_regex = /^[a-zA-Z\s]+$/;

    if (e.target.value.length > 0) {
      if (!name_regex.test(e.target.value)) {
        setError({ ...error, sctname: true });
      } else {
        setError({ ...error, sctname: false });
      }
    }
  };

  const handleAddressChange = (e) => {
    setValue({ ...value, caretakerAddress: e.target.value });
  };

  const handleAddressChangeSecond = (e) => {
    setValueSecond({ ...valueSecond, caretakerAddress: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setValue({ ...value, caretakerDescription: e.target.value });
  };

  const handleDescriptionChangeSecond = (e) => {
    setValueSecond({ ...valueSecond, caretakerDescription: e.target.value });
  };

  const handleContactNoChange = (e) => {
    setValue({ ...value, caretakerContactNo: e.target.value });
    const phone_regex = /^\d{10}$/;
    if (e.target.value.length > 0) {
      if (!phone_regex.test(e.target.value)) {
        setError({ ...error, ctContactNo: true });
      } else {
        setError({ ...error, ctContactNo: false });
      }
    }
  };

  const handleContactNoChangeSecond = (e) => {
    setValueSecond({ ...valueSecond, caretakerContactNo: e.target.value });
    const phone_regex = /^\d{10}$/;
    if (e.target.value.length > 0) {
      if (!phone_regex.test(e.target.value)) {
        setError({ ...error, sctContactNo: true });
      } else {
        setError({ ...error, sctContactNo: false });
      }
    }
  };

  const handlestatusChange = (e) => {
    setValue({ ...value, caretakerStatus: e.target.value });
  };

  const handlestatusChangeSecond = (e) => {
    setValueSecond({ ...valueSecond, caretakerStatus: e.target.value });
  };

  const [showSecondCaretaker, setShowSecondCaretaker] = useState(false);

  const handleAddMoreClick = () => {
    setShowSecondCaretaker(true);
    setSecondCaretaker(true);
  };

  const handleRemoveClick = () => {
    setShowSecondCaretaker(false);
    setSecondCaretaker(false);
  };

  return (
    <Box>
      <fieldset style={{ borderRadius: "16px", color: "grey" }}>
        <legend>Caretaker Details</legend>
        <Box className="first_caretaker">
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
              error={error.ctname}
              required
              id="outlined-required"
              label="Enter Name"
              placeholder="Enter Name"
              fullWidth
              size="small"
              onChange={handleNameChange}
              helperText={error.ctname ? "Invalid input" : " "}
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
                Contact No
              </Typography>
            </Box>
            <TextField
              error={error.ctContactNo}
              required
              id="outlined-required"
              label="Enter Contact No"
              placeholder="Enter Contact No"
              fullWidth
              size="small"
              onChange={handleContactNoChange}
              helperText={error.ctContactNo ? "There should be 10 digits" : " "}
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
              multiline
              id="outlined-required"
              label="Enter Address"
              placeholder="Enter Address"
              fullWidth
              size="small"
              required
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
                Description
              </Typography>
            </Box>
            <TextField
              id="outlined-required"
              label="Enter Description"
              placeholder="Enter Description"
              fullWidth
              size="small"
              onChange={handleDescriptionChange}
            />
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
                Image
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
        </Box>

        {showSecondCaretaker && (
          <Box className="second_caretaker" sx={{ marginTop: "2em" }}>
            <hr style={{ width: "300px", marginBottom: "2em" }}></hr>
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
                error={error.sctname}
                required
                id="outlined-required"
                label="Enter Name"
                placeholder="Enter Name"
                fullWidth
                size="small"
                onChange={handleNameChangeSecond}
                helperText={error.sctname ? "Invalid Input" : ""}
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
                  Contact No
                </Typography>
              </Box>
              <TextField
                error={error.sctContactNo}
                required
                id="outlined-required"
                label="Enter Contact No"
                placeholder="Enter Contact No"
                fullWidth
                size="small"
                onChange={handleContactNoChangeSecond}
                helperText={
                  error.sctContactNo ? "There should be 10 digits" : " "
                }
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
                  onChange={handlestatusChangeSecond}
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
                multiline
                id="outlined-required"
                label="Enter Address"
                placeholder="Enter Address"
                fullWidth
                size="small"
                required
                onChange={handleAddressChangeSecond}
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
                id="outlined-required"
                label="Enter Description"
                placeholder="Enter Description"
                fullWidth
                size="small"
                onChange={handleDescriptionChangeSecond}
              />
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
                  Image
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
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1em",
              }}
            >
              <Button
                variant="contained"
                size="small"
                onClick={handleRemoveClick}
              >
                Remove
              </Button>
            </Box>
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2em",
            marginBottom: "1em",
          }}
        >
          {!showSecondCaretaker && (
            <Button
              variant="outlined"
              size="small"
              onClick={handleAddMoreClick}
            >
              Add More
            </Button>
          )}
        </Box>
      </fieldset>
    </Box>
  );
};

export default CareTakerDetailsView;
