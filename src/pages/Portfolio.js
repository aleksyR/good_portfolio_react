import React from "react";
import NavBar from "../components/NavBar";
import { works } from "../datas/Works";
import LoopWork from "../components/LoopWork";
import Footer from "../components/Footer";
import { TriangleDownIcon } from "@chakra-ui/icons";

const Portfolio = () => {
  return (
    <>
      <section className="container">
        <NavBar />
        <section className="px-4 mt-10 min-h-[550px] flex flex-col justify-between">
          <div>
            <h1 className="text-[4em] font-medium mb-4 uppercase border-nblack border-t-2 border-b-2">
              Portfolio
            </h1>
            <p className="font-light">
              Voici mon portfolio avec mes projets/travaux (print, design web,
              intégration).
            </p>
          </div>
          <div className="self-end flex items-center space-x-2">
            <span className="font-semibold uppercase">
              Voir mes réalisations
            </span>
            <TriangleDownIcon h={16} w={16} />
          </div>
        </section>
        <section className="mt-20 px-4">
          {works.map(({ name, description, cover, alt, id }) => (
            <LoopWork
              name={name}
              description={description}
              alt={alt}
              cover={cover}
              key={id}
            />
          ))}
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Portfolio;
