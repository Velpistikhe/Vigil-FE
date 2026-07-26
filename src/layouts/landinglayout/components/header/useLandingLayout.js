import { useNavigate } from "react-router";

const useLandingLayout = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => navigate("/login");

  return { handleLoginClick };
};

export default useLandingLayout;
