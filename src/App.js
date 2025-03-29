import React from 'react';
import Header from './components/Header.js'
import TopBanner from './components/TopBanner.js'
import './styles/App.css'
import firstSectionImage from './assets/images/first_section_image.png';
import secondSectionImage1 from './assets/images/second_section_image1.jpg';
import secondSectionImage2 from './assets/images/second_section_image2.jpg';
import secondSectionImage3 from './assets/images/second_section_image3.jpg';
import fourthSectionImage from './assets/images/fourth_section_image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
     <TopBanner />
     <Header />
      <main>
        <div className="first-section">
          <div className="text">
            <h2> QUALITY YOU TRUST, PRICES YOU LOVE! </h2>
            <p>Discover top-quality products at unbeatable prices. We bring you the best without breaking the bank!</p>
            <button type="button">SHOP NOW  <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '3px' }} /></button>           
          </div>
          <img src={firstSectionImage}></img>
        </div>
        <div className="second-section">
          <div className="left-area">
            <h2>LATEST COLLECTION</h2>
            <p>Our tactile products can help you kick off 2024 with better routines and less screens.</p>
            <button type="button" style={{ backgroundColor: "#FF3D22", color: 'white' }}>SHOP ALL  <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '3px' }} /></button>
          </div>
          <div className="right-area">
            <div className="image-tile">
              <div className="image-wrapper">
                <img src= {secondSectionImage1}></img>
                <h3>CLASSIC HOODIE</h3>
                <p>Stay cozy and stylish with premium hoodie. Made from ultra-soft cotton fleece, perfect for layering and everyday wear.</p>
                <p>$30</p>
              </div>
              <div className="image-wrapper">
                <img src= {secondSectionImage2}></img>
                <h3>CLASSIC HOODIE</h3>
                <p>Stay cozy and stylish with premium hoodie. Made from ultra-soft cotton fleece, perfect for layering and everyday wear.</p>
                <p>$30</p>
              </div>
              <div className="image-wrapper">
                <img src= {secondSectionImage3}></img>
                <h3>CLASSIC HOODIE</h3>
                <p>Stay cozy and stylish with premium hoodie. Made from ultra-soft cotton fleece, perfect for layering and everyday wear.</p>
                <p>$30</p>
             </div>
            </div>
          </div>
        </div>
        <div className="third-section">
        <h1>Premium Products in Pocket-Friendly Prices</h1>
        <p>That’s the C2N Promise!</p>
        </div>
        <div className="fourth-section">
          <div className="left-area">
          <img src={fourthSectionImage}></img>
          </div>
          <div className="right-area">
            <h2>ABOUT US - WHY CHOOSE C2N?</h2>
            <p>At C2N Shop, we believe that quality should never come at the cost of affordability. Our mission is to provide premium products at reasonable prices, ensuring that you get the best value without compromise. From stylish apparel to everyday essentials, every item in our collection is crafted with care, keeping comfort, durability, and design in mind.</p>
            <p>What sets us apart is our commitment to excellence and customer satisfaction. We carefully curate our selection to bring you high-quality materials, thoughtful designs, and trend-forward styles. Whether you're looking for cozy hoodies, everyday T-shirts, or timeless wardrobe staples, our products are made to fit seamlessly into your lifestyle.</p>
            <p>When you shop with C2N, you're choosing more than just a product—you’re choosing reliability, affordability, and a brand that values your trust. We stand by our promise of delivering top-notch products with a seamless shopping experience. Join our community and redefine the way you shop—where quality meets affordability, only at C2N!</p>
          </div>
        </div>
        <div className="fifth-section-newsletter">
          <div className="first-row">
            <div className="area-text">
              <h3>GET THE NEWSLETTER</h3>
              <p>Stay ahead with the latest trends, exclusive deals, and special offers—delivered straight to your inbox. Join our community and be the first to know about new arrivals and limited-edition drops!</p>
            </div>
            <input type="text"className="newletter" placeholder="EMAIL ADDRESS"></input>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;