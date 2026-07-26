import CustomModal from "../../../../../components/CustomModal";
import DrugForm from "../../components/DrugForm";

const ListAddModal = ({
  open = false,
  refetch = () => null,
  setOpen = () => null,
} = {}) => {
  const onCancel = () => {
    setOpen(false);
  };

  return (
    <CustomModal
      title="Tambah Drug"
      open={open}
      setOpen={setOpen}
      onCancel={onCancel}
    >
      <DrugForm onCancel={onCancel} refetch={refetch} />
    </CustomModal>
  );
};

export default ListAddModal;
