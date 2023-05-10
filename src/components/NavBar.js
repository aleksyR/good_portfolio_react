import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="flex items-end justify-between p-4 sticky top-0 bg-nwhite bg-opacity-70 bg-blur-6xl mb-10">
      <span>
        <Link to="/" className="text-[24px] font-bold">
          A.
        </Link>
      </span>
      <nav className="font-normal space-x-4">
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/apropos">A propos</Link>
        <Link to="mailto:rouet.alexis99@gail.com">Contact</Link>
      </nav>
    </header>
  );
};

export default NavBar;
