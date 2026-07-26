import { Typography } from "antd";

const Logo = () => {
  return (
    <div
      style={{
        padding: 24,
        borderBottom: "1px solid #f0f0f0",
      }}
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
