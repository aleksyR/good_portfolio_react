import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Creuse from "../assets/vallee_de_la_creuse.webp";
import Button from "../components/Button";
import Pastille from "../components/Pastille";
import { design } from "../datas/Design";
import { development } from "../datas/Development";
import { general } from "../datas/General";

const About = () => {
  return (
    <>
      <section className="container">
        <NavBar />
        <section className="mt-10">
          <div className="px-4 mt-10">
            <h1 className="text-[3em] mb-8 py-2 uppercase text-center font-semibold border-nblack border-t-2 border-b-2">
              Originaire de la Creuse, Limousin
            </h1>
            <img
              src={Creuse}
              alt="Vallée de la Crozant, vu sur les ruines de Crozant, la rivière et les foret verdoyante"
            />
            <p className="font-thin mb-8 mt-4 text-xl">
              Originaire de la Creuse en Limousin à la suite de deux CAP, je me
              suis installé à Limoges en Haute-Vienne pendant trois années où
              j’ai travaillé dans le commerce. <br />
              <br />
              Fin 2021, je m’installe avec ma compagne à Draguignan dans le Var
              pour un nouveau projet de vie. Après une expérience
              professionnelle de paysagiste, j’ai choisi de me reconvertir et
              j’ai donc saisi la possibilité d’une formation de{" "}
              <strong>Concepteur Designer UI</strong> au centre de formation
              Mode 83 à Draguignan.
              <br />
              <br /> Attiré par le <strong>numérique</strong> et l’
              <strong>informatique</strong>, je m’épanouis au sein de cette
              nouvelle branche. J’ai à cœur de mettre en œuvre mes connaissances
              au sein d’une entreprise et d’évoluer au sein de celle-ci. Je mets
              l’<strong>expérience utilisateur</strong> au cœur de mes
              réalisations/projets.
            </p>
            <Button
              url={
                "https://alexisrouet.fr/wp-content/uploads/2023/04/CV_ROUET_Alexis_DeveloppeurWeb.pdf"
              }
              text={"Résumé"}
            />
          </div>
        </section>
        <section className="px-4 mt-24">
          <div className="flex items-center mb-10">
            <div className="bg-nblack h-[2px] w-20 mr-4"></div>
            <h2 className="uppercase font-semibold text-[1.2em]">Skills</h2>
            {/* <span className="text-4xl font-bold opacity-10">Réalisations</span> */}
          </div>
          <div>
            <h3 className="text-2xl font-regular mb-4">Formation</h3>
            <div className="flex flex-wrap">
              {general.map(({ name }) => (
                <Pastille name={name} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-regular mb-4 mt-8">Developpement</h3>
            <div className="flex flex-wrap">
              {development.map(({ name }) => (
                <Pastille name={name} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-regular mb-4 mt-8">Design</h3>
            <div className="flex flex-wrap">
              {design.map(({ name }) => (
                <Pastille name={name} />
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </section>
    </>
  );
};

export default About;
