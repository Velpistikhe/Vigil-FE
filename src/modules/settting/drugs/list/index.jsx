import { useState } from "react";
import { Flex } from "antd";
import ButtonAddModal from "../../../../components/button/ButtonAddModal";
import ListTable from "./components/ListTable";
import ListAddModal from "./components/ListAddModal";
import useFetch from "../../../../hooks/useFetch";

const ListPage = () => {
  const [open, setOpen] = useState(false);
  const { data, loading, refetch } = useFetch({ title: "Drug", url: "drug" });

  return (
    <>
      <Flex orientation="vertical">
        <Flex>
          <ButtonAddModal setOpen={setOpen} />
        </Flex>

        <ListTable datas={data?.drug} loading={loading} refetch={refetch} />
      </Flex>

      <ListAddModal open={open} setOpen={setOpen} refetch={refetch} />
    </>
  );
};

export default ListPage;
