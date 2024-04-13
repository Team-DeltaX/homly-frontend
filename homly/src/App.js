import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserRouter from "./Routers/UserRouter";
import AdminRouter from "./Routers/AdminRouter";
import LocationAdminRouter from "./Routers/LocationAdminRouter";
import PrimaryAdminRouter from "./Routers/PrimaryAdminRouter";

import AuthContextProvider from "./Contexts/AuthContext";
import SocketioContextProvider from "./Contexts/SocketioContext";

import "../src/Styles/styles.css";
import Loader from "./Components/Loader/Loader";
import { CustomTabProvider } from "./Contexts/primryadmin/CustomTabContext";
import { SearchProvider } from "./Contexts/primryadmin/Searchcontext";

const App = () => (
  <AuthContextProvider>
    <SocketioContextProvider>
      <CustomTabProvider>
        <SearchProvider>
          <Router>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="*" element={<UserRouter />} />
                <Route path="/admin/*" element={<AdminRouter />} />
                <Route
                  path="/locationadmin/*"
                  element={<LocationAdminRouter />}
                />
                <Route
                  path="/primaryadmin/*"
                  element={<PrimaryAdminRouter />}
                />
              </Routes>
            </Suspense>
          </Router>
        </SearchProvider>
      </CustomTabProvider>
    </SocketioContextProvider>
  </AuthContextProvider>
);

export default App;
