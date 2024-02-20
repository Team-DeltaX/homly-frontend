import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import {
  Box,
  ThemeProvider,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Stack,
  Avatar,
} from "@mui/material";

import PersonalDetailsGrid from "../PersonalDetailsGrid/PersonalDetailsGrid";

import theme from "../../../HomlyTheme";
import ProfilePicUploadPopup from "../ProfilePicUploadPopup";
import ErrorSnackbar from "../ErrorSnackbar";

import { AuthContext } from "../../../Contexts/AuthContext";

const PersonalDetails = () => {
  const { authServiceNumber } = useContext(AuthContext);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const phoneRegex = /^[0-9]{10}$/;

  const [data, setData] = useState({
    serviceNo: authServiceNumber,
    name: "John Doe",
    nic: "123456789V",
    work: "Colombo",
    address: "No 1, Colombo",
    contactNo: "0123456798",
    email: "apb@gmail.com",
    image: "",
  });

  const [errorStatus, setErrorStatus] = useState({
    isOpen: false,
    type: "",
    message: "",
  });

  const [isEnable, setIsEnable] = useState(false);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const checkEmail = (email) => {
    return email.length > 0 && !emailRegex.test(email);
  };

  const checkContactNo = (contactNo) => {
    return contactNo.length > 0 && !phoneRegex.test(contactNo);
  };

  const handleEdit = () => {
    setIsEnable(true);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3002/users/auth/${authServiceNumber}`)
      .then((res) => {
        if (Response) {
          console.log("apidata", res.data);
          setData({
            ...data,
            name:res.data.name,
            nic: res.data.nic,
            work: res.data.work,
            address: res.data.address,
            email: res.data.email,
            contactNo: res.data.contactNo,
            image: res.data.image,
          });
        } else {
          setErrorStatus({
            ...errorStatus,
            isOpen: true,
            type: "error",
            message: res.data.message,
          });
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUpdate = () => {
    if (!checkEmail(data.email) && !checkContactNo(data.contactNo)) {
      const formData = {
        serviceNo: data.serviceNo,
        email: data.email,
        contactNo: data.contactNo,
        image: data.image,
      };
      axios
        .put("http://localhost:3002/users/auth", formData)
        .then((res) => {
          if (res.data.success) {
            setErrorStatus({
              ...errorStatus,
              isOpen: true,
              type: "success",
              message: res.data.message,
            });
          } else {
            setErrorStatus({
              ...errorStatus,
              isOpen: true,
              type: "error",
              message: res.data.message,
            });
          }
        })
        .catch((err) => {
          setErrorStatus({
            ...errorStatus,
            isOpen: true,
            type: "error",
            message: err.message,
          });
        });
      setIsEnable(false);
    }
  };

  const handleCancel = () => {
    setIsEnable(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Typography variant="h4">Personal Details</Typography>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: { xs: "3% 0 20% 0", sm: "3% 0 0 0" },
          }}
        >
          <Card sx={{ width: { xs: "100%", sm: "90%" } }}>
            <CardContent>
              <Stack direction="row" sx={{ flexWrap: "wrap" }}>
                <Box sx={{ width: { xs: "100%", sm: "70%" } }}>
                  <PersonalDetailsGrid
                    id="serviceNo"
                    lable="Service Number"
                    value={data.serviceNo}
                    editable={false}
                  />
                  <PersonalDetailsGrid
                    id="name"
                    lable="Name"
                    value={data.name}
                    editable={false}
                  />
                  <PersonalDetailsGrid
                    id="nic"
                    lable="NIC Number"
                    value={data.nic}
                    editable={false}
                  />
                  <PersonalDetailsGrid
                    id="work"
                    lable="Work Location"
                    value={data.work}
                    editable={false}
                  />
                  <PersonalDetailsGrid
                    id="address"
                    lable="Residantal Address"
                    value={data.address}
                    editable={false}
                  />
                  <PersonalDetailsGrid
                    id="contactNo"
                    lable="Contact Number"
                    value={data.contactNo}
                    editable={isEnable}
                    setData={(value) => {
                      setData({ ...data, contactNo: value });
                    }}
                    error={checkContactNo(data.contactNo)}
                    helperText={
                      checkContactNo(data.contactNo)
                        ? "Invalid Contact Number"
                        : ""
                    }
                  />
                  <PersonalDetailsGrid
                    id="email"
                    lable="Email"
                    value={data.email}
                    editable={isEnable}
                    setData={(value) => {
                      setData({ ...data, email: value });
                    }}
                    error={checkEmail(data.email)}
                    helperText={checkEmail(data.email) ? "Invalid Email" : ""}
                  />
                </Box>
                <Box sx={{ height: "210px", width: { xs: "100%", sm: "20%" } }}>
                  {/* <AvatarImage /> */}
                  <ProfilePicUploadPopup
                    open={open}
                    setOpen={setOpen}
                    setImage={(image) => setData({ ...data, image: image })}
                  />
                  <Stack
                    direction="column"
                    sx={{
                      margin: "2% 0",
                      height: { xs: 80, sm: 100 },
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src={data.image}
                      sx={{
                        width: 150,
                        height: 150,
                      }}
                    />
                    <Box
                      sx={{
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        marginTop: "15px",
                        marginLeft: "8px",
                      }}
                    >
                      <Button
                        variant="outlined"
                        onClick={handleClickOpen}
                        disabled={!isEnable}
                      >
                        Edit Profile Picture
                      </Button>
                    </Box>
                  </Stack>
                </Box>
              </Stack>
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end" }}>
              <Button
                variant="outlined"
                size="small"
                onClick={handleCancel}
                sx={{ width: "70px" }}
              >
                Cancel
              </Button>
              {isEnable ? (
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: "primary.main",
                    marginLeft: "2%",
                    width: "70px",
                  }}
                  onClick={handleUpdate}
                >
                  Update
                </Button>
              ) : (
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: "primary.main",
                    marginLeft: "2%",
                    width: "70px",
                  }}
                  onClick={handleEdit}
                >
                  Edit
                </Button>
              )}
            </CardActions>
          </Card>
        </Box>
        <ErrorSnackbar
          isOpen={errorStatus.isOpen}
          type={errorStatus.type}
          message={errorStatus.message}
          setIsOpen={(value) =>
            setErrorStatus({ ...errorStatus, isOpen: value })
          }
        />
      </Box>
    </ThemeProvider>
  );
};

export default PersonalDetails;
