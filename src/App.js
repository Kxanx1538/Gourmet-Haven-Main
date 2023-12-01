import ConfirmedBooking from './components/pages/Bookings/ConfirmedBooking';
import RegisterLogin from './components/pages/Register&Login/RegisterLogin';
/*import UnderConstruction from './components/pages/UnderConstruction'; */
//import OrderOnline from './components/pages/Home/OrderOnline';
import OurMenu from './components/pages/Home/OurMenu';
import OurStory from './components/pages/Home/OurStory';
import Contact from './components/pages/Home/Contact';
import Reviews from './components/pages/Home/Reviews';
//import OurMenu from './components/pages/Home/OurMenu';
import Bookings from './components/pages/Bookings';
import NotFound from './components/pages/NotFound';
import Layout from './components/layout/Layout';
import Cart from './components/pages/Home/Cart';
import Home from './components/pages/Home';
import pages from './utils/pages';
import {
  Route,
  Routes
} from 'react-router-dom';






const App = () => {
 
  return (
    <>
      <Layout>
        <Routes>
          <Route path={pages.get('home').path} element={<Home />} />
          <Route
            path={pages.get('menu').path}
            element={<OurMenu/>}
          />
          <Route
            path={pages.get('about').path}
            element={<OurStory/>}
          />
          <Route
            path={pages.get('contact').path}
            element={<Contact/>}
          />
          <Route
            path={pages.get('reviews').path}
            element={<Reviews/>}
          />
          <Route path={pages.get('bookings').path} element={<Bookings />} />
          <Route
            path={pages.get('confirmedBooking').path}
            element={<ConfirmedBooking />}
          />
          {/*<Route
            path={pages.get('orderOnline').path}
            element={<OrderOnline/>}
          /> */}
          <Route
            path={pages.get('login').path} 
            element={<RegisterLogin />} 
          />
          <Route
            path={pages.get('cart').path} 
            element={<Cart/>} 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
