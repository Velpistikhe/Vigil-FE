import { Layout, Grid } from "antd";
import { Outlet } from "react-router";

import MobileHeader from "./content/MobileHeader";

const Content = ({ setOpen }) => {
  const screens = Grid.useBreakpoint();

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      {!screens.lg && <MobileHeader setOpen={setOpen} />}

      <Layout.Content
        style={{
          overflow: "auto",
          padding: 24,
          background: "#f5f5f5",
        }}
      >
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};

export default Content;
