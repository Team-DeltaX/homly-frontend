import React, {  lazy, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthContext } from "../Contexts/AuthContext";

const UserRegistration = lazy(() => import("../Pages/User/UserRegistration"));
const UserLogin = lazy(() => import("../Pages/User/UserLogin"));
const Home = lazy(() => import("../Pages/User/Home"));
const HolidayHome = lazy(() => import("../Pages/User/HolidayHome"));
const Profile = lazy(() => import("../Pages/User/Profile"));
const HolidayHomeDetails = lazy(() =>
  import("../Pages/User/HolidayHomeDetails")
);
const EmailVerified = lazy(() => import("../Pages/User/EmailVerified"));

const UserRouter = () =>{
  
  return(
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/Registration" element={<UserRegistration />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/HolidayHomes" element={<HolidayHome />} />
        <Route path="/HolidayHomeDetails/:homeId" element={ <HolidayHomeDetails />} />
        <Route path="/MyProfile" element={<Profile />} />
        <Route path="/Registration/Success" element={<EmailVerified />} />
      </Routes>
  )

} 


export default UserRouter;
