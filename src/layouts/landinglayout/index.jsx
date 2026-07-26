import { Layout } from "antd";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const LandingLayout = () => {
  return (
    <Layout>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </Layout>
  );
};

export default LandingLayout;
