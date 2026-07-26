import { DatePicker, Input, Select } from "antd";

export const renderFilterComponent = (filterType, props = {}) => {
  switch (filterType) {
    case "dateRange":
      return <DatePicker.RangePicker {...props} />;
    case "datePicker":
      return <DatePicker {...props} />;
    case "dropDown":
      return <Select {...props} />;
    case true:
      return <Input {...props} />;

    default:
      return <Input {...props} />;
  }
};
