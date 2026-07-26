import { notification } from "antd";
import { useCallback, useEffect } from "react";
import NotificationContext from "./NotificationContext";
import { setNotifyFunction } from "../../services/notificationService";

const NotificationProvider = ({ children }) => {
  const [api, contextHolder] = notification.useNotification();

  const notify = useCallback(
    ({ type = "info", title = "", message = "" }) => {
      const types = ["success", "error", "info", "warning"];
      if (!types.includes(type)) {
        console.warn(`Unknown notification type: "${type}"`);
        return;
      }

      api[type]({
        title,
        description: message,
        placement: "topRight",
        duration: 2,
      });
    },
    [api],
  );

  useEffect(() => {
    setNotifyFunction(notify);
  }, [notify]);

  return (
    <NotificationContext.Provider value={{ notify }}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
