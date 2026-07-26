import { Card, Col, Flex, Row, Statistic, Typography, theme } from "antd";
import {
  CalculatorOutlined,
  ClockCircleOutlined,
  ExperimentOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

const StatisticCard = () => {
  const { token } = theme.useToken();

  return (
    <Row gutter={[24, 24]}>
      <Col xs={24} sm={12} xl={6}>
        <Card variant={"borderless"}>
          <Flex vertical gap={20}>
            <Flex
              justify="center"
              align="center"
              style={{
                width: 56,
                height: 56,
                borderRadius: token.borderRadiusLG,
                background: "#e8f5e9",
              }}
            >
              <CalculatorOutlined
                style={{
                  fontSize: 24,
                  color: "#16a34a",
                }}
              />
            </Flex>

            <Statistic title="Perhitungan Hari Ini" value={24} />

            <Typography.Text type="secondary">
              +12% dari kemarin
            </Typography.Text>
          </Flex>
        </Card>
      </Col>

      <Col xs={24} sm={12} xl={6}>
        <Card variant={"borderless"}>
          <Flex vertical gap={20}>
            <Flex
              justify="center"
              align="center"
              style={{
                width: 56,
                height: 56,
                borderRadius: token.borderRadiusLG,
                background: "#ede9fe",
              }}
            >
              <ExperimentOutlined
                style={{
                  fontSize: 24,
                  color: "#7c3aed",
                }}
              />
            </Flex>

            <Statistic title="Obat" value={86} />

            <Typography.Text type="secondary">Tersedia</Typography.Text>
          </Flex>
        </Card>
      </Col>

      <Col xs={24} sm={12} xl={6}>
        <Card variant={"borderless"}>
          <Flex vertical gap={20}>
            <Flex
              justify="center"
              align="center"
              style={{
                width: 56,
                height: 56,
                borderRadius: token.borderRadiusLG,
                background: "#fff7e6",
              }}
            >
              <ClockCircleOutlined
                style={{
                  fontSize: 24,
                  color: "#d97706",
                }}
              />
            </Flex>

            <Statistic title="Riwayat" value={128} />

            <Typography.Text type="secondary">
              Total Perhitungan
            </Typography.Text>
          </Flex>
        </Card>
      </Col>

      <Col xs={24} sm={12} xl={6}>
        <Card variant={"borderless"}>
          <Flex vertical gap={20}>
            <Flex
              justify="center"
              align="center"
              style={{
                width: 56,
                height: 56,
                borderRadius: token.borderRadiusLG,
                background: "#e0f2fe",
              }}
            >
              <SafetyCertificateOutlined
                style={{
                  fontSize: 24,
                  color: "#0284c7",
                }}
              />
            </Flex>

            <Statistic title="Versi" value="1.0" />

            <Typography.Text type="secondary">Stable Release</Typography.Text>
          </Flex>
        </Card>
      </Col>
    </Row>
  );
};

export default StatisticCard;
