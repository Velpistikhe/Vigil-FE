import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import AuthContext from "../context/auth/AuthContext";

const AuthRoutes = () => {
  const { user } = useContext(AuthContext);

  if (user) return <Navigate to="/overview" />;

  return <Outlet />;
};

export default AuthRoutes;
