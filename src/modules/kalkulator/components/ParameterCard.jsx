import { Card, Flex, Grid, theme, Typography } from "antd";
import CustomInputNumber from "../../../components/input/CustomInputNumber";

const { Text } = Typography;
const { useBreakpoint } = Grid;

const ParameterCard = ({
  loading = false,
  inputVal = 0,
  setInputVal = () => null,
} = {}) => {
  const screens = useBreakpoint();
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  return (
    <Card
      style={{
        borderRadius: borderRadiusLG,
        marginBottom: 32,
      }}
    >
      <Text strong type="secondary">
        PARAMETER PASIEN (BB)
      </Text>

      <Flex
        vertical={!screens.sm}
        align={screens.sm ? "center" : "start"}
        gap={16}
        style={{
          marginTop: 16,
        }}
      >
        <CustomInputNumber
          disabled={loading}
          controls={false}
          defaultValue={inputVal}
          onChange={(val) => setInputVal(val)}
          style={{
            width: screens.sm ? 220 : "100%",
          }}
          styles={{
            input: {
              fontSize: screens.sm ? 42 : 32,
              fontWeight: 700,
            },
          }}
        />

        <Text
          strong
          style={{
            fontSize: screens.sm ? 28 : 20,
          }}
        >
          kg
        </Text>
      </Flex>
    </Card>
  );
};

export default ParameterCard;
