import React, {  lazy, useContext } from "react";
import { Routes, Route } from "react-router-dom";

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
const NotFoundPage = lazy(() => import("../Pages/NotFountPage"));

const UserRouter = () =>{
  const {isLogged} = useContext(AuthContext);
  
  return(
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/Registration" element={<UserRegistration />} />
        <Route path="/Home" element={ isLogged ? <Home /> : <NotFoundPage/>} />
        <Route path="/HolidayHomes" element={isLogged ? <HolidayHome /> : <NotFoundPage/>} />
        <Route path="/HolidayHomeDetails" element={isLogged ? <HolidayHomeDetails /> : <NotFoundPage/>} />
        <Route path="/MyProfile" element={isLogged ? <Profile /> : <NotFoundPage/>} />
        <Route path="/Registration/Success" element={<EmailVerified />} />
      </Routes>
  )

} 


export default UserRouter;
