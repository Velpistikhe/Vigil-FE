import { Layout } from "antd";

import Logo from "./Logo";
import RoleCard from "./RoleCard";
import MenuContent from "./MenuContent";
import LogoutButton from "./LogoutButton";

const SidebarContent = () => {
  return (
    <Layout.Sider
      width={280}
      theme="light"
      style={{
        height: "100vh",
        position: "sticky",
        top: 0,
        left: 0,
        borderRight: "1px solid #f0f0f0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Logo />

        <RoleCard />

        <div
          style={{
            flex: 1,
            overflow: "auto",
          }}
        >
          <MenuContent />
        </div>

        <LogoutButton />
      </div>
    </Layout.Sider>
  );
};

export default SidebarContent;
