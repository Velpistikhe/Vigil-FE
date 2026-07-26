import { Col, Flex, Row, Space, Typography } from "antd";

const FooterContent = () => {
  return (
    <div
      style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "80px 24px 32px",
      }}
    >
      <Row gutter={[60, 40]}>
        <Col xs={24} md={10}>
          <Space orientation="vertical" size={20}>
            <Flex align="center" gap={12}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: "#14b8a6",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#ffffff",
                  fontSize: 20,
                  fontWeight: 700,
                }}
              >
                S
              </div>

              <Typography.Title
                level={3}
                style={{
                  margin: 0,
                  color: "#0f172a",
                }}
              >
                Sigil
              </Typography.Title>
            </Flex>

            <Typography.Paragraph
              style={{
                margin: 0,
                maxWidth: 360,
                color: "#64748b",
                lineHeight: 1.8,
              }}
            >
              Modern clinical decision support platform untuk membantu tenaga
              kesehatan bekerja lebih cepat dan lebih akurat.
            </Typography.Paragraph>
          </Space>
        </Col>

        <Col xs={12} md={4}>
          <Space orientation="vertical" size={14}>
            <Typography.Text strong>Product</Typography.Text>

            <Typography.Link>Features</Typography.Link>
            <Typography.Link>Calculator</Typography.Link>
            <Typography.Link>Pricing</Typography.Link>
            <Typography.Link>Documentation</Typography.Link>
          </Space>
        </Col>

        <Col xs={12} md={4}>
          <Space orientation="vertical" size={14}>
            <Typography.Text strong>Company</Typography.Text>

            <Typography.Link>About</Typography.Link>
            <Typography.Link>Contact</Typography.Link>
            <Typography.Link>Blog</Typography.Link>
            <Typography.Link>Career</Typography.Link>
          </Space>
        </Col>

        <Col xs={24} md={6}>
          <Space orientation="vertical" size={14}>
            <Typography.Text strong>Support</Typography.Text>

            <Typography.Link>Help Center</Typography.Link>
            <Typography.Link>Privacy Policy</Typography.Link>
            <Typography.Link>Terms of Service</Typography.Link>
            <Typography.Link>FAQ</Typography.Link>
          </Space>
        </Col>
      </Row>

      <div
        style={{
          marginTop: 60,
          paddingTop: 24,
          borderTop: "1px solid #e5e7eb",
        }}
      >
        <Flex justify="space-between" align="center" wrap="wrap" gap={16}>
          <Typography.Text
            style={{
              color: "#94a3b8",
            }}
          >
            © {new Date().getFullYear()} Sigil. All rights reserved.
          </Typography.Text>

          <Typography.Text
            style={{
              color: "#94a3b8",
            }}
          >
            Built with React & Ant Design
          </Typography.Text>
        </Flex>
      </div>
    </div>
  );
};

export default FooterContent;
