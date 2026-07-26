import { useCallback } from "react";
import useNotification from "../context/notification/useNotification";

const useHandleApiError = () => {
  const { notify } = useNotification();

  const handleApiError = useCallback(
    ({ error, title = "" }) => {
      if (error.name === "CanceledError" || error.code === "ERR_CANCELED") {
        return;
      }

      if (error.silent) {
        return;
      }

      notify({
        type: "error",
        title,
        message:
          error?.response?.data?.message ||
          error?.message ||
          "Something went wrong.",
      });
    },
    [notify],
  );

  return {
    handleApiError,
  };
};

export default useHandleApiError;
