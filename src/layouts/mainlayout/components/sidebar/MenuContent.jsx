import { Menu } from "antd";

import menuList from "./menuList";
import useMainLayout from "./useMainLayout";

const MenuContent = () => {
  const { selectedKeys, clickMenuHandler } = useMainLayout();

  return (
    <Menu
      mode="inline"
      items={menuList}
      selectedKeys={selectedKeys}
      onClick={clickMenuHandler}
      style={{
        borderInlineEnd: 0,
      }}
    />
  );
};

export default MenuContent;
