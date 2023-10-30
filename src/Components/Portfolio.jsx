/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: " Customer churn analysis 🎉",
    description:
      "Analyse des données d'une banque pour comprendre pourquoi les clients cessent d'utiliser ses services : Nettoyage des données avec Power Query, création des mesures avec des formules DAX, et mise en place d’un rapport avec Power Bi",
    url: "",
  },
  {
    title: "Un ETL avec Python",
    description:
      "Extraction des données quotidiennes d’actifs financiers avec une API, transformation en un format approprié avec Pandas, puis chargement dans une base de données SQLite.",
    url: "https://github.com/MedardTesla/ETL-with-python",
  },
  {
    title: " Sales analysis",
    description:
      "Requête SQL dans SQL Server Management Studio pour extraire les données nécessaires pour l’analyse. Connexion de Power bi avec la base de donnée et création d’un tableau de bord.",
    url: "",
  },
  {
    title: "Segmentation des menages en groupes",
    description:
      "Identifier les ménages américains qui ont des difficultés à obtenir un crédit, puis de segmenter ces ménages en groupes en vue d'une sensibilisation ciblée : Analyse exploratoire des données, utilisations de l’algorithme du Kmeans pour segmenter mes données en cluster, utilisation de l’ACP pour réduire la dimension de mes données puis les visualiser avec Plotly.",
    url: "https://github.com/MedardTesla/-Segmentation-des-menages-en-groupes",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
