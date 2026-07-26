import { useState } from "react";
import { Grid, Layout } from "antd";
import HeaderContent from "./header/HeaderContent";
import HeaderDrawer from "./header/HeaderDrawer";

const { Header } = Layout;
const { useBreakpoint } = Grid;

export default function HomeHeader() {
  const screens = useBreakpoint();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          height: 72,
          background: "rgba(255,255,255,.85)",
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid #e2e8f0",
          paddingInline: screens.xl ? 80 : 24,
        }}
      >
        <HeaderContent setOpen={setOpen} />
        <HeaderDrawer open={open} setOpen={setOpen} />
      </Header>
    </>
  );
}
