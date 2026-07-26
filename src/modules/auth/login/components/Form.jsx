import { Button, Checkbox, Flex, Form, Input } from "antd";
import { LockOutlined, LoginOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router";

import { useContext } from "react";
import AuthContext from "../../../../context/auth/AuthContext";

const AuthForm = () => {
  const { login, loadingLogin } = useContext(AuthContext);

  const [form] = Form.useForm();

  const onFinish = (data) => {
    login({ data });

    form.resetFields();
  };

  return (
    <Form
      autoComplete="off"
      form={form}
      layout="vertical"
      style={{
        marginTop: 36,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Username belum diisi.",
          },
        ]}
      >
        <Input
          size="large"
          prefix={<UserOutlined />}
          placeholder="Masukkan username"
          style={{
            height: 50,
            borderRadius: 12,
          }}
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Password belum diisi.",
          },
        ]}
      >
        <Input.Password
          size="large"
          prefix={<LockOutlined />}
          placeholder="Masukkan password"
          style={{
            height: 50,
            borderRadius: 12,
          }}
        />
      </Form.Item>

      <Flex
        justify="space-between"
        align="center"
        style={{
          marginBottom: 24,
        }}
      >
        <Checkbox>Remember me</Checkbox>

        <Button
          type="link"
          style={{
            padding: 0,
            color: "#14b8a6",
          }}
        >
          Lupa Password?
        </Button>
      </Flex>

      <Button
        loading={loadingLogin}
        disabled={loadingLogin}
        htmlType="submit"
        type="primary"
        icon={<LoginOutlined />}
        iconPlacement="end"
        block
        size="large"
        style={{
          height: 52,
          borderRadius: 12,
          background: "#0f172a",
          border: 0,
          color: "#fff",
          fontWeight: 600,
          fontSize: 16,
        }}
      >
        Masuk
      </Button>

      <Flex
        justify="center"
        style={{
          marginTop: 20,
        }}
      >
        <span style={{ color: "#64748b" }}>Belum memiliki akun?</span>

        <Link
          to="/register"
          style={{
            marginLeft: 6,
            color: "#14b8a6",
            fontWeight: 600,
          }}
        >
          Daftar sekarang
        </Link>
      </Flex>
    </Form>
  );
};

export default AuthForm;
