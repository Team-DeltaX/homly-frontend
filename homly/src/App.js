import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Holiday Homes" element={<HolidayHome />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Contact Us" element={<ContactUs />} />
        <Route path="/paymentGateway" element={<PaymentGateway />} />
        <Route path="/registration" element={<UserRegistration />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/My Profile" element={<PersonalDetails />} />
        <Route
          path="/My Profile/Personal Details"
          element={<PersonalDetails />}
        />
        <Route path="/My Profile/Security" element={<UserSecurity />} />
        <Route path="/My Profile/Payment Details" element={<PaymentDetails />} />
        <Route path="/My Profile/My Reservation" element={<MyReservation />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
