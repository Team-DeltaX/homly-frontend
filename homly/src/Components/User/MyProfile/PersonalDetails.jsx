import React, { useState, useEffect, useContext } from "react";
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
  ToggleButton,
} from "@mui/material";
import PersonalDetailsGrid from "../PersonalDetailsGrid/PersonalDetailsGrid";
import theme from "../../../HomlyTheme";
import UploadImageCloudinary from "../../Common/UploadImageCloudinary";
import ErrorSnackbar from "../ErrorSnackbar";
import UserInterestedPopupProfile from "./UserInterestedPopupProfile";
import { AuthContext } from "../../../Contexts/AuthContext";
import AxiosClient from "../../../services/AxiosClient";

const styleSelected = {
  margin: "2px",
  border: "1px solid #872341",
  borderRadius: "50px",
  padding: "5px 30px",
  backgroundColor: "#f8abc3",
};

const PersonalDetails = () => {
  const { setIsUpdate } = useContext(AuthContext);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const phoneRegex = /^(0|\+94)[0-9]{9}$/;

  const [data, setData] = useState({
    serviceNo: "",
    name: "",
    nic: "",
    work: "",
    address: "",
    contactNo: "",
    email: "",
  });
  const [oldEmail, setOldEmail] = useState("");
  const [oldContactNo, setOldContactNo] = useState("");
  const [oldInterests, setOldInterests] = useState([]);
  const [oldImage, setOldImage] = useState("");
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
  const [buttonDisable, setButtonDisable] = useState(false);

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

  useEffect(() => {
    if (checkEmail(data.email) || checkContactNo(data.contactNo)) {
      setButtonDisable(true);
    } else {
      setButtonDisable(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.email, data.contactNo, oldEmail]);

  useEffect(() => {
    AxiosClient.get("/user/auth/details")
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
          setOldEmail(res.data.email);
          setOldContactNo(res.data.contactNo);
          setOldImage(res.data.image);
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

    AxiosClient.get("/user/auth/interested")
      .then((res) => {
        if (res.data) {
          if (res.data.userInterested.interested[0] !== null) {
            setInterests(res.data.userInterested.interested);
            setOldInterests(res.data.userInterested.interested);
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
      .catch(() => {
        setIsHaveInterests(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUpdate = () => {
    let emailUpdated = false;

    if (!checkEmail(data.email) && !checkContactNo(data.contactNo)) {
      const formData = {
        serviceNo: data.serviceNo,
        email: data.email,
        contactNo: data.contactNo,
        image: image,
      };
      AxiosClient.put("/user/auth/details", formData)
        .then((res) => {
          if (res.data.success) {
            if (res.data.emailUpdated) {
              emailUpdated = true;
            }
            const formData2 = {
              fac1: interests[0],
              fac2: interests[1],
              fac3: interests[2],
            };

            AxiosClient.put("/user/auth/interested", formData2).then((res) => {
              if (res.data.success) {
                setErrorStatus({
                  ...errorStatus,
                  isOpen: true,
                  type: "success",
                  message: emailUpdated
                    ? "Check your email,We will send you a verification link"
                    : "Updated Successfully",
                });
                setIsUpdate(true);
              } else {
                setErrorStatus({
                  ...errorStatus,
                  isOpen: true,
                  type: "error",
                  message: res.data.message,
                });
              }
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
      setData({ ...data, email: oldEmail });
      setIsEnable(false);
      setData({ ...data, email: oldEmail });
    }
  };

  const handleCancel = () => {
    setIsEnable(false);
    setData({ ...data, email: oldEmail, contactNo: oldContactNo });
    setImage(oldImage);
    setInterests(oldInterests);
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
            <CardContent sx={{ padding: { xs: 0, sm: "16px" } }}>
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
                  oldInterests={oldInterests}
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
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: { xs: "center", sm: "end" },
                      padding: "10px",
                    }}
                  >
                    <Stack direction="column">
                      {interests &&
                        interests.map((interest, index) => (
                          <Stack direction="row" key={index}>
                            <Typography
                              sx={{
                                fontWeight: "bold",
                                ml: 1,
                                color: "#872341",
                              }}
                            >
                              {index + 1}.
                            </Typography>
                            <ToggleButton
                              value={interest}
                              aria-label={interest}
                              style={styleSelected}
                              disabled
                            >
                              {interest}
                            </ToggleButton>
                          </Stack>
                        ))}
                    </Stack>
                  </Box>
                </Stack>
              </Stack>
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end" }}>
              {isEnable ? (
                <Stack direction="row">
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={handleCancel}
                    sx={{ width: "70px" }}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: "primary.main",
                      marginLeft: "2%",
                      width: "70px",
                    }}
                    onClick={handleUpdate}
                    disabled={buttonDisable}
                  >
                    Update
                  </Button>
                </Stack>
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
