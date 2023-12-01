import chefsMarioAndAdrianAImage from './assets/chefs-mario-and-adrian_a.jpg';
import chefsMarioAndAdrianBImage from './assets/chefs-mario-and-adrian_b.jpg';
import './OurStory.css';



const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1 id="tittle">Gourmet Haven</h1>
        <h2 id="location">New York</h2>
        <section>
        <h3>About Us</h3>
        <p>
        Welcome to Gourmet Haven – your premier destination for a diverse array of exquisite gourmet products and culinary delights! 
        At Gourmet Haven, we are more than just a company; we are passionate purveyors of the finest and most flavorful products to elevate 
        your gastronomic experiences.
        </p>
        </section>

        <section>
        <h3>Our Journey</h3>
        <p>
        Gourmet Haven was born out of a passion for the finer things in life. Our journey began with the vision of creating a haven for those who appreciate the artistry of fine foods and the joy they bring to every occasion. 
        We believe that every moment, big or small, can be enhanced by the delight of gourmet offerings. Our carefully curated selection of products reflects this philosophy, 
        bringing together a symphony of tastes that cater to the discerning palate.

        </p>
        </section>
        
        <section>
        <h3>What Sets Us Apart</h3>
        <p>
        
        <b>Curators of Quality:</b> Gourmet Haven is committed to sourcing only the highest quality ingredients for our diverse offerings. From assorted artisan bread and cheeses 
        to curated wine selections, our products reflect a dedication to excellence.<br></br>
        <b>Artisanal Craftsmanship:</b> We celebrate the craft of artisanal producers. Each product in our collection is chosen for its unique character and crafted with care to bring you a taste of culinary artistry.<br></br>
        <b>Innovation in Every Package:</b> Embracing innovation, we continually explore new flavors and combinations. Our assortment includes gourmet charcuteries, handpicked chocolates, and more – each an invitation to explore the extraordinary.
       </p>
       </section>
       
       <section>
       <h3> Explore Our Range</h3>
       <p>
        Discover a world of flavors with our extensive range. Indulge in assorted artisan bread, explore the richness of carefully selected cheeses, savor the perfect pairing of wines, and treat yourself to the decadence of gourmet chocolates. 
        Gourmet Haven is your gateway to a world of culinary delights.
        </p>
        </section>
        <section>
        <h3>Culinary Experiences Beyond Borders</h3>
        <p>
        Gourmet Haven isn't just about products; it's about experiences. Enjoy the luxury of a private chef service, where culinary mastery meets the comfort of your home. Embark on a culinary journey with our online cooking classes, 
        guided by seasoned chefs passionate about sharing their expertise.
        </p>
        </section>

        <section>
        <h3>Join Us on the Gourmet Journey</h3>
        <p>
        Embark on a gourmet journey with Gourmet Haven. Whether you're a seasoned epicurean or just beginning your exploration of fine foods, we invite you to savor the richness, discover new tastes, 
        and celebrate life's moments with our exceptional products.
        </p>
        </section>
        <section>
        <p>
        Thank you for choosing Gourmet Haven – where every product tells a story of craftsmanship, 
        quality, and culinary delight!
        </p>
        </section>
      </div>
      <div className="our-story-chefs">
        <img src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian" />
        <img src={chefsMarioAndAdrianBImage} alt="Chefs Mario and Adrian" />
      </div>
    </section>
  );
};

export default OurStory;
