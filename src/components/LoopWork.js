import React from "react";
import Button from "../components/Button";

const LoopWork = ({ name, category, id, description, url, cover, alt }) => {
  return (
    <>
      <div className="mb-20">
        <img
          src={cover}
          alt={alt}
          className="rounded-md mb-2 shadow-sm object-cover h-auto w-full"
        />
        <h3 className="font-semibold text-[1.8em] capitalize">{name}</h3>
        <p className="mb-8 font-light">{description}</p>
        <Button url={url} text={"Plus de détails"} />
      </div>
    </>
  );
};

export default LoopWork;
