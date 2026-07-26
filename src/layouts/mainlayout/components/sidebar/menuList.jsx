import {
  AppstoreOutlined,
  CalculatorOutlined,
  ExperimentOutlined,
  FolderFilled,
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
    key: "/algoritma",
    icon: <ExperimentOutlined />,
    label: "Algoritma",
  },
  {
    key: "/regional",
    icon: <FolderFilled />,
    label: "Regional",
  },
  {
    key: "/ai",
    icon: <RobotOutlined />,
    label: "Ai Asisten",
  },
  {
    key: "/aiformula",
    icon: <FolderFilled />,
    label: "Formula AI",
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
