import { Card, Flex, Typography } from "antd";
import AuthForm from "./components/Form";

const { Title, Text } = Typography;

const Login = () => {
  return (
    <Flex
      justify="center"
      align="center"
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: 24,
      }}
    >
      <Card
        variant={"borderless"}
        style={{
          width: 420,
          borderRadius: 24,
          boxShadow: "0 20px 60px rgba(15,23,42,.12)",
        }}
        styles={{
          body: {
            padding: 40,
          },
        }}
      >
        <Flex vertical align="center" gap={20}>
          <Flex
            justify="center"
            align="center"
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "#14b8a6",
              color: "#fff",
              fontSize: 28,
              fontWeight: 700,
              boxShadow: "0 10px 25px rgba(20,184,166,.35)",
            }}
          >
            +
          </Flex>

          <Flex vertical align="center" gap={4}>
            <Title level={2} style={{ margin: 0 }}>
              Sigil
            </Title>

            <Text type="secondary" style={{ textAlign: "center" }}>
              Masuk untuk melanjutkan ke sistem.
            </Text>
          </Flex>
        </Flex>

        <AuthForm />
      </Card>
    </Flex>
  );
};

export default Login;
