
import restaurantFoodImage from './assets/restaurant-food2.jpg';
import pages from '../../../utils/pages';
import { Link } from 'react-router-dom';
import './Hero.css';




const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1 id="title">Gourmet Haven</h1>
          <h2>New York</h2>
          <p>
            We are a family owned Company,
            focused on authentic traditional gourmet products with a modern twist.
          </p>
          <Link className="button-primary" to={pages.get('bookings').path}>
            Reserve a Table
          </Link>
        </div>
        <img 
          className="hero-image" 
          src={restaurantFoodImage} 
          alt="Restaurant food" 
        />
      </div>
    </section>
  );
};

export default Hero;
