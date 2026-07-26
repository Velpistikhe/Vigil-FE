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
    key: "/appmanager",
    icon: <SettingOutlined />,
    label: "App Manager",
    children: [
      {
        key: "/appmanager/drug",
        label: "Drug",
      },
    ],
  },
];

export default menuList;
