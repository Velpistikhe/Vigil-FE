import { Flex } from "antd";
import RegisterCard from "./components/RegisterCard";

const Register = () => {
  return (
    <Flex
      justify="center"
      align="center"
      style={{
        minHeight: "100vh",
        padding: 24,
        background: "#f8fafc",
      }}
    >
      <RegisterCard />
    </Flex>
  );
};

export default Register;
