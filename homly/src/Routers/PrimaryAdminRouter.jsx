import React, { lazy, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

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
const NotFoundPage = lazy(() => import("../Pages/NotFountPage"));

const PrimaryAdminRouter = () => {
  const { role, isLogged } = useContext(AuthContext);
  const validateRoute = () => {
    return (
      (isLogged === "true" || localStorage.getItem("isLogged") === "true") &&
      (role === "PrimaryAdmin" || localStorage.getItem("role") === "PrimaryAdmin")
    );
  };
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={validateRoute() ? <PrimaryDashboard /> : <NotFoundPage />}
      ></Route>
      <Route
        path="/reservations"
        element={validateRoute() ? <PrimaryReservations /> : <NotFoundPage />}
      ></Route>
      <Route
        path="/holidayhomes"
        element={validateRoute() ? <PrimaryHolidayHomes /> : <NotFoundPage />}
      ></Route>
      <Route
        path="/report"
        element={validateRoute() ? <PrimaryReport /> : <NotFoundPage />}
      ></Route>
      <Route
        path="/blacklistedusers/manage"
        element={
          validateRoute() ? <PrimaryManageBlacklistedUsers /> : <NotFoundPage />
        }
      ></Route>
      <Route
        path="/blacklistedusers/history"
        element={
          validateRoute() ? <PrimaryBlacklistHistory /> : <NotFoundPage />
        }
      ></Route>
      <Route
        path="/blacklistedusers/complaints"
        element={validateRoute() ? <PrimaryComplaints /> : <NotFoundPage />}
      ></Route>
      <Route
        path="/addadmin"
        element={validateRoute() ? <PrimaryAddAdmin /> : <NotFoundPage />}
      ></Route>
      <Route
        path="/viewadmin"
        element={validateRoute() ? <PrimaryViewAdmin /> : <NotFoundPage />}
      ></Route>
      <Route
        path="/authorizations"
        element={validateRoute() ? <PrimaryAuthorizations /> : <NotFoundPage />}
      ></Route>
    </Routes>
  );
};

export default PrimaryAdminRouter;
