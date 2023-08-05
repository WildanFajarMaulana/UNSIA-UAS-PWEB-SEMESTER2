import React from "react";
import TableScore from "../components/tableScore";

const data = [
  {
    name: "John",
    class: "IT-204",
    score: 100,
    date: "2023-02-20",
  },
  {
    name: "John",
    class: "IT-204",
    score: 100,
    date: "2023-02-21",
  },
  {
    name: "John",
    class: "IT-204",
    score: 100,
    date: "2023-02-22",
  },
  {
    name: "John",
    class: "IT-204",
    score: 100,
    date: "2023-02-23",
  },
  {
    name: "John",
    class: "IT-204",
    score: 100,
    date: "2023-02-24",
  },
];

const Score = () => {
  return (
    <div className="col-span-12">
      <h1 className="table-title text-4xl font-bold mb-4">Daftar Nilai</h1>
      <div className="flex justify-center items-center p-4">
        <TableScore data={data} />
      </div>
    </div>
  );
};

export default Score;
