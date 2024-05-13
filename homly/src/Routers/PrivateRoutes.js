import { Outlet, Navigate } from "react-router-dom";
import NotFountPage from "../Pages/NotFountPage";
const PrivateRoutes = ({ allowedRoles }) => {
  return sessionStorage.getItem("role") === allowedRoles ? (
    <Outlet />
  ) : sessionStorage.getItem("isLogged")==="true"? (
    <NotFountPage />
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoutes;
