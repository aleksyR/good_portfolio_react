import React from "react";
import Button from "../components/Button";

const LoopWork = ({ name, category, id, description, url, cover }) => {
  return (
    <>
      <div className="mb-24">
        <img
          src={cover}
          alt={description}
          className="rounded-md mb-2 shadow-sm object-cover h-[auto] w-full"
        />
        <div>
          <h3 className="font-semibold text-[2em] capitalize">{name}</h3>
          <p className="mb-8 font-thin text-xl">{description}</p>
          <Button url={url} text={"Plus de détails"} />
        </div>
      </div>
    </>
  );
};

export default LoopWork;
