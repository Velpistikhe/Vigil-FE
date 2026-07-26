import { InputNumber } from "antd";

const CustomInputNumber = ({
  value = null,
  onChange = () => null,
  prefix = "",
  placeholder = "",
  suffix = "",
  precision,
  ...props
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handleBeforeInput = (e) => {
    if (!/^[0-9.]$/.test(e.data)) {
      e.preventDefault();
      return;
    }

    // Hanya boleh satu titik
    if (e.data === "." && e.target.value.includes(".")) {
      e.preventDefault();
    }
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData("text");

    // hanya angka dan maksimal satu titik
    if (!/^\d*\.?\d*$/.test(pasted)) {
      e.preventDefault();
    }
  };

  const handleChange = (value) => {
    if (value === null || value === "") {
      onChange(null);
      return;
    }

    onChange(Number(value));
  };

  return (
    <InputNumber
      {...props}
      value={value}
      controls={false}
      inputMode="decimal"
      min={0}
      step={0.01}
      precision={precision}
      prefix={prefix}
      placeholder={placeholder}
      formatter={(value) => {
        if (value === null || value === undefined || value === "") {
          return "";
        }

        const [integer, decimal] = String(value).split(".");

        const formattedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        return decimal !== undefined
          ? `${formattedInteger}.${decimal}`
          : formattedInteger;
      }}
      parser={(value) => {
        if (!value) return "";

        return value.replace(/,/g, "");
      }}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onBeforeInput={handleBeforeInput}
      onPaste={handlePaste}
      suffix={suffix}
    />
  );
};

export default CustomInputNumber;
