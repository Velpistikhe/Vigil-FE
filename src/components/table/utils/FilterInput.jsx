import { useRef } from "react";
import { Button, Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { renderFilterComponent } from "./renderFilterComponents";

const FilterInput = ({
  filter,
  selectedKeys,
  setSelectedKeys,
  clearFilters,
  confirm,
  onReset,
  options,
}) => {
  const inputRef = useRef(null);

  return (
    <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
      {renderFilterComponent(filter, {
        ref: inputRef,
        autoComplete: "off",
        value: selectedKeys[0],
        style: { marginBottom: 8, display: "block" },
        options,
        onPressEnter: () => confirm(),
        onChange: (e) => {
          if (filter === "dateRange") {
            setSelectedKeys(e && e.length === 2 ? [e] : []);
          } else if (filter === "datePicker" || filter === "dropDown") {
            setSelectedKeys(e != null ? [e] : []);
          } else {
            setSelectedKeys(e.target.value ? [e.target.value] : []);
            // setSelectedKeys(e?.target?.value != null ? [e.target.value] : []);
          }
        },
      })}
      <Space>
        <Button
          type="primary"
          onClick={() => confirm()}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90 }}
        >
          Search
        </Button>
        <Button
          onClick={() => {
            clearFilters();
            onReset();
            confirm();
          }}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </Space>
    </div>
  );
};

export default FilterInput;
