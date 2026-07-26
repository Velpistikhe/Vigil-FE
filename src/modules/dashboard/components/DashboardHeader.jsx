import { Typography } from "antd";

const { Title, Text } = Typography;

const DashboardHeader = () => {
  return (
    <>
      <Title
        level={1}
        style={{
          marginBottom: 4,
        }}
      >
        Overview
      </Title>

      <Text
        type="secondary"
        style={{
          fontSize: 16,
        }}
      >
        Selamat datang kembali, Dokter.
      </Text>
    </>
  );
};

export default DashboardHeader;
