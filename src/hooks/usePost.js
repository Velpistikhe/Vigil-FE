import { useCallback, useMemo, useState } from "react";
import useHandleApiError from "./useHandleApiError";
import api from "../api/axios";
import useNotification from "../context/notification/useNotification";

const usePost = ({
  title = "",
  url = "",
  refetch = () => null,
  redirect = () => null,
  reset = () => null,
} = {}) => {
  const [loading, setLoading] = useState(false);
  const { handleApiError } = useHandleApiError();
  const { notify } = useNotification();

  const post = useCallback(
    async (formdata) => {
      if (!url) {
        return console.warn("usePost: URL is missing");
      }

      setLoading(true);
      try {
        const { data } = await api.post(`/${url}`, formdata);

        notify({ type: "success", title, message: data?.message });
        refetch();
        redirect();
        reset();
      } catch (error) {
        handleApiError({ error, title });
      } finally {
        setLoading(false);
      }
    },
    [handleApiError, notify, title, url, reset, redirect, refetch],
  );

  return useMemo(() => ({ loading, post }), [loading, post]);
};

export default usePost;
