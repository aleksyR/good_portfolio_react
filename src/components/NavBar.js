import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="z-10 flex items-center justify-between py-2 px-4 sticky top-0 bg-nwhite bg-opacity-50 backdrop-blur-sm">
      <span>
        <Link to="/" className="text-[32px] font-medium">
          A.
        </Link>
      </span>
      <nav className="font-light uppercase space-x-4 md:space-x-8">
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/apropos">A propos</Link>
        <Link
          to="mailto:rouet.alexis99@gmail.com"
          className="font-semibold border-b-2 border-nblack">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
