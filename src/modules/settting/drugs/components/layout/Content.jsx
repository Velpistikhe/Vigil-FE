import { Layout, theme } from "antd";
import { Outlet } from "react-router";

const Content = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout.Content
      style={{
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
        padding: 24,
      }}
    >
      <Outlet />
    </Layout.Content>
  );
};

export default Content;
