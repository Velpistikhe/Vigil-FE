import CustomModal from "../../../../../components/CustomModal";
import useFetch from "../../../../../hooks/useFetch";
import useUpdate from "../../../../../hooks/useUpdate";
import DrugForm from "../../components/DrugForm";

const ListEditModal = ({
  id = null,
  open = false,
  refetch = () => null,
  setId = () => null,
  setOpen = () => null,
} = {}) => {
  const { data, loading } = useFetch({ title: "Drug", url: "drug", id });
  const onCancel = () => {
    setOpen(false);

    setTimeout(() => {
      setId(null);
    }, 300);
  };
  const { update, loading: loadingUpdate } = useUpdate({
    title: "Drug",
    id,
    url: "drug",
    refetch,
    reset: onCancel,
  });

  return (
    <CustomModal
      title="Edit Drug"
      loading={loading || loadingUpdate}
      open={open}
      onCancel={onCancel}
    >
      <DrugForm
        data={data?.data}
        method={update}
        loading={loading || loadingUpdate}
        onCancel={onCancel}
      />
    </CustomModal>
  );
};

export default ListEditModal;
