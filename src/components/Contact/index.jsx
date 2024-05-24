import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact({ telephone, email }) {
  return (
    <div className="contacts">
      <h2 className="contacts-title">Contacts</h2>
      <div className="contacts-content">
        <div className="contacts-info">
          <FontAwesomeIcon icon={faPhone} className="contacts-icon" />
          <p>{telephone}</p>
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
