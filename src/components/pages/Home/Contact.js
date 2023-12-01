

import {faEnvelope, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css';



const contacts = [
    { icon: faPhone, info:   '(212) 001-1000', },
    { icon: faEnvelope, info: 'customer@llemon.com', },
    { icon: faLocationDot, info: '100 Central Park, NY, NY', },
];
  
const Contact = () => {

  return (
  <div className="site-contact">
    <h4>Contact us</h4>
    <address>
        {contacts.map((contact, index) =>
        <p key={index}>
            <FontAwesomeIcon icon={contact.icon} /> {contact.info}
        </p>
        )}
    </address>
  </div>
  );
};
export default Contact;