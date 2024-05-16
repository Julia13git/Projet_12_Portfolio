import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./home.css";

function Home() {
  return (
    <>
      <Header />
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
        <p id="head4" class="header"></p>
        <p id="head5" class="header">
          {/* Welcome to BA designs */}
        </p>
        {/* <button>Continue</button> */}
        <div class="light x1"></div>
        <div class="light x2"></div>
        <div class="light x3"></div>
        <div class="light x4"></div>
        <div class="light x5"></div>
        <div class="light x6"></div>
        <div class="light x7"></div>
        <div class="light x8"></div>
        <div class="light x9"></div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
