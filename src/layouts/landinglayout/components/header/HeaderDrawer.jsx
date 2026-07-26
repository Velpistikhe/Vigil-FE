import { Button, Drawer, Space } from "antd";
import menuList from "./menuList";

const HeaderDrawer = ({ open = false, setOpen = () => null }) => {
  return (
    <Drawer
      placement="right"
      size={280}
      open={open}
      onClose={() => setOpen(false)}
    >
      <Space
        orientation="vertical"
        style={{
          width: "100%",
        }}
        size={12}
      >
        {menuList.map((item) => (
          <Button key={item.key} type="text" block size="large">
            {item.label}
          </Button>
        ))}

        <Button
          type="primary"
          size="large"
          block
          style={{
            marginTop: 12,
            background: "#14b8a6",
            border: 0,
          }}
        >
          Login
        </Button>
      </Space>
    </Drawer>
  );
};

export default HeaderDrawer;
