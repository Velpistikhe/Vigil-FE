import { useCallback, useEffect, useState } from "react";
import useHandleApiError from "./useHandleApiError";
import api from "../api/axios";

const useFetch = ({
  title = "",
  url = null,
  id = null,
  initialParams = {},
} = {}) => {
  const { handleApiError } = useHandleApiError();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [params, setParams] = useState(initialParams);

  const fetchData = useCallback(
    async (signal = undefined) => {
      if (!url) return;

      try {
        setLoading(true);

        const { data } = await api.get(`/${url}${id ? `/${id}` : ""}`, {
          params,
          signal,
        });

        setData(data);
      } catch (error) {
        if (error.name === "CanceledError") return;

        handleApiError({ error, title });
      } finally {
        setLoading(false);
      }
    },
    [title, url, id, params, handleApiError],
  );

  useEffect(() => {
    const controller = new AbortController();

    fetchData(controller.signal);

    return () => controller.abort();
  }, [fetchData]);

  return {
    data,
    loading,
    refetch: fetchData,
    setParams,
  };
};

export default useFetch;
