import {
  AppstoreOutlined,
  CalculatorOutlined,
  ExperimentOutlined,
  RobotOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";

const menuList = [
  {
    key: "/overview",
    icon: <AppstoreOutlined />,
    label: "Overview",
  },
  {
    key: "/kalkulator",
    icon: <CalculatorOutlined />,
    label: "Kalkulator",
  },
  {
    key: "/drug",
    icon: <ExperimentOutlined />,
    label: "Drug",
  },
  {
    key: "/assistant",
    icon: <RobotOutlined />,
    label: "AI Assistant",
  },
  {
    key: "/profile",
    icon: <UserOutlined />,
    label: "Profile",
  },
  {
    key: "/setting",
    icon: <SettingOutlined />,
    label: "Setting",
    children: [
      {
        key: "/setting/drug",
        label: "Drug",
      },
    ],
  },
];

export default menuList;
