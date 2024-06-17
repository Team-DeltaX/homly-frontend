import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import ViewHolidayHome from "../Pages/PrimaryAdmin/ViewHolidayHome";

const PrimaryDashboard = lazy(() =>
  import("../Pages/PrimaryAdmin/PrimaryDashboard")
);
const PrimaryReservations = lazy(() =>
  import("../Pages/PrimaryAdmin/PrimaryReservations")
);
const PrimaryHolidayHomes = lazy(() =>
  import("../Pages/PrimaryAdmin/PrimaryHolidayHomes")
);
const PrimaryRefund = lazy(() => import("../Pages/PrimaryAdmin/PrimaryAdminRefund"));
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

const PrimaryAdminRouter = () => {
  return (
    <Routes>
     
      <Route element={<PrivateRoutes allowedRoles={"PrimaryAdmin"} />}>
        <Route path="/dashboard" element={<PrimaryDashboard />} />
        <Route path="/reservations" element={<PrimaryReservations />} />
        <Route path="/holidayhomes" element={<PrimaryHolidayHomes />} />
        <Route path="/refund" element={<PrimaryRefund />} />
        <Route path="/report" element={<PrimaryReport />} />
        <Route
          path="/blacklistedusers/manage"
          element={<PrimaryManageBlacklistedUsers />}
        />
        <Route
          path="/blacklistedusers/history"
          element={<PrimaryBlacklistHistory />}
        />
        <Route
          path="/blacklistedusers/complaints"
          element={<PrimaryComplaints />}
        />
        <Route path="/addadmin" element={<PrimaryAddAdmin />} />
        <Route path="/viewadmin" element={<PrimaryViewAdmin />} />
        <Route path="/authorizations" element={<PrimaryAuthorizations />} />

        <Route
          path="/holidayhomes/viewholidayhome/:homeId"
          element={<ViewHolidayHome/>}
        />
      </Route>
    </Routes>
  );
};

export default PrimaryAdminRouter;
