import { useContext } from "react";
import { Route, Routes } from "react-router";
import AuthContext from "../context/auth/AuthContext";
import AuthRoutes from "./AuthRoutes";
import PrivateRoutes from "./PrivateRoutes";
import AuthLayout from "../layouts/auth";
import LandingLayout from "../layouts/landinglayout";
import MainLayout from "../layouts/mainlayout";
import Loading from "../components/Loading";
import Home from "../modules/home";
import Login from "../modules/auth/login";
import Register from "../modules/auth/register";
import Dashboard from "../modules/dashboard";
import Kalkulator from "../modules/kalkulator";
import Drug from "../modules/settting/drugs";

const AppRouter = () => {
  const { loadingUser } = useContext(AuthContext);

  if (loadingUser) return <Loading />;

  return (
    <Routes>
      <Route element={<LandingLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route element={<AuthRoutes />}>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route element={<MainLayout />}>
          <Route path="/overview" element={<Dashboard />} />
          <Route path="/kalkulator" element={<Kalkulator />} />
          <Route path="/setting/drug/*" element={<Drug />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
