import { Button, Card, Col, Flex, Row, Space, Typography, theme } from "antd";
import { CalculatorOutlined, ThunderboltOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const QuickAccess = () => {
  const { token } = theme.useToken();

  return (
    <Card
      variant={"borderless"}
      styles={{
        body: {
          padding: 0,
        },
      }}
      style={{
        borderRadius: token.borderRadiusXL,
        overflow: "hidden",
        background: "linear-gradient(135deg,#14b8a6,#0f766e)",
      }}
    >
      <Row align="middle">
        <Col xs={24} lg={15}>
          <Space
            orientation="vertical"
            size={32}
            style={{
              width: "100%",
              padding: 32,
            }}
          >
            <Space orientation="vertical" size={8}>
              <Title
                level={2}
                style={{
                  color: "#ffffff",
                  margin: 0,
                }}
              >
                Akses Cepat Klinis
              </Title>

              <Paragraph
                style={{
                  color: "rgba(255,255,255,.85)",
                  margin: 0,
                  fontSize: 16,
                }}
              >
                Hitung dosis obat secara presisi atau buka panduan algoritma
                darurat dalam hitungan detik.
              </Paragraph>
            </Space>

            <Flex gap={16} wrap>
              <Button
                type="primary"
                icon={<CalculatorOutlined />}
                size="large"
                style={{
                  height: 52,
                  paddingInline: 28,
                  background: "#ffffff",
                  color: "#0f766e",
                  border: 0,
                }}
              >
                Buka Kalkulator
              </Button>

              <Button
                icon={<ThunderboltOutlined />}
                size="large"
                style={{
                  height: 52,
                  paddingInline: 28,
                  background: "rgba(0,0,0,.15)",
                  color: "#ffffff",
                  border: 0,
                }}
              >
                Protokol Darurat
              </Button>
            </Flex>
          </Space>
        </Col>

        <Col xs={0} lg={9}>
          <Flex
            justify="center"
            align="center"
            style={{
              height: "100%",
              minHeight: 260,
              position: "relative",
            }}
          >
            <div
              style={{
                width: 280,
                height: 280,
                borderRadius: "50%",
                background: "rgba(255,255,255,.08)",
                position: "absolute",
                right: -90,
                top: -70,
              }}
            />

            <div
              style={{
                width: 180,
                height: 180,
                borderRadius: "50%",
                background: "rgba(255,255,255,.05)",
                position: "absolute",
                right: 40,
                bottom: -60,
              }}
            />
          </Flex>
        </Col>
      </Row>
    </Card>
  );
};

export default QuickAccess;
