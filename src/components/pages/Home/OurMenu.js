
//OurMenu.js

import couscoussaladImage from './assets/couscous-salad.jpg';
import lemonDessertImage from './assets/lemon-dessert.jpg';
import grilledfishImage from './assets/grilled-fish.jpg';
import babaganoushImage from './assets/baba-ganoush.jpg';
import spanakopitaImage from './assets/spanakopita.jpg';
import greekSaladImage from './assets/greek-salad.jpg';
import bruschettaImage from './assets/bruschetta.jpg';
import tabboulehImage from './assets/tabbouleh1.jpg';
import shakshukaImage from './assets/shakshuka.jpg';
import tiramisuaImage from './assets/tiramisu.jpg';
import moussakaImage from './assets/moussaka.jpg';
import basbousaImage from './assets/basbousa.jpg';
import React, { useState } from 'react';
//import { useCart } from './CartContext';
import OurMenuItem from './OurMenuItem';
import './OurMenu.css';
//import Cart from './Cart';




const OnlineMenu = () => {
    const [cartItems, setCartItems] = useState([]);

     // eslint-disable-next-line
    const removeItemFromCart = (itemId) => {
        const updatedItems = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedItems);
    };
    // eslint-disable-next-line
    const updateItemQuantity = (itemId, newQuantity) => {
        const updatedItems = cartItems.map((item) => {
          if (item.id === itemId) {
            return { ...item, quantity: newQuantity };
          }
          return item;
        });
        setCartItems(updatedItems);
    }; 
  


    const handleAddToCart = (item) => {
        const newItem = {
        ...item,
        id: cartItems.length + 1};
        setCartItems([...cartItems, newItem]);
    };

      // eslint-disable-next-line
    /*const calculateSubtotal = () => {
        const subtotal = cartItems.reduce((accumulator, item) => {
          const price = parseFloat(item.price);
          const quantity = parseInt(item.quantity);
          console.log("Price:", price, "Quantity:", quantity);
          if (!isNaN(price) && !isNaN(quantity)) {
            return accumulator + price * quantity;
          } else {
            return accumulator;
          }
        }, 0);
        console.log("Subtotal:", subtotal);
        return subtotal.toFixed(2);
      }; */




    return(
        <div id="main-container">
             <h2 id="OnlineMenu">Our Take Out Menu</h2>
            <div id=" OnlineOrder">
                <div className="OnlineMenuItem">

                    <div id="appetizer-div">
                        <h2 id="appetizers">Appetizers</h2>
                        <section id="appetizers-section">
                            <OurMenuItem
                            //id={1}
                            image={bruschettaImage}
                            price= {14.99}
                            title="Bruschetta"
                            description="An Italian appetizer consisting of toasted bread topped with ripe tomatoes, garlic, basil, and drizzled with olive oil."
                            handleAddToCart={handleAddToCart}  // Pass the handleAddToCart function as a prop
                            />
                            <OurMenuItem
                            id={2}
                            image={spanakopitaImage}
                            price={16.93}
                            title="Spanakopita"
                            description="Flaky phyllo pastry filled with a mixture of spinach, feta cheese, onions, and herbs."
                            handleAddToCart={handleAddToCart}  // Pass the handleAddToCart function as a prop
                            />
                            <OurMenuItem
                            id={3}
                            image={babaganoushImage}
                            price={15.98}
                            title="Baba Ganoush"
                            description="A smoky and flavorful dip of roasted eggplant blended with tahini, garlic, lemon juice, and olive oil."
                            handleAddToCart={handleAddToCart}  // Pass the handleAddToCart function as a prop
                            />
                        </section>
                    </div>
                    <div>
                        <h2 id="salads">Salads</h2>
                        <section id="salads-section">
                            <OurMenuItem
                            id={4}
                            image={greekSaladImage}
                            price= {22.95}
                            title="Greek salad"
                            description="Our famous Greek salad of crispy lettuce, peppers, olives, and our New York-style feta cheese. Garnished with crispy onion and salty capers."
                            handleAddToCart={handleAddToCart}  // Pass the handleAddToCart function as a prop
                        />
                           <OurMenuItem
                           id={5}
                           image={tabboulehImage}
                           price={19.95}
                           title="abbouleh"
                           description="A refreshing Lebanese salad made with bulgur wheat, finely chopped parsley, tomatoes, onions, mint, and a tangy dressing of lemon juice and olive oil."
                           handleAddToCart={handleAddToCart}  // Pass the handleAddToCart function as a prop
                        />
                           <OurMenuItem
                           id={6}
                           image={couscoussaladImage}
                           price= {18.95}
                           title="Couscous Salad"
                           description="A North African dish made from steamed granules of durum wheat semolina, often served with stewed vegetables, meat, or fish of your choice, and flavored with aromatic spices."
                           handleAddToCart={handleAddToCart}  // Pass the handleAddToCart function as a prop
                        />
                        </section>
                    </div>
                    <div>
                        <h2 id="main-courses">Main Courses</h2>
                        <section id="main-course-section">
                            <OurMenuItem
                            id={7}
                            image={grilledfishImage}
                            price={21.95}
                            title="Grilled fish"
                            description="The fish is swiftly grilled over medium- or high-heat coals or over medium- or high-heat gas grill burners."
                            handleAddToCart={handleAddToCart}  // Pass the handleAddToCart function as a prop
                        />
                           <OurMenuItem
                           id={8}
                           image={moussakaImage}
                           price={15.95}
                           title="Moussaka"
                           description="A classic Greek dish made with layers of eggplant, ground meat, and béchamel sauce, baked to perfection."
                           handleAddToCart={handleAddToCart}  // Pass the handleAddToCart function as a prop
                        />
                           <OurMenuItem
                            id={9}
                            image={shakshukaImage}
                            price={17.92}
                            title="Shakshuka"
                            description="A popular dish in the Middle East and North Africa, consisting of poached eggs in a rich tomato and bell pepper sauce, seasoned with spices like cumin and paprika."
                            handleAddToCart={handleAddToCart}  // Pass the handleAddToCart function as a prop
                        />
                        </section>
                    </div>
                    <div>
                        <h2 id="desserts">Desserts</h2>
                        <section id="desserts-section">
                            <OurMenuItem
                            id={10}
                            image={lemonDessertImage}
                            price={12.96}
                            title="Lemon Cake"
                            description="This cake is adored not only for its flavor but also for its texture and simplicity. A base of creamed butter and sugar, eggs, lemon, milk, and flour are among the most basic ingredients"
                            handleAddToCart={handleAddToCart}  // Pass the handleAddToCart function as a prop
                       />
                            <OurMenuItem
                            id={11}
                            image={tiramisuaImage}
                            price={14.95}
                            title="Tiramisu"
                            description="An Italian dessert consisting of layers of coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder, creating a rich and creamy treat."
                            handleAddToCart={handleAddToCart}  // Pass the handleAddToCart function as a prop
                        />
                            <OurMenuItem
                            id={12}
                            image={basbousaImage}
                            price={13.99}
                            title="Basbousa"
                            description="A traditional Middle Eastern semolina cake soaked in a sweet rosewater or orange blossom syrup,often garnished with almonds or coconut flakes."
                            handleAddToCart={handleAddToCart}  // Pass the handleAddToCart function as a prop
                        />
                        </section>
                    </div>
                </div>
            </div>

        </div>

    );

}; 


export default OnlineMenu; 