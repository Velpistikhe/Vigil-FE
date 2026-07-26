import { Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useContext } from "react";
import AuthContext from "../../../../context/auth/AuthContext";

const LogoutButton = () => {
  const { logout, loadingLogout } = useContext(AuthContext);

  return (
    <div
      style={{
        padding: 16,
        borderTop: "1px solid #f0f0f0",
      }}
    >
      <Button
        danger
        block
        icon={<LogoutOutlined />}
        onClick={logout}
        loading={loadingLogout}
        disabled={loadingLogout}
      >
        Logout
      </Button>
    </div>
  );
};

export default LogoutButton;
