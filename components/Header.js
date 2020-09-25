import React from "react";
import Hamburger from "./icons/Hamburger";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-none flex justify-between items-center px-8 py-8 md:px-0">
      <Link href="/">
        <img
          className="h-8 cursor-pointer"
          src="/assets/logo.svg"
          alt="Arch Logo"
        />
      </Link>
      <ul className="hidden font-bold text-medium-grey md:flex md:mx-auto lg:ml-24">
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li className="mx-16">
          <Link href="/about-us">About Us</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <span className="md:hidden">
        <Hamburger />
      </span>
    </header>
  );
};
export default Header;
