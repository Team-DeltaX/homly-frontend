import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

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
const LocationReport = lazy(() => import("../Pages/locationAdmin/LocationReport"));
const ManageHomes = lazy(() => import("../Pages/locationAdmin/ManageHomes"));
const HolidayHomeEdit = lazy(() =>
  import("../Pages/locationAdmin/HolidayHomeEdit")
);

const LocationAdminRouter = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes allowedRoles={"LocationAdmin"} />}>
        <Route path="/dashboard" element={<LocationDashboard />} />
        <Route path="/manage" element={<ManageHomes />} />
        <Route path="/details" element={<HolidayHomesDetails />} />
        <Route path="/feedback" element={<FeedBack />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/report" element={<LocationReport />} />
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
      </Route>
    </Routes>
  );
};

export default LocationAdminRouter;
