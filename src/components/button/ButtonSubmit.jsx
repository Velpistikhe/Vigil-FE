import { Button } from "antd";

const ButtonSubmit = ({ ...props }) => {
  return (
    <Button {...props} htmlType="submit" variant="default">
      Simpan
    </Button>
  );
};

export default ButtonSubmit;
