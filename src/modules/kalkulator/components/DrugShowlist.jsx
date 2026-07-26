import { useEffect, useState } from "react";
import { Col, Grid, Row } from "antd";
import DrugCategory from "./DrugCategory";
import { drugVariant } from "../../../constant/drugVariant";

const DrugShowlist = ({ datas = [], inputVal = 0 } = {}) => {
  const screens = Grid.useBreakpoint();
  const [compiledData, setCompiledData] = useState([]);

  useEffect(() => {
    const categoryList = Object.entries(drugVariant).map(
      ([variant, category]) => {
        const drugs = [];

        datas?.map((data) => {
          if (data.variant === Number(variant)) return drugs.push(data);
        });

        return { variant, category, drugs };
      },
    );

    setCompiledData(categoryList);
  }, [datas]);

  return (
    <Row gutter={[screens.md ? 24 : 16, screens.md ? 24 : 16]}>
      {compiledData?.map((item) => (
        <Col key={item.variant} xs={24} lg={12}>
          <DrugCategory
            title={item?.category}
            drugs={item.drugs}
            inputVal={inputVal}
          />
        </Col>
      ))}
    </Row>
  );
};

export default DrugShowlist;
