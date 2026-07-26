import { Button, Divider, Form, Input, Typography } from "antd";

import {
  LockOutlined,
  MailOutlined,
  UserOutlined,
  LoginOutlined,
} from "@ant-design/icons";

import { Link, useNavigate } from "react-router";
import usePost from "../../../../hooks/usePost";

const RegisterForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { post, loading } = usePost({
    title: "Registrasi",
    url: "auth/register",
    redirect: () => navigate("/login"),
  });

  const onFinish = (values) => {
    post(values);
  };

  return (
    <>
      <Form
        autoComplete="off"
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          label="Nama Lengkap"
          name="name"
          rules={[
            {
              required: true,
              message: "Nama lengkap belum diisi.",
            },
          ]}
        >
          <Input
            size="large"
            prefix={<UserOutlined />}
            placeholder="Nama Lengkap"
            style={{
              height: 50,
              borderRadius: 12,
            }}
          />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Email belum diisi.",
            },
            {
              type: "email",
              message: "Format email salah.",
            },
          ]}
        >
          <Input
            size="large"
            prefix={<MailOutlined />}
            placeholder="Email"
            style={{
              height: 50,
              borderRadius: 12,
            }}
          />
        </Form.Item>

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
            placeholder="Username"
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
            {
              min: 8,
              message: "Minimal 8 karakter.",
            },
          ]}
        >
          <Input.Password
            size="large"
            prefix={<LockOutlined />}
            placeholder="Password"
            style={{
              height: 50,
              borderRadius: 12,
            }}
          />
        </Form.Item>

        <Form.Item
          label="Konfirmasi Password"
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Konfirmasi password belum diisi.",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error("Password tidak sama."));
              },
            }),
          ]}
        >
          <Input.Password
            size="large"
            prefix={<LockOutlined />}
            placeholder="Konfirmasi Password"
            style={{
              height: 50,
              borderRadius: 12,
            }}
          />
        </Form.Item>

        <Button
          disabled={loading}
          loading={loading}
          type="primary"
          htmlType="submit"
          block
          size="large"
          icon={<LoginOutlined />}
          iconPlacement="end"
          style={{
            height: 52,
            borderRadius: 12,
            background: "#14b8a6",
            border: 0,
            color: "#fff",
            fontWeight: 600,
            fontSize: 16,
          }}
        >
          Daftar
        </Button>
      </Form>

      <Divider />

      <div
        style={{
          textAlign: "center",
        }}
      >
        <Typography.Text type="secondary">
          Sudah mempunyai akun?
        </Typography.Text>

        <br />

        <Link
          to="/login"
          style={{
            color: "#14b8a6",
            fontWeight: 600,
          }}
        >
          Masuk sekarang
        </Link>
      </div>
    </>
  );
};

export default RegisterForm;
