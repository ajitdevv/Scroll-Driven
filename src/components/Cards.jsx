import React from "react";

const Cards = ({ title, description, bg }) => {
  return (
    <div className={`p-6 rounded-2xl text-black backdrop-blur-xs hover:backdrop-blur-2xl transition-all duration-300  border border-white/20  Homecard w-fit ${bg} shadow-(--shadow)`}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="whitespace-nowrap">{description}</p>
    </div>
  );
};

export default Cards;
