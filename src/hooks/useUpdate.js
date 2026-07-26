import { useCallback, useMemo, useState } from "react";
import useHandleApiError from "./useHandleApiError";
import api from "../api/axios";
import useNotification from "../context/notification/useNotification";

const useUpdate = ({
  id = null,
  title = "",
  url = "",
  refetch = () => null,
  redirect = () => null,
  reset = () => null,
}) => {
  const [loading, setLoading] = useState(false);
  const { handleApiError } = useHandleApiError();
  const { notify } = useNotification();

  const update = useCallback(
    async (formdata) => {
      if (!url || !id) {
        return console.warn("useUpdate: URL/ID is missing");
      }

      setLoading(true);
      try {
        const { data } = await api.put(`/${url}/${id}`, formdata);

        notify({
          type: "success",
          title: `Update ${title}`,
          message: data?.message,
        });
        refetch();
        redirect();
      } catch (error) {
        handleApiError({ error, title: `Update ${title}` });
      } finally {
        setLoading(false);
        reset();
      }
    },
    [handleApiError, notify, id, title, url, reset, redirect, refetch],
  );

  return useMemo(() => ({ loading, update }), [loading, update]);
};

export default useUpdate;
