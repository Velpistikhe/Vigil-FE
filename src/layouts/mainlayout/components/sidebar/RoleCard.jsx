import { Avatar, Card, Flex, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";

const RoleCard = () => {
  return (
    <Card
      variant={"borderless"}
      style={{
        margin: 16,
        background: "#f8fafc",
      }}
    >
      <Flex gap={12} align="center">
        <Avatar size={48} icon={<UserOutlined />} />

        <Flex vertical>
          <Typography.Text strong>Administrator</Typography.Text>

          <Typography.Text type="secondary">admin@akura.app</Typography.Text>
        </Flex>
      </Flex>
    </Card>
  );
};

export default RoleCard;
