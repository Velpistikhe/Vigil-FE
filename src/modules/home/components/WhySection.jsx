import {
  CheckCircleFilled,
  RiseOutlined,
  SafetyCertificateOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import {
  Card,
  Col,
  Flex,
  Progress,
  Row,
  Space,
  Statistic,
  Typography,
} from "antd";

const { Title, Paragraph, Text } = Typography;

const ITEMS = [
  "Clinical calculator yang cepat dan akurat",
  "Evidence based guideline",
  "Artificial Intelligence Assistant",
  "Modern & responsive interface",
];

export default function WhySection() {
  return (
    <section
      style={{
        padding: "100px 0",
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
              <Title
                level={2}
                style={{
                  margin: 0,
                  color: "#0F172A",
                }}
              >
                Built For Modern
                <br />
                Clinical Workflow
              </Title>

              <Paragraph
                style={{
                  margin: 0,
                  color: "#64748B",
                  fontSize: 17,
                  lineHeight: 1.9,
                }}
              >
                Sigil membantu tenaga kesehatan mengambil keputusan lebih cepat
                melalui kalkulator medis, protokol klinis, serta artificial
                intelligence yang berada dalam satu aplikasi.
              </Paragraph>

              <Space orientation="vertical" size={20}>
                {ITEMS.map((item) => (
                  <Flex key={item} align="center" gap={16}>
                    <CheckCircleFilled
                      style={{
                        color: "#14B8A6",
                        fontSize: 22,
                      }}
                    />

                    <Text
                      style={{
                        fontSize: 17,
                        color: "#334155",
                      }}
                    >
                      {item}
                    </Text>
                  </Flex>
                ))}
              </Space>
            </Space>
          </Col>

          <Col xs={24} lg={12}>
            <Card
              style={{
                borderRadius: 28,
                border: 0,
                boxShadow: "0 25px 60px rgba(15,23,42,.08)",
              }}
            >
              <Space
                orientation="vertical"
                size={28}
                style={{
                  width: "100%",
                }}
              >
                <Flex justify="space-between" align="center">
                  <Title
                    level={4}
                    style={{
                      margin: 0,
                    }}
                  >
                    Dashboard
                  </Title>

                  <SafetyCertificateOutlined
                    style={{
                      fontSize: 24,
                      color: "#14B8A6",
                    }}
                  />
                </Flex>

                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <Card
                      style={{
                        background: "#ECFEFF",
                        borderRadius: 18,
                        border: 0,
                      }}
                    >
                      <Statistic title="Clinical Calculator" value={48} />
                    </Card>
                  </Col>

                  <Col span={12}>
                    <Card
                      style={{
                        background: "#FEFCE8",
                        borderRadius: 18,
                        border: 0,
                      }}
                    >
                      <Statistic title="Protocols" value={25} />
                    </Card>
                  </Col>

                  <Col span={12}>
                    <Card
                      style={{
                        background: "#EEF2FF",
                        borderRadius: 18,
                        border: 0,
                      }}
                    >
                      <Statistic title="AI Tools" value={8} />
                    </Card>
                  </Col>

                  <Col span={12}>
                    <Card
                      style={{
                        background: "#F0FDF4",
                        borderRadius: 18,
                        border: 0,
                      }}
                    >
                      <Statistic title="Guidelines" value={100} suffix="%" />
                    </Card>
                  </Col>
                </Row>

                <Card
                  style={{
                    borderRadius: 20,
                    background: "#FFFFFF",
                  }}
                >
                  <Space
                    orientation="vertical"
                    style={{
                      width: "100%",
                    }}
                  >
                    <Flex justify="space-between">
                      <Text>Platform Progress</Text>

                      <RiseOutlined />
                    </Flex>

                    <Progress
                      percent={92}
                      strokeColor="#14B8A6"
                      showInfo={false}
                    />

                    <Flex justify="space-between" align="center">
                      <Flex gap={10} align="center">
                        <ThunderboltOutlined
                          style={{
                            color: "#F59E0B",
                          }}
                        />

                        <Text>AI Recommendation Ready</Text>
                      </Flex>

                      <Text strong>92%</Text>
                    </Flex>
                  </Space>
                </Card>
              </Space>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}
