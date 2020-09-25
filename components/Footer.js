import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="relative bg-very-light-grey h-445px md:flex md:h-32 md:bg-white">
      <div className="bg-white md:hidden" style={{ height: "60px" }}></div>
      <div className="md:flex md:w-4/5 md:bg-very-light-grey">
        <div
          className="absolute bg-very-dark-blue flex justify-center items-center h-120px inset-0 mx-auto md:static md:ml-0 md:mr-16 md:h-auto"
          style={{
            width: "120px",
          }}
        >
          <img
            style={{ height: "23px", width: "58px" }}
            src="/assets/logo-white.svg"
            alt="Arch Logo"
          />
        </div>

        <ul className="flex flex-col items-center justify-between h-150px mt-24 mb-8 font-bold text-sm text-medium-grey md:flex-row md:m-0 md:h-auto">
          <li>Portfolio</li>
          <li className="md:mx-16">About Us</li>
          <li>Contact</li>
        </ul>
        <div className="hidden md:bg-white"></div>
      </div>

      <Button className="mx-auto md:absolute md:h-16 md:right-0 md:top-0 md:bottom-0 md:my-auto">
        See Our Portfolio
      </Button>
    </footer>
  );
};

export default Footer;
