import { useMemo } from "react";
import DataTable from "../../../../../components/table/Table";
import getColumnsDrugs from "../utils/getColumns";

const ListTable = ({
  datas = [],
  loading = false,
  refetch = () => null,
  setId = () => null,
  setOpenEdit = () => null,
} = {}) => {
  const columns = useMemo(
    () => getColumnsDrugs({ refetch, setId, setOpenEdit }),
    [refetch, setId, setOpenEdit],
  );

  return <DataTable datas={datas} loading={loading} columns={columns} />;
};

export default ListTable;
