import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <div className="bg-blue-800 h-52 pt-24 pb-8 rounded-b-2xl px-[120px] flex flex-col gap-3">
      <span className="text-2xl text-white font-bold">{title}</span>
      <label className="text-xl text-white font-medium">{subtitle}</label>
    </div>
  );
};

export default Header;
