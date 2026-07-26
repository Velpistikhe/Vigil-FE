import { useCallback } from "react";
import usePost from "./usePost";
import useHandleApiError from "./useHandleApiError";
import api from "../api/axios";

const useAuth = ({
  setUser = () => null,
  setLoadingUser = () => null,
} = {}) => {
  const { handleApiError } = useHandleApiError();

  const fetchProfile = useCallback(
    async (signal = undefined) => {
      try {
        setLoadingUser(true);

        const { data } = await api.get("auth/profile", { signal });

        setUser(data.user);
      } catch (error) {
        setUser(null);

        handleApiError({
          title: "Authentication",
          error,
        });
      } finally {
        setLoadingUser(false);
      }
    },
    [setUser, setLoadingUser, handleApiError],
  );

  const { post: postLogin, loading: loadingLogin } = usePost({
    title: "Login",
    url: "auth/login",
    refetch: fetchProfile,
  });

  const { post: postLogout, loading: loadingLogout } = usePost({
    title: "Logout",
    url: "auth/logout",
    refetch: fetchProfile,
  });

  const login = ({ data = null } = {}) => {
    postLogin(data);
  };

  const logout = () => {
    postLogout();
  };

  return { loadingLogin, loadingLogout, fetchProfile, login, logout };
};

export default useAuth;
