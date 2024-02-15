import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserRouter from "./Routers/UserRouter";
import LocationAdminRouter from "./Routers/LocationAdminRouter";
import PrimaryAdminRouter from "./Routers/PrimaryAdminRouter";

import AuthContextProvider from "./Contexts/AuthContext";

import "../src/Styles/styles.css";



const App = () => (
  <AuthContextProvider>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <UserRouter />
        <LocationAdminRouter />
        <PrimaryAdminRouter />
      </Suspense>
    </Router>
  </AuthContextProvider>
);

export default App;
