import { Typography, Card } from "antd";
import ParameterCard from "./components/ParameterCard";
import useFetch from "../../hooks/useFetch";
import LoadingSkeleton from "../../components/loading/LoadingSkeleton";
import DrugShowlist from "./components/DrugShowlist";
import { useState } from "react";

export default function Calculator() {
  const [inputVal, setInputVal] = useState(70);
  const { data, loading } = useFetch({ title: "Drug", url: "drug" });

  return (
    <>
      <Typography.Title
        level={2}
        style={{
          marginBottom: 32,
        }}
      >
        Kalkulator Presisi Klinis
      </Typography.Title>

      <ParameterCard
        loading={loading}
        inputVal={inputVal}
        setInputVal={setInputVal}
      />

      {loading ? (
        <Card>
          <LoadingSkeleton ammount={3} />
        </Card>
      ) : (
        <DrugShowlist datas={data?.drug || []} inputVal={inputVal} />
      )}
    </>
  );
}
