import { Card, Typography } from "antd";
import RegisterForm from "./RegisterForm";

const { Title, Text } = Typography;

const RegisterCard = () => {
  return (
    <Card
      style={{
        width: "100%",
        maxWidth: 480,
        borderRadius: 20,
        border: "none",
        boxShadow: "0 15px 35px rgba(15,23,42,.08)",
      }}
      styles={{
        body: {
          padding: 40,
        },
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: 32,
        }}
      >
        <div
          style={{
            width: 70,
            height: 70,
            margin: "0 auto 20px",
            borderRadius: 18,
            background: "#14b8a6",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: 28,
            fontWeight: 700,
            boxShadow: "0 12px 25px rgba(20,184,166,.35)",
          }}
        >
          S
        </div>

        <Title
          level={2}
          style={{
            marginBottom: 8,
          }}
        >
          Daftar Akun
        </Title>

        <Text type="secondary">Buat akun baru untuk menggunakan Sigil.</Text>
      </div>

      <RegisterForm />
    </Card>
  );
};

export default RegisterCard;
