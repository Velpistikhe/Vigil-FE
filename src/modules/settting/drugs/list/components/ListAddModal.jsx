import CustomModal from "../../../../../components/CustomModal";
import usePost from "../../../../../hooks/usePost";
import DrugForm from "../../components/DrugForm";

const ListAddModal = ({
  open = false,
  refetch = () => null,
  setOpen = () => null,
} = {}) => {
  const onCancel = () => {
    setOpen(false);
  };

  const { post, loading } = usePost({
    title: "Drug",
    url: "drug",
    refetch,
    reset: onCancel,
  });

  return (
    <CustomModal
      title="Tambah Drug"
      open={open}
      setOpen={setOpen}
      onCancel={onCancel}
    >
      <DrugForm
        method={post}
        loading={loading}
        onCancel={onCancel}
        refetch={refetch}
      />
    </CustomModal>
  );
};

export default ListAddModal;
