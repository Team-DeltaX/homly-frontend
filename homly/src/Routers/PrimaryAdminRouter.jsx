import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const PrimaryDashboard = lazy(() =>
  import("../Pages/PrimaryAdmin/PrimaryDashboard" )
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
      path="/primaryadmin/dashboard"
      element={<PrimaryDashboard />}
    ></Route>
    <Route
      path="/primaryadmin/reservations"
      element={<PrimaryReservations />}
    ></Route>
    <Route
      path="/primaryadmin/holidayhomes"
      element={<PrimaryHolidayHomes />}
    ></Route>
    <Route path="/primaryadmin/report" element={<PrimaryReport />}></Route>
    <Route
      path="/primaryadmin/blacklistedusers/manage"
      element={<PrimaryManageBlacklistedUsers />}
    ></Route>
    <Route
      path="/primaryadmin/blacklistedusers/history"
      element={<PrimaryBlacklistHistory />}
    ></Route>
    <Route
      path="/primaryadmin/blacklistedusers/complaints"
      element={<PrimaryComplaints />}
    ></Route>
    <Route path="/primaryadmin/addadmin" element={<PrimaryAddAdmin />}></Route>
    <Route
      path="/primaryadmin/viewadmin"
      element={<PrimaryViewAdmin />}
    ></Route>
    <Route
      path="/primaryadmin/authorizations"
      element={<PrimaryAuthorizations />}
    ></Route>
  </Routes>
);

export default PrimaryAdminRouter;
