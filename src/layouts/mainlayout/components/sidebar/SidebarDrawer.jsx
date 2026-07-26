import { Drawer } from "antd";

import Logo from "./Logo";
import RoleCard from "./RoleCard";
import MenuContent from "./MenuContent";
import LogoutButton from "./LogoutButton";

const SidebarDrawer = ({ open, setOpen }) => {
  return (
    <Drawer
      placement="left"
      size={280}
      open={open}
      onClose={() => setOpen(false)}
      styles={{
        body: {
          padding: 0,
        },
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
    </Drawer>
  );
};

export default SidebarDrawer;
