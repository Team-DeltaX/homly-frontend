import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/Styles/styles.css'

const Home = lazy(() => import('../src/Pages/Home'));
const HolidayHome = lazy(() => import('../src/Pages/HolidayHome'));
const Profile = lazy(() => import('../src/Pages/Profile'));
const ContactUs = lazy(()=> import('../src/Pages/ContactUs'))
const PaymentGateway = lazy(() => import('../src/services/paymentGateway/PaymentGateway'));
const UserRegistration = lazy(() => import('../src/Pages/UserRegistration'));


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
      </Routes>
    </Suspense>
  </Router>
);

export default App;
