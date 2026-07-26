import { Layout } from "antd";
import FooterContent from "./footer/FooterContent";

export default function Footer() {
  return (
    <Layout.Footer
      style={{
        background: "#ffffff",
        borderTop: "1px solid #e5e7eb",
      }}
    >
      <FooterContent />
    </Layout.Footer>
  );
}
