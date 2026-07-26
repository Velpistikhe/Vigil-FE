import { Button, Tooltip } from "antd";
import { EditOutlined } from "@ant-design/icons";

const ButtonEditModal = ({
  id = null,
  setId = () => null,
  setOpen = () => null,
  ...props
}) => {
  const onClick = () => {
    if (!id) return;

    setId(id);

    setOpen(true);
  };

  return (
    <Tooltip placement="top" title="Edit">
      <Button
        {...props}
        variant="outlined"
        color="orange"
        icon={<EditOutlined />}
        onClick={onClick}
      />
    </Tooltip>
  );
};

export default ButtonEditModal;
