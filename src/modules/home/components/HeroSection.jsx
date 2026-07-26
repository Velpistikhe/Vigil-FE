import {
  AlertOutlined,
  ClockCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Flex,
  Grid,
  Row,
  Space,
  Tag,
  Typography,
} from "antd";

const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

export default function HeroSection() {
  const screens = useBreakpoint();

  return (
    <section
      style={{
        padding: screens.lg ? "100px 0" : "60px 0",
        background: "#F8FAFC",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          paddingInline: 24,
        }}
      >
        <Row gutter={[64, 64]} align="middle">
          <Col xs={24} lg={12}>
            <Space orientation="vertical" size={28}>
              <Tag
                color="cyan"
                style={{
                  borderRadius: 999,
                  padding: "6px 18px",
                  width: "fit-content",
                }}
              >
                CLINICAL DECISION SUPPORT
              </Tag>

              <Title
                style={{
                  margin: 0,
                  fontSize: screens.xl ? 72 : 54,
                  lineHeight: 1.05,
                  fontWeight: 800,
                  color: "#0F172A",
                }}
              >
                Clinical Decision
                <br />
                Support
                <br />
                Platform
              </Title>

              <Paragraph
                style={{
                  fontSize: 18,
                  color: "#64748B",
                  lineHeight: 1.9,
                  maxWidth: 520,
                  margin: 0,
                }}
              >
                Modern platform untuk membantu dokter anestesi mengambil
                keputusan klinis secara cepat dan akurat.
              </Paragraph>

              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                style={{
                  height: 54,
                  paddingInline: 30,
                  borderRadius: 12,
                  background: "#14B8A6",
                  border: 0,
                }}
              >
                Get Started
              </Button>
            </Space>
          </Col>

          <Col xs={24} lg={12}>
            <Card
              style={{
                borderRadius: 28,
                border: 0,
                boxShadow: "0 30px 70px rgba(15,23,42,.08)",
              }}
            >
              <Space
                orientation="vertical"
                size={24}
                style={{
                  width: "100%",
                }}
              >
                <Flex align="center" gap={16}>
                  <Flex
                    justify="center"
                    align="center"
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 16,
                      background: "#FEE2E2",
                    }}
                  >
                    <AlertOutlined
                      style={{
                        color: "#DC2626",
                        fontSize: 24,
                      }}
                    />
                  </Flex>

                  <div>
                    <Title
                      level={4}
                      style={{
                        margin: 0,
                      }}
                    >
                      LAST Management
                    </Title>

                    <Text type="secondary">Emergency Protocol</Text>
                  </div>
                </Flex>

                <Card
                  style={{
                    borderRadius: 20,
                    background: "#FEF3C7",
                  }}
                >
                  <Text
                    style={{
                      color: "#92400E",
                      fontWeight: 600,
                    }}
                  >
                    INITIAL BOLUS
                  </Text>

                  <Title
                    level={2}
                    style={{
                      margin: "10px 0 0",
                      color: "#92400E",
                    }}
                  >
                    105.0 mL
                  </Title>
                </Card>

                <Card
                  style={{
                    borderRadius: 20,
                    background: "#F8FAFC",
                  }}
                >
                  <Flex justify="space-between" align="center">
                    <div>
                      <Text strong>CONTINUOUS INFUSION</Text>

                      <Title
                        level={3}
                        style={{
                          margin: "6px 0 0",
                        }}
                      >
                        17.5 mL/min
                      </Title>
                    </div>

                    <ClockCircleOutlined
                      style={{
                        fontSize: 36,
                        color: "#F59E0B",
                      }}
                    />
                  </Flex>
                </Card>
              </Space>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}
