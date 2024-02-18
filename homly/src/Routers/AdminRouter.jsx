import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLoginPage from "../Pages/AdminLoginPage";

const AdminRouter = () => (
  <Routes>
    <Route path="/login" element={<AdminLoginPage />} />
  </Routes>
);

export default AdminRouter;
