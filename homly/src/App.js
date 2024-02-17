import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserRouter from "./Routers/UserRouter";
import LocationAdminRouter from "./Routers/LocationAdminRouter";
import PrimaryAdminRouter from "./Routers/PrimaryAdminRouter";

import AuthContextProvider from "./Contexts/AuthContext";

import "../src/Styles/styles.css";



const App = () => (
  <AuthContextProvider>
    <Router>
      <Suspense fallback={<div>Loading...</div>} >
        <Routes>

        <Route path="*" element={<UserRouter />} />
        <Route path="/locationadmin/*" element={<LocationAdminRouter />} />
        <Route path="/primaryadmin/*" element={<PrimaryAdminRouter />} />
        </Routes>

        
      </Suspense>
    </Router>
  </AuthContextProvider>
);

export default App;
