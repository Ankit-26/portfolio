import React from "react";
import MobileMenu from "./MobileMenu";

function Header() {
  return (
    <header className=" py-5 bg-white-400 w-100 mb-10 flex items-center font-bold font-sans justify-between px-10 max-md:px-5 text-lg text-gray-800 sticky top-0">
      <a href="#home" className="ml-2">
        ankit.dev
      </a>
      <nav className=" ">
        <div className=" ln-mobi-menu md:hidden">
          <MobileMenu />
        </div>
        <ul className="list-none flex gap-6 max-md:hidden">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
