import React from "react";
import Hamburger from "./icons/Hamburger";

const Header = () => {
  return (
    <header className="border flex justify-between items-center px-8 py-8">
      <img className="h-8" src="/assets/logo.svg" alt="Arch Logo" />
      <span>
        <Hamburger />
      </span>
    </header>
  );
};
export default Header;
