import { Space } from "antd";

import DashboardHeader from "./components/DashboardHeader";
import QuickAccess from "./components/QuickAccess";
import StatisticCard from "./components/StatisticCard";

const Dashboard = () => {
  return (
    <Space
      orientation="vertical"
      size={24}
      style={{
        width: "100%",
      }}
    >
      <DashboardHeader />

      <QuickAccess />

      <StatisticCard />
    </Space>
  );
};

export default Dashboard;
