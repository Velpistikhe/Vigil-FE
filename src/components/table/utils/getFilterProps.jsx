import FilterInput from "./FilterInput";

const getFilterProps = (dataIndex, filter, setParams, options) =>
  filter && {
    filterDropdown: ({
      selectedKeys,
      setSelectedKeys,
      confirm,
      clearFilters,
    }) => (
      <FilterInput
        filter={filter}
        selectedKeys={selectedKeys}
        setSelectedKeys={setSelectedKeys}
        confirm={confirm}
        clearFilters={clearFilters}
        options={options}
        onReset={() => setParams((prev) => ({ ...prev, [dataIndex]: null }))}
      />
    ),
  };

export default getFilterProps;
