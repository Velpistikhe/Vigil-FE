import { Route, Routes } from "react-router";
import List from "./list/";
import Layout from "./components/layout/";

const index = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<List />} />
      </Route>
    </Routes>
  );
};

export default index;
