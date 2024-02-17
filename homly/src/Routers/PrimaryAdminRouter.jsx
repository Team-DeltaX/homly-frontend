import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const PrimaryDashboard = lazy(() =>
  import("../Pages/PrimaryAdmin/PrimaryDashboard")
);
const PrimaryReservations = lazy(() =>
  import("../Pages/PrimaryAdmin/PrimaryReservations")
);
const PrimaryHolidayHomes = lazy(() =>
  import("../Pages/PrimaryAdmin/PrimaryHolidayHomes")
);
const PrimaryReport = lazy(() => import("../Pages/PrimaryAdmin/PrimaryReport"));
const PrimaryManageBlacklistedUsers = lazy(() =>
  import("../Pages/PrimaryAdmin/PrimaryManageBlacklistedUsers")
);
const PrimaryBlacklistHistory = lazy(() =>
  import("../Pages/PrimaryAdmin/PrimaryBlacklistHistory")
);
const PrimaryComplaints = lazy(() =>
  import("../Pages/PrimaryAdmin/PrimaryComplaints")
);
const PrimaryAddAdmin = lazy(() =>
  import("../Pages/PrimaryAdmin/PrimaryAddAdmin")
);
const PrimaryViewAdmin = lazy(() =>
  import("../Pages/PrimaryAdmin/PrimaryViewAdmins")
);
const PrimaryAuthorizations = lazy(() =>
  import("../Pages/PrimaryAdmin/PrimaryAuthorizations")
);

const PrimaryAdminRouter = () => (
  <Routes>
    <Route
      path="/dashboard"
      element={<PrimaryDashboard />}
    ></Route>
    <Route
      path="/reservations"
      element={<PrimaryReservations />}
    ></Route>
    <Route
      path="/holidayhomes"
      element={<PrimaryHolidayHomes />}
    ></Route>
    <Route path="/report" element={<PrimaryReport />}></Route>
    <Route
      path="/blacklistedusers/manage"
      element={<PrimaryManageBlacklistedUsers />}
    ></Route>
    <Route
      path="/blacklistedusers/history"
      element={<PrimaryBlacklistHistory />}
    ></Route>
    <Route
      path="/blacklistedusers/complaints"
      element={<PrimaryComplaints />}
    ></Route>
    <Route path="/addadmin" element={<PrimaryAddAdmin />}></Route>
    <Route
      path="/viewadmin"
      element={<PrimaryViewAdmin />}
    ></Route>
    <Route
      path="/authorizations"
      element={<PrimaryAuthorizations />}
    ></Route>
  </Routes>
);

export default PrimaryAdminRouter;
