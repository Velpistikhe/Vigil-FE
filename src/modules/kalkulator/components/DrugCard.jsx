import { Card, Flex, Grid, Tag, Typography } from "antd";

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const calculateDose = (min, max, bw, isFixed = false) => {
  if (!bw || bw <= 0) return "0";
  const minDose = isFixed ? min : (min * bw).toFixed(1);
  const maxDose = isFixed ? max : (max * bw).toFixed(1);
  const formatNum = (num) =>
    String(num).endsWith(".0") ? String(num).slice(0, -2) : String(num);
  return min === max
    ? formatNum(minDose)
    : `${formatNum(minDose)} - ${formatNum(maxDose)}`;
};

const DrugCard = ({ item = null, inputVal = 0 } = {}) => {
  const screens = useBreakpoint();

  return (
    <Card
      hoverable
      style={{
        borderRadius: 18,
      }}
      styles={{
        body: {
          padding: screens.sm ? 18 : 14,
        },
      }}
    >
      <Flex
        justify="space-between"
        align={screens.xs ? "start" : "center"}
        vertical={!screens.sm}
        gap={12}
      >
        <div>
          <Title
            level={screens.sm ? 4 : 5}
            style={{
              margin: 0,
            }}
          >
            {item?.name}
          </Title>

          <Text type="secondary">
            {item?.doseMin} - {item?.doseMax} {item?.unit}
          </Text>
        </div>

        <div
          style={{
            textAlign: screens.sm ? "right" : "left",
          }}
        >
          <Title
            level={screens.sm ? 2 : 3}
            style={{
              margin: 0,
              color: "#0f9d90",
            }}
          >
            {calculateDose(item.doseMin, item.doseMax, inputVal)}
          </Title>

          <Text
            type="secondary"
            style={{
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            {item?.unit}
          </Text>
        </div>
      </Flex>

      <Flex
        vertical={!screens.md}
        justify="space-between"
        align={screens.md ? "center" : "start"}
        gap={10}
        style={{
          marginTop: 18,
        }}
      >
        <Tag
          style={{
            borderRadius: 8,
            paddingInline: 12,
          }}
        >
          {item?.form}
        </Tag>

        <Text
          italic
          type="secondary"
          style={{
            fontSize: 12,
            textAlign: screens.md ? "right" : "left",
          }}
        >
          {item?.note}
        </Text>
      </Flex>
    </Card>
  );
};

export default DrugCard;
