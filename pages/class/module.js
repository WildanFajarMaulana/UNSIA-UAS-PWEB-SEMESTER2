import React from "react";
import { dataListModule, dataQuiz } from "../../utils/data";
import Link from "next/link";

const Options = (props) => {
  return (
    <div className="min-w-full bg-white p-3 rounded-md shadow-lg hover:bg-gray-200 hover:cursor-pointer border-1 border-gray-200 mb-2">
      <Link href={props.url} className="text-slate-800 font-medium whitespace-normal w-full">
        {props.label}
      </Link>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-full"
          src={props.videoUrl}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Class = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-9">
          <div className="text-xl text-slate-800 mb-12 font-bold">
            Daftar Modul
          </div>
          {dataListModule &&
            dataListModule.map((item, index) => (
              <Options
                key={index}
                label={item.title}
                url={`/class/detail/${item.id}`}
              />
            ))}
        </div>
        <div className="col-span-3">
          <div className="text-xl text-slate-800 mb-12 font-bold">
            Daftar quiz
          </div>
          {dataQuiz &&
            dataQuiz.map((item, index) => (
              <Options
                key={index}
                label={item.title}
                url={`/class/quiz/${item.id}`}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Class;
