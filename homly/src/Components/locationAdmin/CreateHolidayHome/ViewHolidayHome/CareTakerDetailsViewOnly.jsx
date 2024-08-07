import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useParams } from "react-router-dom";
import AxiosClient from "../../../../services/AxiosClient";

const CareTakerDetailsViewOnly = ({ setAllValues }) => {
  const { homeId } = useParams();
  useEffect(() => {
    AxiosClient.get(`/admin/auth/locationadmin/holidayhome/${homeId}`).then(
      (res) => {
        if (Response) {
          const caretakerDetails = res.data.caretaker;

          setValue({
            caretakerName: caretakerDetails[0].Name,
            caretakerContactNo: caretakerDetails[0].ContactNo,
            caretakerStatus: caretakerDetails[0].Status,
            caretakerAddress: caretakerDetails[0].Address,
            caretakerDescription: caretakerDetails[0].Description,
          });

          if (caretakerDetails[1]) {
            setValueSecond({
              caretakerName: caretakerDetails[1].Name || "",
              caretakerContactNo: caretakerDetails[1].ContactNo || "",
              caretakerStatus: caretakerDetails[1].Status || "",
              caretakerAddress: caretakerDetails[1].Address || "",
              caretakerDescription: caretakerDetails[1].Description || "",
            });
          }
        } else {
          console.log("No data found");
        }
      }
    );
    console.log(value.caretakerName);
  }, []);

  const [secondCaretaker, setSecondCaretaker] = useState(false);

  const [value, setValue] = useState({
    caretakerName: "",
    caretakerContactNo: "",
    caretakerStatus: "",
    caretakerAddress: "",
    caretakerDescription: "",
  });

  const [valueSecond, setValueSecond] = useState({
    caretakerName: "",
    caretakerContactNo: "",
    caretakerStatus: "",
    caretakerAddress: "",
    caretakerDescription: "",
  });

  const [error, setError] = useState({
    ctName: false,
    ctAddress: false,
    ctDescription: false,
    ctContactNo: false,
  });

  useEffect(() => {
    const isFirstCaretakerComplete =
      value.caretakerName !== "" &&
      value.caretakerContactNo !== "" &&
      value.caretakerStatus !== "" &&
      value.caretakerAddress !== "" &&
      value.caretakerDescription !== "";

    const isSecondCaretakerComplete =
      valueSecond.caretakerName !== "" &&
      valueSecond.caretakerContactNo !== "" &&
      valueSecond.caretakerStatus !== "" &&
      valueSecond.caretakerAddress !== "" &&
      valueSecond.caretakerDescription !== "";
  }, [value, valueSecond, secondCaretaker]);

  const handleNameChange = (e) => {
    setValue({ ...value, caretakerName: e.target.value });
    const name_regex = /^[a-zA-Z]+$/;

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
    const name_regex = /^[a-zA-Z]+$/;

    if (e.target.value.length > 0) {
      if (!name_regex.test(e.target.value)) {
        setError({ ...error, ctname: true });
      } else {
        setError({ ...error, ctname: false });
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
        setError({ ...error, ctContactNo: true });
      } else {
        setError({ ...error, ctContactNo: false });
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
              value={value.caretakerName}
              required
              id="outlined-required"
              label="Enter Name"
              placeholder="Enter Name"
              fullWidth
              size="small"
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
              value={value.caretakerContactNo}
              required
              id="outlined-required"
              label="Enter Contact No"
              placeholder="Enter Contact No"
              fullWidth
              size="small"
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
                value={value.caretakerStatus}
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
              value={value.caretakerAddress}
              multiline
              id="outlined-required"
              label="Enter Address"
              placeholder="Enter Address"
              fullWidth
              size="small"
              required
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
              value={value.caretakerDescription}
              id="outlined-required"
              label="Enter Description"
              placeholder="Enter Description"
              fullWidth
              size="small"
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
              <input type="file" />
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
                value={valueSecond.caretakerName}
                required
                id="outlined-required"
                label="Enter Name"
                placeholder="Enter Name"
                fullWidth
                size="small"
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
                value={valueSecond.caretakerContactNo}
                required
                id="outlined-required"
                label="Enter Contact No"
                placeholder="Enter Contact No"
                fullWidth
                size="small"
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
                  value={valueSecond.caretakerStatus}
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
                value={valueSecond.caretakerAddress}
                multiline
                id="outlined-required"
                label="Enter Address"
                placeholder="Enter Address"
                fullWidth
                size="small"
                required
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
                value={valueSecond.caretakerDescription}
                id="outlined-required"
                label="Enter Description"
                placeholder="Enter Description"
                fullWidth
                size="small"
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
                <input type="file" />
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
          {valueSecond.caretakerName !== ""
            ? !showSecondCaretaker && (
                <Button
                  variant="outlined"
                  size="small"
                  onClick={handleAddMoreClick}
                >
                  View More
                </Button>
              )
            : ""}
        </Box>
      </fieldset>
    </Box>
  );
};

export default CareTakerDetailsViewOnly;
