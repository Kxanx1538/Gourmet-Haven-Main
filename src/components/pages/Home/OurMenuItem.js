
// OurMenuItem.js

import React from 'react';


const OurMenuItem = ({ id, image, title, price, description, handleAddToCart}) => {
    const formattedPrice = price.toLocaleString(undefined, { style: 'currency', currency: 'USD' });



    const handleItemClick = () => {
        const item = {
          //id,
          image,
          title,
          price,
          description,
          id: Math.random().toString(),
        };
        handleAddToCart(item); // Call the handleAddToCart function passed from OnlineMenu
    };


    return (
      <div className='online-menu-item'>
        <img src={image} alt={title} className="round-image" id="takeout-menu-item-image"/>
        <h3 id="h3-1">{title}</h3>
        <p id="price">{formattedPrice}</p>
        <p id="p-1">{description}</p>
        <button name="Add to cart" className="cta-button" onClick={handleItemClick}>Add to cart</button>
      </div>
    );
};
export default OurMenuItem; 

