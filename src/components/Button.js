import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <>
      <button className="bg-nblack mt-10 px-8 py-4 rounded-bl-[32px] rounded-tr-[32px] text-nwhite font-medium">
        <Link to="/portfolio">Voir mes réalisations</Link>
      </button>
    </>
  );
};

export default Button;
