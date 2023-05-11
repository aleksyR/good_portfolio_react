import React from "react";
import { Link } from "react-router-dom";

const Button = ({ url, text }) => {
  return (
    <>
      <button className=" border-b-2 border-nblack w-[auto] px-2 py-2 uppercase font-semibold">
        <Link to={url}>{text}</Link>
      </button>
    </>
  );
};

export default Button;
