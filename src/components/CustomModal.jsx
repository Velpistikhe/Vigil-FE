import { Modal } from "antd";

const CustomModal = ({ ...props } = {}) => {
  return <Modal {...props} footer={false} destroyOnHidden={true} />;
};

export default CustomModal;
