import { Button, Popconfirm, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import useDelete from "../../hooks/useDelete";

const ButtonDelete = ({
  id = null,
  refetch = () => null,
  title = null,
  url = null,
  ...props
} = {}) => {
  const { deleteData, loading } = useDelete({ title, url, refetch });

  const onConfirm = () => {
    if (!id || !url) return;

    deleteData(id);
  };

  return (
    <Tooltip placement="top" title="Hapus">
      <Popconfirm
        title={title}
        onConfirm={onConfirm}
        description={`Apakah anda yakin ingin menghapus ${title?.toLowerCase()}?`}
      >
        <Button
          {...props}
          color="danger"
          disabled={loading}
          icon={<DeleteOutlined />}
          loading={loading}
          variant="outlined"
        />
      </Popconfirm>
    </Tooltip>
  );
};

export default ButtonDelete;
