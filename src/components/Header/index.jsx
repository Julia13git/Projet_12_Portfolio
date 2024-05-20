import { Link } from "react-router-dom";
import "./header.css";

function Header({ isAccueilActive, isAProposActive, isProjectsActive }) {
  return (
    <header>
      <span className="logo">YH</span>
      <nav>
        <Link to="/" className={isAccueilActive ? "active" : null}>
          Accueil
        </Link>
        <Link to="/about" className={isAProposActive ? "active" : null}>
          A propos
        </Link>
        <Link to="/projects" className={isProjectsActive ? "active" : null}>
          Projets
        </Link>
      </nav>
    </header>
  );
}

export default Header;
