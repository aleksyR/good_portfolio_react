import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import HomeWork from "../components/HomeWork";
import { works } from "../datas/Works";
import Profil from "../medias/alexis.jpeg";

const Home = () => {
  return (
    <>
      <NavBar />
      <section className="mx-4 flex flex-col">
        <img
          src={Profil}
          alt=""
          className="self-center w-[156px] h-[156px] rounded-full mb-8 shadow-lg"
        />

        <h1 className="text-[2.5em] py-2 uppercase text-center font-semibold border-nblack border-t-2 border-b-2">
          Web Developer
          <br /> & UI Designer
        </h1>

        <h2 className="text-[2em] font-medium mt-8 mb-2">
          Hi!🤘 je suis Alexis,
        </h2>
        <p className="font-light">
          Designer UI/Développeur Front-End, j’aime imaginer, concevoir et
          intégrer des interfaces qui apporte des émotions, une satisfaction et
          une utilitée aux
          <span className="line-through mx-2">utilisateurs</span>
          personnes.
        </p>
        <Button />
      </section>
      <section className="mx-4 mt-20">
        <div className="flex items-center">
          <div className="bg-nblack h-[2px] w-20 mr-4"></div>
          <h2 className="uppercase font-semibold text-[1.2em]">
            Projets récents
          </h2>
          <span className="text-4xl font-bold opacity-10">Réalisations</span>
        </div>
        {works.map(({ id, name, category, url }) => (
          <div key={id}>
            {" "}
            <HomeWork name={name} id={id} category={category} url={url} />
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
};

export default Home;
