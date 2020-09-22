import React from "react";

const Card = ({ className, bgImg, name, count }) => {
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

      <div
        className="hidden absolute text-white text-opacity-75 font-bold md:block"
        style={{
          fontSize: "200px",
          letterSpacing: "-5px",
          lineHeight: "200px",
          right: "25px",
          top: "25px",
        }}
      >
        {count}
      </div>
    </div>
  );
};

export default Card;
