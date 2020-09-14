import React from "react";
import RightArrow from "./icons/RightArrow";

const Button = ({ children }) => {
  return (
    <button className="flex bg-very-dark-blue items-center py-4 px-6 text-white hover:bg-dark-grey">
      {children}{" "}
      <span className="ml-6">
        <RightArrow />
      </span>
    </button>
  );
};

export default Button;
