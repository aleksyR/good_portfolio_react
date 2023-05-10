import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Footer = () => {
  return (
    <>
      <footer className="mt-24 p-4 border-nblack border-t-2 ">
        <div>
          <a
            className="text-2xl font-semibold"
            href="mailto:rouet.alexis99@gmail.com">
            rouet.alexis99@gmail.com
          </a>
          <p className="font-light mt-2 w-60">
            J’aime imaginer, concevoir et intégrer des interfaces.
          </p>
          <div className=" mt-8 mb-10">
            <span>
              <a
                className="font-semibold"
                target="blank"
                href="https://www.linkedin.com/in/alexis-rouet-57782617a/">
                LinkedIn
              </a>
            </span>
            <ArrowForwardIcon w={18} h={18} />
          </div>
          <p className="text-sm">
            Ce site a été crée avec ♡ | Copyright© Alexis Rouet.
          </p>
          <a href="#" className="text-sm underline">
            Mentions légales/Confidentialité
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
