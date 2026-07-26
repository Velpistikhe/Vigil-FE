import { useState } from "react";
import { Layout } from "antd";

import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

const MainLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sidebar open={open} setOpen={setOpen} />

      <Content setOpen={setOpen} />
    </Layout>
  );
};

export default MainLayout;
