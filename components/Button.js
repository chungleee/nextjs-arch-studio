import React from "react";
import RightArrow from "./icons/RightArrow";

const Button = ({ children, className, style }) => {
  return (
    <button
      className={`flex font-bold text-sm bg-very-dark-blue items-center justify-center py-4 px-6 text-white hover:bg-dark-grey ${className}`}
      style={style}
    >
      {children}{" "}
      <span className="ml-6">
        <RightArrow />
      </span>
    </button>
  );
};

export default Button;
