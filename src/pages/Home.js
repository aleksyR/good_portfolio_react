import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import HomeWork from "../components/HomeWork";
import { works } from "../datas/Works";
import Profil from "../assets/alexis.jpeg";

const Home = () => {
  return (
    <>
      {/* SECTION PRESENTATION*/}

      <section className="container">
        <NavBar />
        <section className="px-4 mt-10">
          <div className="flex flex-col md:flex-row md:space-x-10 md:items-center">
            <h1 className="text-[3em] py-2 uppercase text-center font-semibold border-nblack border-t-2 border-b-2 md:text-left">
              Front-End Developer
              <br /> & UI Designer
            </h1>
            <img
              src={Profil}
              alt="Jeune de 26 ans, assis avec une casquette, regardant sur le coté"
              className="w-[296px] h-[auto] self-center rounded-md mt-8 mb-8 md:m-0 shadow-md"
            />
          </div>
          <h2 className="text-[2.5em] font-medium mt-4 mb-2">
            Hi!🤘 je suis Alexis,
          </h2>
          <p className="font-thin text-xl">
            Designer UI/Développeur Front-End, j’aime imaginer, concevoir et
            intégrer des interfaces qui apporte des émotions, une satisfaction
            et une utilitée aux
            <span className="line-through mx-2">utilisateurs</span>
            personnes.
          </p>
          <div className="flex items-center space-x-10 mt-10">
            <Button text="Voir mes réalisations" url={"/portfolio"} />
            <Button
              text="Résumé"
              url={
                "https://alexisrouet.fr/wp-content/uploads/2023/04/CV_ROUET_Alexis_DeveloppeurWeb.pdf"
              }
            />
          </div>
        </section>

        {/* SECTION PROJETS RECENTS */}
        <section className="px-4 mt-24">
          <div className="flex items-center mb-5">
            <div className="bg-nblack h-[2px] w-20 mr-4"></div>
            <h2 className="uppercase font-semibold text-[1.2em]">
              Projets récents
            </h2>
            {/* <span className="text-4xl font-bold opacity-10">Réalisations</span> */}
          </div>
          {/* Itération sur le tableau de works pour récuprérer les informations */}
          {works
            .map(({ id, name, category, url }) => (
              <HomeWork
                key={id}
                name={name}
                id={id}
                category={category}
                url={url}
              />
            ))
            .slice(0, 3)}
        </section>
        <section className="mt-24 px-4">
          <div className="flex items-center mb-10">
            <div className="bg-nblack h-[2px] w-20 mr-4"></div>
            <h2 className="uppercase font-semibold text-[1.2em]">
              Qui suis-je ?
            </h2>
            {/* <span className="text-4xl font-bold opacity-10">Réalisations</span> */}
          </div>
          <h3 className="text-[2.5em] font-medium mt-14 mb-2">
            Front-End Développeur & UI Designer basé à Draguignan, Var.
          </h3>
          <p className="font-thin text-xl">
            Fasciné par l’informatique et le web, je découvre et intègre une
            formation professionnalisante de Designer UI chez Mode 83 à
            Draguignan dans le Var.
            <br /> <br /> Au-delà de l’apprentissage, je me découvre une réel
            passion pour cet univers et ce métier. Par-dessus le résultat qui
            apporte une satisfaction en cas de réussite, j’aime le
            processus/chemin nécessaire pour concevoir des interfaces répondant
            aux besoins du projet et des utilisateurs. <br />
            <br />
            Apprenez en plus sur moi{" "}
            <a href="/apropos" className="font-semibold">
              ici
            </a>
            .
          </p>
        </section>
        <Footer />
      </section>
    </>
  );
};

export default Home;
