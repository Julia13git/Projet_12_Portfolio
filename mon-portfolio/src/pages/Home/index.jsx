import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./home.css";

function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="about">
          <h1 className="about-title">Bonjour et Bienvenue!</h1>
          <div className="about-content">
            <img
              src="./images/moi1-440.webp"
              alt=""
              className="about-image"
            ></img>
            <div className="about-text">
              <h2>A propos de moi</h2>
              <p>
                Je m'appelle Yuliia Hots.
                <br />
                Je suis étudiante de la formation Integrateur Web
                d'OpenClassrooms.
              </p>
              <p>
                Passionée par la langue anglaise et l'informatique depuis
                <br />
                l'école, j'ai fait mon choix vers l'anglais. Je n'ai jamais
                <br />
                pensé de retourner vers ma deuxième préference, mais la vie nous
                <br />
                donne toujours les solutions. Il y a 9 mois comme j'ai commencé
                <br />
                ma formation avec OpenClassrooms, je savais rien et maintenant
                ..... <br />
                je sais developper les projets avec HTML, CSS, JavaScript,
                <br />
                React, React-Router, Redux en optimisant la performance du code
                <br />
                et du referencement SEO aux projets.
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
