import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

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
    <Route path="/locationadmin/dashboard" element={<LocationDashboard />} />
    <Route path="/locationadmin/manage" element={<ManageHomes />} />
    <Route path="/locationadmin/details" element={<HolidayHomesDetails />} />
    <Route path="/locationadmin/feedback" element={<FeedBack />} />
    <Route path="/locationadmin/reservations" element={<Reservations />} />
    <Route path="/locationadmin/report" element={<Report />} />
    <Route
      path="/locationadmin/holidayhomes/createholidayhome"
      element={<CreateHolidayHome />}
    />
    <Route
      path="/locationadmin/holidayhomes/editholidayhome"
      element={<HolidayHomeEdit />}
    />
  </Routes>
);

export default LocationAdminRouter;
