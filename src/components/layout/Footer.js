
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoWhiteImage from './assets/logo-white.png';
import { Link } from 'react-router-dom';
import pages from '../../utils/pages';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLocationDot,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import './Footer.css';






const contacts = [
  { icon: faPhone, info:   '(212) 001-1000', },
  { icon: faEnvelope, info: 'customer@llemon.com', },
  { icon: faLocationDot, info: '100 Central Park, NY, NY', },
];

const socials = [
  { icon: faFacebook, name: 'facebook', },
  { icon: faTwitter, name: 'twitter', },
  { icon: faInstagram, name: 'instagram', },
  { icon: faYoutube, name: 'youtube', },
];

const navLinks = Array.from(pages.values()).filter(page => page.anchorable);

const Footer = () => {
  
  const currentDate = new Date().toLocaleDateString();
  //const currentYear = new Date().getFullYear();



  return (
    <footer className="site-footer">
      <div className="container grid">
        <img 
          className="site-footer-logo" 
          src={logoWhiteImage} 
          alt="Gourmet Haven" 
        />
        <nav className="site-footer-nav">
          <h4>Sitemap</h4>
          <ul>
            {navLinks.map((navLink, index) => 
              <li key={index}>
                <Link to={navLink.path}>{navLink.name}</Link>
              </li>
            )}
          </ul>
        </nav>

        <div className="site-footer-contact">
          <h4>Contact us</h4>
          <address>
            {contacts.map((contact, index) =>
            <p key={index}>
              <FontAwesomeIcon icon={contact.icon} /> {contact.info}
            </p>
          )}
          </address>
        </div>

        
        <div className="site-footer-social">
          <h4>Connect with us</h4>
          {socials.map((social, index) => 
            <a 
              key={index} 
              href={`https://www.${social.name}.com`} 
              target="_blank" 
              rel="noreferrer" 
            >
              <FontAwesomeIcon icon={social.icon} size="lg" />
            </a>
          )}
        </div>
      </div>
      <div>
        {/*<p id="developer">Designed by Aisha • © {currentYear} </p> */}
        <p id="developer">Designed by Aisha • © {currentDate} </p>
      </div>
    </footer>
  );
};

export default Footer;
