import React from "react";
import { Link } from "react-router-dom";

const Button = ({ url, text, target }) => {
  return (
    <>
      <button className=" border-b-2 border-nblack w-[auto] px-2 py-2 uppercase font-semibold">
        <Link to={url} target={target}>
          {text}
        </Link>
      </button>
    </>
  );
};

export default Button;
