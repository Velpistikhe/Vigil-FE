import { Button, Flex, Grid, Space, Typography } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import menuList from "./menuList";
import useLandingLayout from "./useLandingLayout";

const HeaderContent = ({ setOpen = () => null }) => {
  const screens = Grid.useBreakpoint();
  const { handleLoginClick } = useLandingLayout();

  return (
    <Flex
      justify="space-between"
      align="center"
      style={{
        height: "100%",
        maxWidth: 1280,
        margin: "0 auto",
      }}
    >
      <Space size={12}>
        <Flex
          justify="center"
          align="center"
          style={{
            width: 42,
            height: 42,
            borderRadius: 14,
            background: "#14b8a6",
            color: "#fff",
            fontWeight: 700,
            fontSize: 20,
          }}
        >
          S
        </Flex>

        <Typography.Title
          level={3}
          style={{
            margin: 0,
            color: "#0f172a",
            fontWeight: 700,
          }}
        >
          Vigil - Anesthesia
        </Typography.Title>
      </Space>

      {screens.lg && (
        <Space size={40}>
          {menuList.map((item) => (
            <Button
              key={item.key}
              type="text"
              style={{
                fontWeight: 500,
                color: "#334155",
              }}
            >
              {item.label}
            </Button>
          ))}
        </Space>
      )}

      {screens.lg ? (
        <Button
          type="primary"
          size="large"
          style={{
            height: 46,
            borderRadius: 999,
            paddingInline: 28,
            background: "#14b8a6",
            border: 0,
            fontWeight: 600,
          }}
          onClick={handleLoginClick}
        >
          Login
        </Button>
      ) : (
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setOpen(true)}
        />
      )}
    </Flex>
  );
};

export default HeaderContent;
