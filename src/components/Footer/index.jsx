import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <img
          src="../images/icons/github.webp"
          alt="Logo Github"
          className="github-logo"
        />
        <Link to="https://github.com/Julia13git" className="footer-link">
          https://github.com/Julia13git
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
