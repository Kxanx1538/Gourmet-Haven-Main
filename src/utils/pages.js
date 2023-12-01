
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import {IoBagSharp} from 'react-icons/io5';


const pages = new Map();
pages.set('home', { name: 'Home', path: '/', anchorable: true });

pages.set('menu', {
  name: 'Menu',
  path: '/menu',
  anchorable: true
});
pages.set('bookings', {
  name: 'Reservations',
  path: '/bookings',
  anchorable: true
});
pages.set('confirmedBooking', {
  name: 'Confirmed Booking',
  path: '/confirmed-booking',
  anchorable: false
});

/*pages.set('orderOnline', {
  name: 'Order Online',
  path: '/order-online',
  anchorable: true
}); */

pages.set('reviews', {
  name: 'Reviews',
  path: '/order-online',
  anchorable: true
});
pages.set('contact', {
  name: 'Contact',
  path: '/contact',
  anchorable: true
});
pages.set('about', {
  name: 'About',
  path: '/about',
  anchorable: true
});
pages.set('login', {
  name: 'Login',
  path: '/login',
  anchorable: true 
});


pages.set('cart', {
  //name: <io5 icon={IoBagSharp}/>,
  name: <FontAwesomeIcon icon={faShoppingBag}/>,
  path: '/Cart',
  anchorable: true
});



export default pages;
