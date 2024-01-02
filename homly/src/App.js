import logo from './logo.svg';
import './App.css';
import NavigationBar from '../src/Components/NavigationBar';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Home = lazy(() => import('../src/Pages/Home'));
const HolidayHome = lazy(() => import('../src/Pages/HolidayHome'));
const Profile = lazy(() => import('../src/Pages/Profile'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/holidayhome" element={<HolidayHome />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
