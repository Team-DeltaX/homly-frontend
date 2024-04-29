import React, { lazy, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

const ViewHolidayHome = lazy(() =>
  import("../Pages/locationAdmin/ViewHolidayHome")
);

const LocationDashboard = lazy(() =>
  import("../Pages/locationAdmin/Dashboard")
);
const HolidayHomesDetails = lazy(() =>
  import("../Pages/locationAdmin/HolidayHomeDetails")
);

const CreateHolidayHome = lazy(() =>
  import("../Pages/locationAdmin/CreateHolidayHome")
);
const FeedBack = lazy(() => import("../Pages/locationAdmin/Feedback"));
const Reservations = lazy(() => import("../Pages/locationAdmin/Reservations"));

const Report = lazy(() => import("../Pages/locationAdmin/Report"));
const ManageHomes = lazy(() => import("../Pages/locationAdmin/ManageHomes"));
const HolidayHomeEdit = lazy(() =>
  import("../Pages/locationAdmin/HolidayHomeEdit")
);
const NotFoundPage = lazy(() => import("../Pages/NotFountPage"));

const LocationAdminRouter = () => {
  const { role, isLogged } = useContext(AuthContext);
  const validateRoute = () => {
    return (
      (isLogged === "true" || localStorage.getItem("isLogged") === "true") &&
      (role === "LocationAdmin" || localStorage.getItem("role") === "LocationAdmin")
    );
  };
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={validateRoute() ? <LocationDashboard /> : <NotFoundPage />}
      />
      <Route
        path="/manage"
        element={validateRoute() ? <ManageHomes /> : <NotFoundPage />}
      />
      <Route
        path="/details"
        element={validateRoute() ? <HolidayHomesDetails /> : <NotFoundPage />}
      />
      <Route
        path="/feedback"
        element={validateRoute() ? <FeedBack /> : <NotFoundPage />}
      />
      <Route
        path="/reservations"
        element={validateRoute() ? <Reservations /> : <NotFoundPage />}
      />
      <Route
        path="/report"
        element={validateRoute() ? <Report /> : <NotFoundPage />}
      />
      <Route
        path="/holidayhomes/createholidayhome"
        element={validateRoute() ? <CreateHolidayHome /> : <NotFoundPage />}
      />
      <Route
        path="/holidayhomes/editholidayhome/:homeId"
        element={validateRoute() ? <HolidayHomeEdit /> : <NotFoundPage />}
      />
      <Route
        path="/holidayhomes/viewholidayhome/:homeId"
        element={validateRoute() ? <ViewHolidayHome /> : <NotFoundPage />}
      />
    </Routes>
  );
};

export default LocationAdminRouter;
