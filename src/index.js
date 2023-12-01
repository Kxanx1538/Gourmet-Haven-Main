
import ScrollToTop from './components/layout/ScrollToTop';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'modern-normalize/modern-normalize.css';
import { CartProvider } from './components/pages/Home/CartContext';
import ReactDOM from 'react-dom/client';
//import ShoppingCart from './components/pages/Home/Cart';
import React from 'react';
import App from './App';
import './index.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider> {/* Wrap the BrowserRouter with CartProvider */}
        <ScrollToTop />
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();








/*import ScrollToTop from './components/layout/ScrollToTop';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'modern-normalize/modern-normalize.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import './index.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); */
