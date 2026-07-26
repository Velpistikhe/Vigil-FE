import { Button, Flex, Layout, Typography } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const MobileHeader = ({ setOpen }) => {
  return (
    <Layout.Header
      style={{
        background: "#ffffff",
        paddingInline: 16,
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <Flex
        justify="space-between"
        align="center"
        style={{
          height: "100%",
        }}
      >
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setOpen(true)}
        />

        <Typography.Title
          level={5}
          style={{
            margin: 0,
          }}
        >
          Dashboard
        </Typography.Title>

        <div
          style={{
            width: 32,
          }}
        />
      </Flex>
    </Layout.Header>
  );
};

export default MobileHeader;
