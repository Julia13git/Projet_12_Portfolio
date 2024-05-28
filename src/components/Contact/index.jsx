import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact({ linkedin, email }) {
  return (
    <div className="contacts">
      <h2 className="contacts-title">Contacts</h2>
      <div className="contacts-content">
        <div className="contacts-info">
          <img
            src="./images/icons/linkedin.webp"
            alt="Linkedin"
            className="linkedin-logo"
          />
          <p>{linkedin}</p>
        </div>
        <div className="contacts-info">
          <FontAwesomeIcon icon={faEnvelope} className="contacts-icon" />
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}
export default Contact;
