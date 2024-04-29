import React, { lazy, useContext } from "react";
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

const UserRouter = () => {
  const { role, isLogged } = useContext(AuthContext);
  const validateRoute = () => {
    return (
      (isLogged === "true" || localStorage.getItem("isLogged") === "true") &&
      (role === "User" || localStorage.getItem("role") === "User")
    );
  };
  return (
    <Routes>
      <Route path="/" element={<UserLogin />} />
      <Route path="/Registration" element={<UserRegistration />} />
      <Route
        path="/Home"
        element={validateRoute() ? <Home /> : <NotFoundPage />}
      />
      <Route
        path="/HolidayHomes/:district"
        element={validateRoute() ? <HolidayHome /> : <NotFoundPage />}
      />
      <Route
        path="/HolidayHomes"
        element={validateRoute() ? <HolidayHome /> : <NotFoundPage />}
      />
      <Route
        path="/HolidayHomeDetails/:homeId"
        element={validateRoute() ? <HolidayHomeDetails /> : <NotFoundPage />}
      />
      <Route
        path="/MyProfile"
        element={validateRoute() ? <Profile /> : <NotFoundPage />}
      />
      <Route path="/Registration/Success" element={<EmailVerified />} />
    </Routes>
  );
};

export default UserRouter;
