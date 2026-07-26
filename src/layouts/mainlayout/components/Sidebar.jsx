import { Grid } from "antd";

import SidebarContent from "./sidebar/SidebarContent";
import SidebarDrawer from "./sidebar/SidebarDrawer";

const Sidebar = (props) => {
  const screens = Grid.useBreakpoint();

  if (screens.lg) {
    return <SidebarContent />;
  }

  return <SidebarDrawer {...props} />;
};

export default Sidebar;
