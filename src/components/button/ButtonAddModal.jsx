import { Button } from "antd";

const ButtonAddModal = ({ setOpen, ...props }) => {
  const onClick = () => {
    setOpen?.(true);
  };

  return (
    <Button {...props} type="primary" onClick={onClick}>
      Tambah
    </Button>
  );
};

export default ButtonAddModal;
