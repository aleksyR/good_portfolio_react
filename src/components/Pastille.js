import React from "react";

const Pastille = (props) => {
  return (
    <>
      <div className="bg-nblack py-1 px-4 rounded-full mr-2 mb-4">
        <p className="font-thin text-nwhite text-center">{props.name}</p>
      </div>
    </>
  );
};

export default Pastille;
