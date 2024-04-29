import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLoginPage from "../Pages/AdminLoginPage";

const AdminRouter = () => (
  <Routes>
    <Route path="/login" element={<AdminLoginPage />} />
  </Routes>
);

export default AdminRouter;
