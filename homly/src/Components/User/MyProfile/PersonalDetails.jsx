import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import UploadImageCloudinary from "../../Common/UploadImageCloudinary";
import ErrorSnackbar from "../ErrorSnackbar";
import UserInterestedPopupProfile from "./UserInterestedPopupProfile";

const PersonalDetails = () => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const phoneRegex = /^[0-9]{10}$/;

  const [data, setData] = useState({
    serviceNo: "",
    name: "",
    nic: "",
    work: "",
    address: "",
    contactNo: "",
    email: "",
  });
  const [image, setImage] = useState("");
  const [interests, setInterests] = useState([]);
  const [isHaveInterests, setIsHaveInterests] = useState(false);
  const [insterestedPopup, setInsterestedPopup] = useState(false);
  const [errorStatus, setErrorStatus] = useState({
    isOpen: false,
    type: "",
    message: "",
  });
  const [isEnable, setIsEnable] = useState(false);

  const checkEmail = (email) => {
    if (email) {
      if (email.length > 0 && !emailRegex.test(email)) {
        return true;
      }
    }
    return false;
  };

  const checkContactNo = (contactNo) => {
    if (contactNo) {
      if (contactNo.length > 0 && !phoneRegex.test(contactNo)) {
        return true;
      }
    }
    return false;
  };

  const handleEdit = () => {
    setIsEnable(true);
  };

  const Navigate = useNavigate();

  useEffect(() => {
    try {
      axios
        .get(`${global.API_BASE_URL}/users/auth/details`, {
          withCredentials: true,
        })
        .then((res) => {
          if (Response) {
            setData({
              ...data,
              serviceNo: res.data.serviceNo,
              name: res.data.name,
              nic: res.data.nic,
              work: res.data.work,
              address: res.data.address,
              email: res.data.email,
              contactNo: res.data.contactNo,
            });
            setImage(res.data.image);
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
          if (!err.response.data.autherized) {
            setErrorStatus({
              ...errorStatus,
              isOpen: true,
              type: "error",
              message: "Unautherized Access",
            });
            Navigate("/");
          } else {
            setErrorStatus({
              ...errorStatus,
              isOpen: true,
              type: "error",
              message: "Server Error",
            });
          }
        });

      axios
        .get(`${global.API_BASE_URL}/users/auth/interested`, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data) {
            if (res.data.userInterested.interested[0] !== null) {
              setInterests(res.data.userInterested.interested);
            }
          } else {
            setErrorStatus({
              ...errorStatus,
              isOpen: true,
              type: "error",
              message: res.data.message,
            });
          }
          setIsHaveInterests(true);
        })
        .catch((err) => {
          setIsHaveInterests(false);
        });
    } catch (err) {
      Navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUpdate = () => {
    if (!checkEmail(data.email) && !checkContactNo(data.contactNo)) {
      const formData = {
        serviceNo: data.serviceNo,
        email: data.email,
        contactNo: data.contactNo,
        image: image,
      };
      axios
        .put(`${global.API_BASE_URL}/users/auth`, formData)
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

      const formData2 = {
        fac1: interests[0],
        fac2: interests[1],
        fac3: interests[2],
      };

      axios.put(`${global.API_BASE_URL}/users/auth/interested`, formData2, {
        withCredentials: true,
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
                <UserInterestedPopupProfile
                  open={insterestedPopup}
                  setOpen={setInsterestedPopup}
                  interests={interests}
                  setInterests={setInterests}
                />
                <Stack
                  direction="column"
                  sx={{ width: { xs: "100%", sm: "30%" } }}
                >
                  <Stack
                    direction="column"
                    sx={{
                      margin: "2% 0",
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src={image}
                      sx={{
                        width: 150,
                        height: 150,
                        border: "2px solid #3f51b5",
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
                      <UploadImageCloudinary
                        folderName="profile-pic"
                        setImage={setImage}
                        isMultiple={false}
                        limit={1}
                        buttonName="Upload Profile Picture"
                        buttonVariant="outlined"
                        isDisplayImageName={false}
                        isDisabled={!isEnable}
                      />
                    </Box>
                  </Stack>
                  <Button
                    disabled={!isEnable}
                    variant="outlined"
                    size="small"
                    sx={{
                      marginTop: "10px",
                      display: isHaveInterests ? "block" : "none",
                    }}
                    onClick={() => setInsterestedPopup(true)}
                  >
                    <Typography sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>
                      Change Interests
                    </Typography>
                  </Button>
                </Stack>
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
