import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./Components/Loader/Loader";


import "../src/Styles/styles.css";

const Home = lazy(() => import("../src/Pages/Home"));
const HolidayHome = lazy(() => import("../src/Pages/HolidayHome"));
const Profile = lazy(() => import("../src/Pages/Profile"));
const ContactUs = lazy(() => import("../src/Pages/ContactUs"));
const PaymentGateway = lazy(() =>import("../src/services/paymentGateway/PaymentGateway"));
const UserRegistration = lazy(() =>import("../src/Pages/UserRegistration/UserRegistration"));
const UserLogin = lazy(() => import("../src/Pages/UserLogin/UserLogin"));
const PersonalDetails = lazy(() =>import("../src/Pages/PersonalDetails/PersonalDetails"));
const UserSecurity = lazy(() =>import("../src/Pages/UserSecurity/UserSecurity"));
const PaymentDetails = lazy(() =>import("../src/Pages/PaymentDetails/PaymentDetails"));
const MyReservation = lazy(() =>import("../src/Pages/MyReservation/MyReservation"));

// json-server --watch data/db.json --port 8000

const App = () => (
  <Router>
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HolidayHomes" element={<HolidayHome />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/paymentGateway" element={<PaymentGateway />} />
        <Route path="/Registration" element={<UserRegistration />} />
        <Route path="/Login" element={<UserLogin />} />
        <Route path="/MyProfile" element={<PersonalDetails />} />
        <Route path="/MyProfile/PersonalDetails" element={<PersonalDetails />}/>
        <Route path="/MyProfile/Security" element={<UserSecurity />} />
        <Route path="/MyProfile/PaymentDetails" element={<PaymentDetails />} />
        <Route path="/MyProfile/MyReservation" element={<MyReservation />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
