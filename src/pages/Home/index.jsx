import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./home.css";

function Home() {
  return (
    <>
      <Header isAccueilActive={true} />
      <main className="main">
        <p id="head1" className="header">
          Bonjour et Bienvenue!
        </p>
        <p id="head2" className="header">
          Je suis Yuliia Hots
        </p>
        <p id="head3" className="header">
          développeuse front-end.
        </p>

        {/* Welcome to BA designs */}

        {/* <button>Continue</button> */}
        <div className="light x1"></div>
        <div className="light x2"></div>
        <div className="light x3"></div>
        <div className="light x4"></div>
        <div className="light x5"></div>
        <div className="light x6"></div>
        <div className="light x7"></div>
        <div className="light x8"></div>
        <div className="light x9"></div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
