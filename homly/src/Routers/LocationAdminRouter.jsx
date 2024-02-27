import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewHolidayHome from "../Pages/locationAdmin/ViewHolidayHome";

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

const LocationAdminRouter = () => (
  <Routes>
    <Route path="/dashboard" element={<LocationDashboard />} />
    <Route path="/manage" element={<ManageHomes />} />
    <Route path="/details" element={<HolidayHomesDetails />} />
    <Route path="/feedback" element={<FeedBack />} />
    <Route path="/reservations" element={<Reservations />} />
    <Route path="/report" element={<Report />} />
    <Route
      path="/holidayhomes/createholidayhome"
      element={<CreateHolidayHome />}
    />
    <Route
      path="/holidayhomes/editholidayhome/:homeId"
      element={<HolidayHomeEdit />}
    />
    <Route
      path="/holidayhomes/viewholidayhome/:homeId"
      element={<ViewHolidayHome />}
    />
  </Routes>
);

export default LocationAdminRouter;
