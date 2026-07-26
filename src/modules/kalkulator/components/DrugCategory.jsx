import { Card, Space, Typography } from "antd";
import DrugCard from "./DrugCard";

const DrugCategory = ({ title = null, drugs = [], inputVal = 0 } = {}) => {
  return (
    <Card
      style={{
        borderRadius: 20,
      }}
    >
      <Typography.Text
        strong
        style={{
          color: "#0f9d90",
          letterSpacing: 1,
        }}
      >
        ● {title}
      </Typography.Text>

      <Space
        orientation="vertical"
        size={16}
        style={{
          width: "100%",
          marginTop: 20,
        }}
      >
        {drugs?.map((item) => (
          <DrugCard key={item.name} item={item} inputVal={inputVal} />
        ))}
      </Space>
    </Card>
  );
};

export default DrugCategory;
