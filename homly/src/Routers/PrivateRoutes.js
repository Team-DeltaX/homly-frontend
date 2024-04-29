import { Outlet, Navigate } from "react-router-dom";
import NotFountPage from "../Pages/NotFountPage";
const PrivateRoutes = ({ allowedRoles }) => {
  return localStorage.getItem("role") === allowedRoles ? (
    <Outlet />
  ) : localStorage.getItem("isLogged")==="true"? (
    <NotFountPage />
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoutes;
