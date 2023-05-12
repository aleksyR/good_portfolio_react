import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <>
      <footer className="mt-36 p-4 border-nblack border-t-2 flex justify-between ">
        <div>
          <a
            className="text-2xl font-semibold sm:text-[2.5em]"
            href="mailto:rouet.alexis99@gmail.com">
            rouet.alexis99@gmail.com
          </a>
          <p className="font-thin mt-2 ">
            J’aime imaginer, concevoir et intégrer des interfaces.
          </p>
          <div className=" mt-8 mb-10 flex space-x-4">
            <a target="blank" href="https://github.com/aleksyR">
              <img src={github} alt="Logo GitHub" height={24} width={24} />
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/in/alexis-rouet-57782617a/">
              <img src={linkedin} alt="Logo LinkedIn" height={24} width={24} />
            </a>
          </div>
          <div className="md:flex md:space-x-8">
            <p className="text-sm font-thin">
              Ce site a été crée avec ♡ | Copyright© Alexis Rouet.
            </p>
            <a href="/legal" className="text-sm font-thin underline">
              Mentions légales/Confidentialité
            </a>
          </div>
        </div>
        <ScrollToTop
          smooth
          className="flex scroll items-center justify-center"
          color="#f5f5f5"
        />
      </footer>
    </>
  );
};

export default Footer;
