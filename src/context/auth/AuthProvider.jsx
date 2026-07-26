import AuthContext from "./AuthContext";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const { fetchProfile, login, logout, loadingLogin, loadingLogout } = useAuth({
    setUser,
    setLoadingUser,
  });

  useEffect(() => {
    const controller = new AbortController();

    fetchProfile(controller.signal);

    return () => controller.abort();
  }, [fetchProfile]);

  return (
    <AuthContext.Provider
      value={{ user, loadingUser, login, logout, loadingLogin, loadingLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
