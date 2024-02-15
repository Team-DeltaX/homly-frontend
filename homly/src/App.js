import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import UserRouter from "./Routers/UserRouter";
import LocationAdminRouter from "./Routers/LocationAdminRouter";
import PrimaryAdminRouter from "./Routers/PrimaryAdminRouter";

import AuthContextProvider from "./Contexts/AuthContext";

import "../src/Styles/styles.css";
import Loader from "./Components/Loader/Loader";



const App = () => (
  <AuthContextProvider>
    <Router>
      <Suspense fallback={<Loader/>}>
        <UserRouter />
        <LocationAdminRouter />
        <PrimaryAdminRouter />
      </Suspense>
    </Router>
  </AuthContextProvider>
);

export default App;
