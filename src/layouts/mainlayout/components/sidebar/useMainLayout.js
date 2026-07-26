import { useLocation, useNavigate } from "react-router";

const useMainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const clickMenuHandler = ({ key }) => {
    navigate(key);
  };

  return {
    selectedKeys: [location.pathname],
    clickMenuHandler,
  };
};

export default useMainLayout;
