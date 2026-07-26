import { useCallback, useMemo, useState } from "react";
import api from "../api/axios";
import useHandleApiError from "./useHandleApiError";
import useNotification from "../context/notification/useNotification";

const useDelete = ({ title = "", url = null, refetch = () => null }) => {
  const { handleApiError } = useHandleApiError();
  const { notify } = useNotification();
  const [loading, setLoading] = useState(false);

  const deleteData = useCallback(
    async (id) => {
      if (!url || !id) return;
      setLoading(true);

      try {
        const { data } = await api.delete(`/${url}/${id}`);

        refetch();
        notify({ type: "success", title, message: data.message });
      } catch (error) {
        handleApiError({ error, title });
      } finally {
        setLoading(false);
      }
    },
    [handleApiError, notify, title, url, refetch],
  );

  return useMemo(() => ({ deleteData, loading }), [deleteData, loading]);
};

export default useDelete;
