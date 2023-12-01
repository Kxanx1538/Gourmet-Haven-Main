
import './OurMenu.css';





const OurMenu = () => {

   
    return (
        <div className="main-menu-container">
            <h2 id="menu">Our Menu</h2>
            <div className="menu-container">
                <section>
                    <hr/>
                    <h2 id="appetizer">Appetizers</h2>

                    <OurMenuItem title="Bruschetta" description="An Italian appetizer consisting of toasted bread topped with ripe tomatoes, garlic, basil, and drizzled with olive oil. 
                                                             It is a fresh and vibrant starter that showcases the flavors of the Mediterranean." />
                    <OurMenuItem title="Spanakopita" description="Flaky phyllo pastry filled with a mixture of spinach, feta cheese, onions, and herbs. 
                                                              These savory triangles are baked until golden and crispy, making them a popular appetizer in Greek cuisine." />
                    <OurMenuItem title="Baba Ganoush" description="A smoky and flavorful dip of roasted eggplant blended with tahini, garlic, lemon juice, and olive oil. 
                                                               Served with our in-house pita bread or as a side dish in Middle Eastern cuisine." />

                </section>
               {/*
                <section>
                   <hr/>
                   <h2 id="salad">Salads</h2>
                   <OurMenuItem title="Greek salad" description="Our famous Greek salad of crispy lettuce, peppers, olives, and our
                                                              New York-style feta cheese. Garnished with crispy onion and salty capers." />
                    <OurMenuItem title="Tabbouleh" description="A refreshing Lebanese salad made with bulgur wheat, finely chopped parsley, tomatoes, onions, mint, and a tangy dressing of lemon juice and olive oil." />
                </section> */}

                <section>
                    <hr/>
                    <h2 id="main-course">Main Courses</h2>
                    <OurMenuItem title="Grilled fish" description="The fish is swiftly grilled over medium- or high-heat coals or over medium- or high-heat gas grill burners. 
                                                               Thinner fillets and steaks are grilled over direct fire." />
                    <OurMenuItem title="Moussaka" description="A classic Greek dish made with layers of eggplant, ground meat, and béchamel sauce, baked to perfection." />
                    {/*<OurMenuItem title="Couscous" description="A North African dish made from steamed granules of durum wheat semolina, often served with stewed vegetables, meat, or fish, and flavored with aromatic spices." /> */}
                    <OurMenuItem title="Shakshuka" description="A popular dish in the Middle East and North Africa, consisting of poached eggs in a rich tomato and bell pepper sauce, seasoned with spices like cumin and paprika." />
                </section>
                <section>
                    <hr/>
                    <h2 id="dessert">Desserts</h2>
                    <OurMenuItem title="Basbousa" description="A traditional Middle Eastern semolina cake soaked in a sweet rosewater or orange blossom syrup, 
                                                           often garnished with almonds or coconut flakes." />
                    <OurMenuItem title="Tiramisu" description="An Italian dessert consisting of layers of coffee-soaked ladyfingers, mascarpone cheese, 
                                                           and cocoa powder, creating a rich and creamy treat." />
                    <OurMenuItem title="Lemon Cake" description="This cake is adored not only for its flavor but also for its texture and simplicity. 
                                                             A base of creamed butter and sugar, eggs, lemon, milk, and flour are among the most basic ingredients." />
                </section>
                <section>
                    <hr/>
                    <h2 id="beverage">Beverages</h2>
                    <OurMenuItem title="Mediterranean Wines" description="A fine selection of wines from the Mediterranean regions: Sangiovese, Tempranillo, Aglianico, Assyrtiko, and Grenache. Ask for our complete wine list." />
                    <OurMenuItem title="Mint Lemonade" description="A refreshing and tangy beverage made with freshly squeezed lemon juice, mint leaves, sugar, and water." /> 
                    <OurMenuItem title="Turkish Coffee" description="A rich and strong coffee preparation served in small cups. It is often sweetened and can be enjoyed with a small glass of water to cleanse the palate." /> 
                    {/*<OurMenuItem title="Herbal Infusions" description="We offer a variety of herbal teas or infusions made with Mediterranean herbs to be enjoyed hot or cold." /> */}
                </section>
            </div>
        </div>

    );
};


const OurMenuItem = ({ title, description }) => {
    return (
      <div className='menu-item'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
};
  


export default OurMenu;