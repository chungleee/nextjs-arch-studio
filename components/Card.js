import React from "react";

const Card = ({ className, bgImg, name }) => {
  return (
    <div
      className={`bg-${bgImg} relative ${className ? className : ""}`}
      style={{ minHeight: "240px" }}
    >
      <div
        className="absolute text-white"
        style={{ bottom: "1.5rem", left: "1.5rem" }}
      >
        <h1 className="font-bold  text-lg">{name}</h1>
        <p className="text-sm ">View All Projects</p>
      </div>
    </div>
  );
};

export default Card;
