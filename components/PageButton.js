import React from "react";

const PageButton = ({ children }) => {
  return (
    <button
      className="flex bg-very-dark-blue items-center justify-center text-white hover:bg-very-light-grey hover:text-medium-grey"
      style={{ height: "80px", width: "80px" }}
    >
      {children}
    </button>
  );
};

export default PageButton;
