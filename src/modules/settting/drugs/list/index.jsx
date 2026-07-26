import { useState } from "react";
import { Flex } from "antd";
import useFetch from "../../../../hooks/useFetch";
import ButtonAddModal from "../../../../components/button/ButtonAddModal";
import ListTable from "./components/ListTable";
import ListAddModal from "./components/ListAddModal";
import ListEditModal from "./components/ListEditModal";

const ListPage = () => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [id, setId] = useState(null);
  const { data, loading, refetch } = useFetch({ title: "Drug", url: "drug" });

  return (
    <>
      <Flex orientation="vertical">
        <Flex>
          <ButtonAddModal setOpen={setOpen} />
        </Flex>

        <ListTable
          datas={data?.drug}
          loading={loading}
          refetch={refetch}
          setId={setId}
          setOpenEdit={setOpenEdit}
        />
      </Flex>

      <ListAddModal open={open} setOpen={setOpen} refetch={refetch} />

      {id && (
        <ListEditModal
          open={openEdit}
          setOpen={setOpenEdit}
          id={id}
          refetch={refetch}
          setId={setId}
        />
      )}
    </>
  );
};

export default ListPage;
