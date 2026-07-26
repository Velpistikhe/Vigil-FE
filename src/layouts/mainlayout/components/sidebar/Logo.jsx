import { Typography } from "antd";
import { useNavigate } from "react-router";

const Logo = () => {
  const navigate = useNavigate();
  const onClick = () => navigate("/");

  return (
    <div
      style={{
        padding: 24,
        cursor: "pointer",
        borderBottom: "1px solid #f0f0f0",
      }}
      onClick={onClick}
    >
      <Typography.Title
        level={3}
        style={{
          margin: 0,
          color: "#16a34a",
        }}
      >
        Vigil
      </Typography.Title>

      <Typography.Text
        type="secondary"
        style={{
          fontSize: 12,
        }}
      >
        Medical Calculator
      </Typography.Text>
    </div>
  );
};

export default Logo;
