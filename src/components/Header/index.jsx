import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header>
      {/* <img src="/images/logo.webp" alt="logo" className="logo" /> */}
      <span className="logo">YH</span>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
        <Link to="/projects">Projets</Link>
      </nav>
    </header>
  );
}

export default Header;
