import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./about.css";
import { Link } from "react-router-dom";
import Contact from "../../components/Contact";
import { privateData } from "../../datas/privateData";
import Skills from "../../components/Skills";

function About() {
  return (
    <>
      <Header isAProposActive={true} />
      <main>
        <div className="about">
          <h1 className="about-title">A propos de moi</h1>
          <div className="about-content">
            <img
              src={privateData.image}
              alt={privateData.firstName + privateData.lastName}
              className="about-image"
            ></img>
            <div className="about-text">
              <p>
                Je m'appelle Yuliia HOTS.
                <br />
                J'ai suivi la formation
                <Link
                  to="https://openclassrooms.com/fr/paths/900-integrateur-web#overview"
                  className="courses-link"
                >
                  " Integrateur Web d'OpenClassrooms".
                </Link>
              </p>
              <p>
                Passionée par la langue anglaise et l'informatique depuis
                l'école, j'ai fait initialement mon choix vers l'anglais en
                début de carrière avec un master d'anglais (Université de
                Kharkiv). Je suis arrivée en France en Mars 2022 et j'ai
                souhaité me réorienter vers un nouvelle activité. J'ai choisi
                l'informatique et j'ai eu la chance de pouvoir suivre une
                formation de 9 mois avec OpenclassRooms me permettant
                d'apprendre à developper.
                {/* des applications Web et React. Durant cette formation, j'ai
                étudié <br /> différents sujets : le HTML, le CSS, le
                JavaScript, le React & Redux,
                <br /> les API REST JSON, les techniques d'optimisation de site
                <br />
                et du referencement SEO. */}
              </p>
            </div>
          </div>
          <Skills skills={privateData.skills} />
          <Contact
            telephone={privateData.telephone}
            email={privateData.email}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default About;
