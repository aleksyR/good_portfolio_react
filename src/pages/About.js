import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Creuse from "../assets/vallee_de_la_creuse.webp";
import Button from "../components/Button";
import Pastille from "../components/Pastille";
import { design } from "../datas/Design";
import { development } from "../datas/Development";
import { general } from "../datas/General";
import AnimatedPage from "../components/AnimatedPage";

const About = () => {
  return (
    <>
      <AnimatedPage>
        <section className="container">
          <NavBar />
          <section className="mt-10">
            <div className="px-4 mt-10">
              <h1 className="text-[3em] mb-8 py-2 uppercase font-semibold border-nblack border-t-2 border-b-2">
                Originaire de la Creuse, Limousin
              </h1>
              <img
                className="rounded-md"
                src={Creuse}
                alt="Vallée de la Crozant, vu sur les ruines de Crozant, la rivière et les foret verdoyante"
              />
              <p className="font-thin mb-8 mt-4 text-xl">
                Originaire de la Creuse en Limousin à la suite de deux CAP, je
                me suis installé à Limoges en Haute-Vienne pendant trois années
                où j’ai travaillé dans le commerce. <br />
                <br />
                Fin 2021, je m’installe avec ma compagne à Draguignan dans le
                Var pour un nouveau projet de vie. Après une expérience
                professionnelle de paysagiste, j’ai choisi de me reconvertir et
                j’ai donc saisi la possibilité d’une formation de{" "}
                <strong>Concepteur Designer UI</strong> au centre de formation
                Mode 83 à Draguignan.
                <br />
                <br /> Attiré par le <strong>numérique</strong> et l’
                <strong>informatique</strong>, je m’épanouis au sein de cette
                nouvelle branche. J’ai à cœur de mettre en œuvre mes
                connaissances au sein d’une entreprise et d’évoluer au sein de
                celle-ci. Je mets l’<strong>expérience utilisateur</strong> au
                cœur de mes réalisations/projets.
              </p>
              <Button
                target={"_blank"}
                url={
                  "https://1drv.ms/b/s!AntF6RPfORapsVt76mKEXrQjmXmt?e=1ZYV2o"
                }
                text={"Résumé"}
              />
            </div>
          </section>
          <section className="px-4 mt-24">
            <h2 className=" font-semibold text-[2.5em] mb-14">Skills</h2>
            <div>
              <div className="flex items-center mb-8">
                <div className="bg-nblack h-[2px] w-20 mr-4"></div>
                <h3 className="uppercase font-medium text-[1.2em]">
                  Formation
                </h3>
              </div>
              <div className="flex flex-wrap">
                {general.map(({ name }) => (
                  <Pastille name={name} />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center mb-8 mt-10">
                <div className="bg-nblack h-[2px] w-20 mr-4"></div>
                <h3 className="uppercase font-medium text-[1.2em]">
                  Développement
                </h3>
              </div>
              <div className="flex flex-wrap">
                {development.map(({ name }) => (
                  <Pastille name={name} />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center mb-8 mt-10">
                <div className="bg-nblack h-[2px] w-20 mr-4"></div>
                <h3 className="uppercase font-medium text-[1.2em]">Design</h3>
              </div>
              <div className="flex flex-wrap">
                {design.map(({ name }) => (
                  <Pastille name={name} />
                ))}
              </div>
            </div>
          </section>
          <Footer />
        </section>
      </AnimatedPage>
    </>
  );
};

export default About;
