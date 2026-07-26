import { Table } from "antd";
import { buildColumns } from "./utils/buildColumns";
import getFilterProps from "./utils/getFilterProps";

const DataTable = ({
  additionalParams = {},
  columns = [],
  datas = [],
  expandable = {},
  footer = () => null,
  loading = false,
  onRow = () => null,
  pagination = null,
  params = {},
  setParams = () => null,
  size = "small",
}) => {
  const handleOnChange = (pagination, filters, sorter) => {
    const newFilter = Object.fromEntries(
      Object.entries(filters).map(([key, value]) => [
        key,
        Array.isArray(value) ? (value[0] ?? null) : value,
      ]),
    );

    const order =
      sorter.order === "ascend"
        ? "asc"
        : sorter.order === "descend"
          ? "desc"
          : null;

    const sortField = Array.isArray(sorter.field)
      ? sorter.field.join(".")
      : sorter.field || null;

    setParams((prev) => ({
      ...prev,
      ...newFilter,
      ...additionalParams,
      sort: sortField,
      order,
      current: pagination.current,
      limit: pagination.pageSize,
    }));
  };

  const newColumns = buildColumns(columns, params, setParams, getFilterProps);

  const newDatas = datas?.map((data, index) => ({
    ...data,
    key: data.id ?? index,
  }));

  return (
    <Table
      columns={newColumns}
      dataSource={newDatas}
      expandable={expandable}
      footer={footer}
      onChange={handleOnChange}
      onRow={onRow}
      loading={loading}
      pagination={{
        current: pagination?.current,
        pageSize: pagination?.limit,
        total: pagination?.total,
      }}
      scroll={{ x: true }}
      sortDirections={["ascend", "descend", null]}
      style={{ marginTop: 10 }}
      size={size}
      rowKey={(row) => row.id}
    />
  );
};

export default DataTable;
