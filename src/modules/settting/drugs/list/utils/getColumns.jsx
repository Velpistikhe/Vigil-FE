import { Flex } from "antd";
import { drugVariant } from "../../../../../constant/drugVariant";
import ButtonDelete from "../../../../../components/button/ButtonDelete";
import ButtonEditModal from "../../../../../components/button/ButtonEditModal";

const getColumnsDrugs = ({
  refetch = () => null,
  setId = () => null,
  setOpenEdit = () => null,
} = {}) => [
  {
    key: "aksi",
    title: "Aksi",
    render: (_, row) => (
      <Flex gap="small">
        <ButtonDelete id={row.id} title="Drug" url="drug" refetch={refetch} />
        <ButtonEditModal id={row.id} setId={setId} setOpen={setOpenEdit} />
      </Flex>
    ),
  },
  { key: "variant", title: "Varian", render: (val) => drugVariant[val] },
  { key: "name", title: "Drug" },
  { key: "doseMin", title: "Dose Min" },
  { key: "doseMax", title: "Dose Max" },
  { key: "unit", title: "Satuan" },
  { key: "form", title: "Formula" },
  { key: "note", title: "Note" },
];

export default getColumnsDrugs;
