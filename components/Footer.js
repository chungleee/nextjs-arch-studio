import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="relative bg-very-light-grey" style={{ height: "445px" }}>
      <div className="bg-white" style={{ height: "60px" }}></div>
      <div
        className="absolute bg-very-dark-blue flex justify-center items-center inset-0 mx-auto"
        style={{
          width: "120px",
          height: "120px",
        }}
      >
        <img
          style={{ height: "23px", width: "58px" }}
          src="/assets/logo-white.svg"
          alt="Arch Logo"
        />
      </div>

      <ul
        className="flex flex-col items-center justify-between mt-24 mb-8 font-bold text-sm text-medium-grey"
        style={{ height: "150px" }}
      >
        <li>Portfolio</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>

      <Button className="mx-auto">See Our Portfolio</Button>
    </footer>
  );
};

export default Footer;
