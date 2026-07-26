import {
  ExperimentOutlined,
  MedicineBoxOutlined,
  RobotOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Space, Typography } from "antd";

const { Title, Paragraph } = Typography;

const FEATURES = [
  {
    icon: <MedicineBoxOutlined style={{ fontSize: 40, color: "#0F766E" }} />,
    title: "Drug Calculator",
    description:
      "Calculate induction drugs, vasopressors, local anesthetics, and emergency medications accurately.",
  },
  {
    icon: (
      <SafetyCertificateOutlined style={{ fontSize: 40, color: "#0F766E" }} />
    ),
    title: "Clinical Protocol",
    description:
      "Evidence-based protocols for LAST, malignant hyperthermia, ACLS, difficult airway, and more.",
  },
  {
    icon: <ExperimentOutlined style={{ fontSize: 40, color: "#0F766E" }} />,
    title: "Regional Anesthesia",
    description:
      "Reference doses, techniques, and safety recommendations for regional anesthesia.",
  },
  {
    icon: <RobotOutlined style={{ fontSize: 40, color: "#0F766E" }} />,
    title: "AI Assistant",
    description:
      "AI-powered assistant to help interpret guidelines and answer anesthesia-related questions.",
  },
];

export default function FeatureSection() {
  return (
    <section
      style={{
        padding: "100px 0",
        background: "#FFFFFF",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          paddingInline: 24,
        }}
      >
        <Space
          orientation="vertical"
          size={16}
          style={{
            width: "100%",
            textAlign: "center",
            marginBottom: 64,
          }}
        >
          <Title
            level={2}
            style={{
              margin: 0,
              color: "#0F172A",
            }}
          >
            Everything You Need
          </Title>

          <Paragraph
            style={{
              maxWidth: 720,
              margin: "0 auto",
              color: "#64748B",
              fontSize: 16,
              lineHeight: 1.8,
            }}
          >
            Sigil combines clinical calculators, emergency protocols, regional
            anesthesia references, and AI into one modern platform.
          </Paragraph>
        </Space>

        <Row gutter={[24, 24]}>
          {FEATURES.map((item) => (
            <Col key={item.title} xs={24} sm={12} lg={6}>
              <Card
                hoverable
                style={{
                  height: "100%",
                  borderRadius: 20,
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 8px 24px rgba(15,23,42,.04)",
                }}
                styles={{
                  body: {
                    padding: 32,
                  },
                }}
              >
                <Space orientation="vertical" size={24}>
                  {item.icon}

                  <Title
                    level={4}
                    style={{
                      margin: 0,
                    }}
                  >
                    {item.title}
                  </Title>

                  <Paragraph
                    style={{
                      margin: 0,
                      color: "#64748B",
                      lineHeight: 1.8,
                    }}
                  >
                    {item.description}
                  </Paragraph>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
