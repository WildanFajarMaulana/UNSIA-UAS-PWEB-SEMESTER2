import React, { useEffect, useState } from "react";
import TableScore from "../components/tableScore";

const Score = () => {
  const [dataScore, setDataScore] = useState(null);
  useEffect(() => {
    setDataScore(JSON.parse(localStorage.getItem("dataQuiz")));
  }, []);
  return (
    <div className="col-span-12">
      <h1 className="table-title text-4xl font-bold mb-4">Daftar Nilai</h1>
      <div className="flex justify-center items-center p-4">
        <TableScore data={dataScore} />
      </div>
    </div>
  );
};

export default Score;
