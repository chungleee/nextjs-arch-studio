import React from "react";
import RightArrow from "./icons/RightArrow";

const ArrowButton = () => {
  return (
    <button
      className="flex bg-very-dark-blue items-center justify-center text-white hover:bg-dark-grey"
      style={{ height: "80px", width: "80px" }}
    >
      <RightArrow />
    </button>
  );
};

export default ArrowButton;
