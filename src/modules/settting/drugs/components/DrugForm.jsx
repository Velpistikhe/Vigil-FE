import { Flex, Form, Input, Select } from "antd";
import ButtonSubmit from "../../../../components/button/ButtonSubmit";
import CustomInputNumber from "../../../../components/input/CustomInputNumber";
import variantOptions from "./utils/variantOptions";

const DrugForm = ({
  data = null,
  method = () => null,
  loading = false,
} = {}) => {
  const [form] = Form.useForm();

  form.setFieldsValue(data);

  const onFinish = (val) => {
    method(val);

    form.resetFields();
  };

  return (
    <Form
      autoComplete="off"
      name="drug"
      form={form}
      onFinish={onFinish}
      labelCol={{ span: 8 }}
    >
      <Form.Item
        name="variant"
        label="Varian"
        rules={[{ required: true, message: "Variant wajib dipilih." }]}
      >
        <Select options={variantOptions} />
      </Form.Item>
      <Form.Item
        name="name"
        label="Nama Drug"
        rules={[{ required: true, message: "Kolom Drug wajib diisi." }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="doseMin"
        label="Dosis Minimum"
        rules={[{ required: true, message: "Dosis Minimum wajib diisi." }]}
      >
        <CustomInputNumber />
      </Form.Item>
      <Form.Item
        name="doseMax"
        label="Dosis Maximum"
        rules={[{ required: true, message: "Dosis Maximum wajib diisi." }]}
      >
        <CustomInputNumber />
      </Form.Item>
      <Form.Item
        name="unit"
        label="Satuan"
        rules={[{ required: true, message: "Satuan wajib diisi." }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="form"
        label="Formula"
        rules={[{ required: true, message: "Formula wajib diisi." }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="note"
        label="Catatan"
        rules={[{ required: true, message: "Catatan wajib diisi." }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Flex>
        <ButtonSubmit loading={loading} disabled={loading} />
      </Flex>
    </Form>
  );
};

export default DrugForm;
