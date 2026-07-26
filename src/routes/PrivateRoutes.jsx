import { Navigate, Outlet } from "react-router";
import { useContext } from "react";
import AuthContext from "../context/auth/AuthContext.jsx";

const PrivateRoutes = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/login" />;

  return <Outlet />;
};

export default PrivateRoutes;
