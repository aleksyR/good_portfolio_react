import avsa from "../assets/works/avsa_mobile_laptop.webp";
import cv20 from "../assets/works/cv2.0_laptop_mobile.webp";
import portfolio from "../assets/works/portfolio_old.webp";
import musclefort from "../assets/works/musclefort_mobile_laptop.webp";
import blog from "../assets/works/mockup_blog_rand.webp";
import marionEtoile from "../assets/works/marion_etoile_laptop_mobile.webp";

export const works = [
  {
    name: "avsa",
    category: "Website",
    id: "01",
    description: "Réalisation d’une refonte du site d’un refuge pour chien.",
    url: "https://avsa.alexisrouet.fr/",
    cover: avsa,
  },
  {
    name: "Portfolio",
    category: "Website",
    id: "02",
    description: "Première portfolio à l'aide de WordPress + Elementor Pro",
    url: "https://old-cv.alexisrouet.fr/",
    cover: portfolio,
  },
  {
    name: "CV 2.0",
    category: "Website",
    id: "03",
    description: "Projet de formation | Concevoir un site de type CV 2.0.",
    url: "http://cv-dev.alexisrouet.fr/",
    cover: cv20,
  },
  {
    name: "Muscles Forts",
    category: "Website",
    id: "04",
    description: "Intégration d’une maquette réalisée par un camarade.",
    url: "https://musclefort.alexisrouet.fr/",
    cover: musclefort,
  },
  {
    name: "Jake Gryffs",
    category: "Prototype",
    id: "05",
    description: "Concept d’un blog sur la randonnée.",
    url: "",
    cover: blog,
  },

  {
    name: "Marion Etoile",
    category: "Prototype",
    id: "06",
    description: "Simulation d’un cas concret.",
    url: "",
    cover: marionEtoile,
  },
];
