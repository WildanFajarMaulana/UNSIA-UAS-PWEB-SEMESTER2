import React from "react";

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
  const module = [
    {
      judul: "HTML Dasar",
      url: "/html-dasar",
    },
    {
      judul: "CSS Dasar",
      url: "/css-dasar",
    },
    {
      judul: "JavaScript Dasar",
      url: "/javascript-dasar",
    },
    {
      judul: "Bootstrap Framework",
      url: "/bootstrap-framework",
    },
    {
      judul: "Node.js dan NPM",
      url: "/nodejs-npm",
    },
    {
      judul: "React.js",
      url: "/reactjs",
    },
    {
      judul: "Vue.js",
      url: "/vuejs",
    },
    {
      judul: "Express.js",
      url: "/expressjs",
    },
    {
      judul: "MongoDB",
      url: "/mongodb",
    },
    {
      judul: "RESTful API",
      url: "/restful-api",
    },
    {
      judul: "Authentication",
      url: "/authentication",
    },
    {
      judul: "Webpack dan Babel",
      url: "/webpack-babel",
    },
    {
      judul: "TypeScript",
      url: "/typescript",
    },
    {
      judul: "Testing dan Debugging",
      url: "/testing-debugging",
    },
    {
      judul: "Deployment ke Heroku",
      url: "/deployment-heroku",
    },
  ];

  const listQuiz = module.map((item) => ({
    judul: `Quiz ${item.judul}`,
    url: `/quiz-${item.url.replace("/", "")}`,
    jumlah: Math.floor(Math.random() * 10) + 1,
  }));

  return (
    <>
      <div className="col-span-9">
        <div className="text-xl text-slate-800 mb-12 font-bold">
          Daftar Modul
        </div>
        {module &&
          module.map((item, index) => (
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
    </>
  );
};

export default Class;
