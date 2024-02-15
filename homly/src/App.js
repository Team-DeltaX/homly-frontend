import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserRouter from "./Routers/UserRouter";

import AuthContextProvider from "./Contexts/AuthContext";

import "../src/Styles/styles.css";


import ManageHomes from "../src/Pages/locationAdmin/ManageHomes";
import HolidayHomeEdit from "./Pages/locationAdmin/HolidayHomeEdit";

// user pages import start

// const Home = lazy(() => import("../src/Pages/Home"));
// const HolidayHome = lazy(() => import("../src/Pages/HolidayHome"));
// const Profile = lazy(() => import("../src/Pages/Profile"));
// const ContactUs = lazy(() => import("../src/Pages/ContactUs"));
// const PaymentGateway = lazy(() =>
//   import("../src/services/paymentGateway/PaymentGateway")
// );
// const UserRegistration = lazy(() =>
//   import("../src/Pages/User/UserRegistration")
// );
// const UserLogin = lazy(() => import("../src/Pages/User/UserLogin"));
// const PersonalDetails = lazy(() =>
//   import("../src/Pages/User/PersonalDetails")
// );
// const UserSecurity = lazy(() =>
//   import("../src/Pages/User/UserSecurity")
// );
// const PaymentDetails = lazy(() =>
//   import("../src/Pages/User/PaymentDetails")
// );
// const MyReservation = lazy(() =>
//   import("../src/Pages/User/MyReservation")
// );
// import PaymentGateway from "../src/services/paymentGateway/PaymentGateway";

import Home from "../src/Pages/User/Home";
import HolidayHome from "../src/Pages/User/HolidayHome";
import Profile from "../src/Pages/User/Profile";
// import ContactUs from "../src/Pages/User/ContactUs";
import UserRegistration from "../src/Pages/User/UserRegistration";
import UserLogin from "../src/Pages/User/UserLogin";
// import PersonalDetails from "../src/Pages/User/PersonalDetails";
// import UserSecurity from "../src/Pages/User/UserSecurity";
// import PaymentDetails from "../src/Pages/User/PaymentDetails";
// import MyReservation from "../src/Pages/User/MyReservation";
import HolidayHomeDetails from "../src/Pages/User/HolidayHomeDetails";
import EmailVerified from "./Pages/User/EmailVerified";

const PrimaryDashboard = lazy(() =>
  import("./Pages/PrimaryAdmin/PrimaryDashboard")
);
const PrimaryReservations = lazy(() =>
  import("./Pages/PrimaryAdmin/PrimaryReservations")
);
const PrimaryHolidayHomes = lazy(() =>
  import("./Pages/PrimaryAdmin/PrimaryHolidayHomes")
);
const PrimaryReport = lazy(() => import("./Pages/PrimaryAdmin/PrimaryReport"));
const PrimaryManageBlacklistedUsers = lazy(() =>
  import("./Pages/PrimaryAdmin/PrimaryManageBlacklistedUsers")
);
const PrimaryBlacklistHistory = lazy(() =>
  import("./Pages/PrimaryAdmin/PrimaryBlacklistHistory")
);
const PrimaryComplaints = lazy(() =>
  import("./Pages/PrimaryAdmin/PrimaryComplaints")
);
const PrimaryAddAdmin = lazy(() =>
  import("./Pages/PrimaryAdmin/PrimaryAddAdmin")
);
const PrimaryViewAdmin = lazy(() =>
  import("./Pages/PrimaryAdmin/PrimaryViewAdmins")
);
const PrimaryAuthorizations = lazy(() =>
  import("./Pages/PrimaryAdmin/PrimaryAuthorizations")
);

// user pages import end
// location admin import start

const LocationDashboard = lazy(() =>
  import("../src/Pages/locationAdmin/Dashboard")
);
const HolidayHomesDetails = lazy(() =>
  import("../src/Pages/locationAdmin/HolidayHomeDetails")
);

const CreateHolidayHome = lazy(() =>
  import("../src/Pages/locationAdmin/CreateHolidayHome")
);
const FeedBack = lazy(() => import("../src/Pages/locationAdmin/Feedback"));
const Reservations = lazy(() =>
  import("../src/Pages/locationAdmin/Reservations")
);

const Report = lazy(() => import("../src/Pages/locationAdmin/Report"));


const App = () => (
  <AuthContextProvider>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <UserRouter />
      </Suspense>
    </Router>
  </AuthContextProvider>
);

export default App;
