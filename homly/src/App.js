import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserRouter from "./Routers/UserRouter";
import AdminRouter from "./Routers/AdminRouter";
import LocationAdminRouter from "./Routers/LocationAdminRouter";
import PrimaryAdminRouter from "./Routers/PrimaryAdminRouter";

import AuthContextProvider from "./Contexts/AuthContext";

import "../src/Styles/styles.css";
import { CustomTabProvider } from "./Contexts/primryadmin/CustomTabContext";


const App = () => (
  <AuthContextProvider>
    <CustomTabProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>} >
          <Routes>

            <Route path="*" element={<UserRouter />} />
            <Route path="/admin/*" element={<AdminRouter />} />
            <Route path="/locationadmin/*" element={<LocationAdminRouter />} />
            <Route path="/primaryadmin/*" element={<PrimaryAdminRouter />} />
          </Routes>


        </Suspense>
      </Router>
    </CustomTabProvider>
  </AuthContextProvider>
);

export default App;
