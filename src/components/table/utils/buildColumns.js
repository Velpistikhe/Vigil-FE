export const buildColumns = (columns, params, setParams, getFilterProps) =>
  columns.map((col) => {
    const sortKey = Array.isArray(col.key) ? col.key.join(".") : col.key;

    return {
      ...getFilterProps(
        col.dataIndex || col.key,
        col.filter,
        setParams,
        col.options
      ),
      align: col.align || "center",
      dataIndex: col.dataIndex || col.key,
      ellipsis: col.ellipsis ?? true,
      fixed: col.fixed,
      key: col.key,
      onCell: col.onCell,
      render: col.render,
      responsive: col.responsive,
      sorter: col.sorter,
      title: col.title,
      width: col.width,
      sortOrder:
        sortKey === params.sort
          ? params.order === "asc"
            ? "ascend"
            : "descend"
          : null,
      children: col.children?.map((child) => ({
        ...child,
        align: child.align || "center",
        ellipsis: child.ellipsis ?? true,
        sortOrder:
          child.sortKey === params.sort
            ? params.order === "asc"
              ? "ascend"
              : "descend"
            : null,
      })),
    };
  });
