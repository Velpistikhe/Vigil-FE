import { useMemo } from "react";
import DataTable from "../../../../../components/table/Table";
import getColumnsDrugs from "../utils/getColumns";

const ListTable = ({
  datas = [],
  loading = false,
  refetch = () => null,
} = {}) => {
  const columns = useMemo(() => getColumnsDrugs({ refetch }), [refetch]);

  return <DataTable datas={datas} loading={loading} columns={columns} />;
};

export default ListTable;
