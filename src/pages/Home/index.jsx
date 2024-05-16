import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="about">
          <h1 className="about-title">Bonjour et Bienvenue!</h1>
          <div className="about-content">
            <img
              src="./images/myphoto.webp"
              alt=""
              className="about-image"
            ></img>
            <div className="about-text">
              <h2>A propos de moi</h2>
              <p>
                Je m'appelle Yuliia HOTS.
                <br />
                J'ai suivi la formation
                <Link href="https://openclassrooms.com/fr/paths/900-integrateur-web#overview">
                  Integrateur Web d'OpenClassrooms.
                </Link>
              </p>
              <p>
                Passionée par la langue anglaise et l'informatique depuis
                l'école,
                <br /> j'ai fait initialement mon choix vers l'anglais en début
                de carrière <br /> avec un master d'anglais (Université de
                Kharkiv). <br /> Je suis arrivée en France en Mars 2022 et j'ai
                souhaité me <br />
                réorienter vers un nouvelle activité. J'ai choisi l'informatique
                <br />
                et j'ai eu la chance de pouvoir suivre une formation de 9 mois
                <br />
                avec OpenclassRooms me permettant d'apprendre à developper
                <br />
                des applications Web et React. Durant cette formation, j'ai
                étudié <br /> différents sujets : le HTML, le CSS, le
                JavaScript, le React & Redux,
                <br /> les API REST JSON, les techniques d'optimisation de site
                <br />
                et du referencement SEO.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
