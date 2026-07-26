import { Layout } from "antd";
import { Outlet } from "react-router";

const Content = () => {
  return (
    <Layout.Content>
      <Outlet />
    </Layout.Content>
  );
};

export default Content;
