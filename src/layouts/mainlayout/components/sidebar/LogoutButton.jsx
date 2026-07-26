import { Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

const LogoutButton = () => {
  return (
    <div
      style={{
        padding: 16,
        borderTop: "1px solid #f0f0f0",
      }}
    >
      <Button danger block icon={<LogoutOutlined />}>
        Logout
      </Button>
    </div>
  );
};

export default LogoutButton;
