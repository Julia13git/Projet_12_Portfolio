import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <img src="/images/icons8-github-64.png" alt="Logo Github" />
        <Link to="https://github.com/Julia13git" className="footer-link">
          https://github.com/Julia13git
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
