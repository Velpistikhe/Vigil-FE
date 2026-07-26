import { Button, Result } from "antd";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/overview", {
      replace: true,
    });
  };

  return (
    <Result
      status="404"
      title="404"
      subTitle="Halaman yang Anda cari tidak ditemukan."
      extra={
        <Button type="primary" onClick={handleBackHome}>
          Kembali ke Beranda
        </Button>
      }
    />
  );
};

export default NotFound;
