import React from "react";
import { dataListModule } from "../utils/data";

const Options = (props) => {
  return (
    <div className="min-w-full bg-white p-3 rounded-md shadow-lg hover:bg-gray-200 hover:cursor-pointer border-1 border-gray-200 mb-2">
      <a
        href={props.url}
        className="text-slate-800 font-medium whitespace-normal"
      >
        {props.label}
      </a>
    </div>
  );
};

const Class = () => {
  const listQuiz = dataListModule.map((item) => ({
    judul: `Quiz ${item.judul}`,
    url: `/quiz-${item.url.replace("/", "")}`,
    jumlah: Math.floor(Math.random() * 10) + 1,
  }));

  return (
    <>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-9">
          <div className="text-xl text-slate-800 mb-12 font-bold">
            Daftar Modul
          </div>
          {dataListModule &&
            dataListModule.map((item, index) => (
              <Options key={index} label={item.judul} url={item.url} />
            ))}
        </div>
        <div className="col-span-3">
          <div className="text-xl text-slate-800 mb-12 font-bold">
            Daftar quiz
          </div>
          {listQuiz &&
            listQuiz.map((item, index) => (
              <Options key={index} label={item.judul} url={item.url} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Class;
