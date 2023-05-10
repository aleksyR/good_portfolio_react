import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const HomeWork = ({ name, category, id, description, url, cover }) => {
  return (
    <>
      <div className="flex w-full justify-between items-end space-y-10 border-b-4 border-nblack pb-2">
        <h3 className="text-3xl font-semibold capitalize w-[50%]">{name}</h3>
        <a href={url} target="blank">
          <ArrowForwardIcon h={40} w={40} className="-rotate-45" />
        </a>
        <div className="flex flex-col items-end">
          <span className="font-bold">{id}</span>
          <span className="font-light">{category}</span>
        </div>
      </div>
    </>
  );
};

export default HomeWork;
