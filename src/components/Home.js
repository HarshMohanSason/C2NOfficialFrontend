import {React, useEffect, useState } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import TopBanner from "./TopBanner.js";
import "../styles/Home.css";
import firstSectionImage from "../assets/images/first_section_image.png";
import secondSectionImage1 from "../assets/images/second_section_image1.jpg";
import secondSectionImage2 from "../assets/images/second_section_image2.jpg";
import secondSectionImage3 from "../assets/images/second_section_image3.jpg";
import fourthSectionImage from "../assets/images/fourth_section_image.jpg";
import sixthSectionImage from "../assets/images/sixth_section_image.jpg";
import seventhSectionImage from "../assets/images/seventh_section_image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CookiesPopup from "../utilities/CookiesPopup.js";
import InitialLoadingScreen from './InitialLoadingScreen.js'

function Home() {
  //Default state as logged out
  const [isLoggedIn, setIsLogInInfo] = useState(false) 
  useEffect(() => {
    const checkLoginStatus = async () => {
      try{
        console.log(process.env.REACT_APP_RETURN_USER)
        const response = await fetch(process.env.REACT_APP_RETURN_USER, {
          method: 'GET',
          credentials: 'include', //include the cookies
          headers: {
            "Content-Type": "application/json",
          },
        })

        if (response.ok) {
          setIsLogInInfo(true)
        }else{
          setIsLogInInfo(false)
        }
      }
      catch (err){
        setIsLogInInfo(false)
      }
    }
    checkLoginStatus();
  }, []);

  return (
    <>
      <InitialLoadingScreen />
      <TopBanner />
      <Header isLoggedIn={isLoggedIn}/>
      <main>
        <section className="first-section">
          <article className="text">
            <h2> QUALITY YOU TRUST, PRICES YOU LOVE! </h2>
            <p>
              Discover top-quality products at unbeatable prices. We bring you
              the best without breaking the bank!
            </p>
            <button type="button">
              SHOP NOW{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ marginLeft: "3px" }}
              />
            </button>
          </article>
          <img src={firstSectionImage} alt=""></img>
        </section>

        <section className="second-section">
          <article className="left-area">
            <h2>LATEST COLLECTION</h2>
            <p>
              Our tactile products can help you kick off 2024 with better
              routines and less screens.
            </p>
            <button
              type="button"
              style={{ backgroundColor: "#FF3D22", color: "white" }}
            >
              SHOP ALL{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ marginLeft: "3px" }}
              />
            </button>
          </article>
          <section className="right-area">
            <div className="image-tile">
              <article className="image-wrapper">
                <figure>
                  <img src={secondSectionImage1} alt="Classic Hoodie" />
                  <figcaption>
                    <h3>CLASSIC HOODIE</h3>
                    <p>
                      Stay cozy and stylish with premium hoodie. Made from
                      ultra-soft cotton fleece, perfect for layering and
                      everyday wear.
                    </p>
                    <p>$30</p>
                  </figcaption>
                </figure>
              </article>

              <article className="image-wrapper">
                <figure>
                  <img src={secondSectionImage2} alt="Classic Hoodie" />
                  <figcaption>
                    <h3>CLASSIC HOODIE</h3>
                    <p>
                      Stay cozy and stylish with premium hoodie. Made from
                      ultra-soft cotton fleece, perfect for layering and
                      everyday wear.
                    </p>
                    <p>$30</p>
                  </figcaption>
                </figure>
              </article>

              <article className="image-wrapper">
                <figure>
                  <img src={secondSectionImage3} alt="Classic Hoodie" />
                  <figcaption>
                    <h3>CLASSIC HOODIE</h3>
                    <p>
                      Stay cozy and stylish with premium hoodie. Made from
                      ultra-soft cotton fleece, perfect for layering and
                      everyday wear.
                    </p>
                    <p>$30</p>
                  </figcaption>
                </figure>
              </article>
            </div>
          </section>
        </section>

        <section className="third-section">
          <h1>Premium Products in Pocket-Friendly Prices</h1>
          <p>That’s the C2N Promise!</p>
        </section>

        <section className="fourth-section">
          <section className="left-area">
            <img src={fourthSectionImage} alt=""></img>
          </section>
          <section className="right-area">
            <h2>ABOUT US - WHY CHOOSE C2N?</h2>
            <p>
              At C2N Shop, we believe that quality should never come at the cost
              of affordability. Our mission is to provide premium products at
              reasonable prices, ensuring that you get the best value without
              compromise. From stylish apparel to everyday essentials, every
              item in our collection is crafted with care, keeping comfort,
              durability, and design in mind.
            </p>
            <p>
              What sets us apart is our commitment to excellence and customer
              satisfaction. We carefully curate our selection to bring you
              high-quality materials, thoughtful designs, and trend-forward
              styles. Whether you're looking for cozy hoodies, everyday
              T-shirts, or timeless wardrobe staples, our products are made to
              fit seamlessly into your lifestyle.
            </p>
            <p>
              When you shop with C2N, you're choosing more than just a
              product—you’re choosing reliability, affordability, and a brand
              that values your trust. We stand by our promise of delivering
              top-notch products with a seamless shopping experience. Join our
              community and redefine the way you shop—where quality meets
              affordability, only at C2N!
            </p>
          </section>
        </section>

        <section className="fifth-section-newsletter">
          <section className="first-row">
            <article className="area-text">
              <h3>GET THE NEWSLETTER</h3>
              <p>
                Stay ahead with the latest trends, exclusive deals, and special
                offers—delivered straight to your inbox. Join our community and
                be the first to know about new arrivals and limited-edition
                drops!
              </p>
            </article>
            <address>
              <form>
                <input
                  type="text"
                  className="newletter"
                  placeholder="EMAIL ADDRESS"
                />
              </form>
            </address>
          </section>
        </section>

        <section className="sixth-section">
          <img src={sixthSectionImage} alt=""></img>
          <article className="right-area">
            <h2>CLASSIC HOODIE </h2>
            <p>
              Stay cozy and stylish with premium hoodie. Made from ultra-soft
              cotton fleece, perfect for layering and everyday wear.
            </p>
            <button
              type="button"
              style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "5px",
              }}
            >
              LEARN MORE{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ marginLeft: "5px" }}
              />
            </button>
          </article>
        </section>

        <section className="seventh-section">
          <article className="left-area">
            <h2>REVIEWS ARE IN</h2>
            <h4>****</h4>
            <p>
              Quality you can feel. It feels like something built ages ago,
              before cheap plastic invaded our lives. Love it so far.
            </p>
            <p> --- Martin </p>
            <button
              type="button"
              style={{
                backgroundColor: "transparent",
                color: "black",
                borderRadius: "5px",
              }}
            >
              SHOP NUDGE{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ marginLeft: "5px" }}
              />
            </button>
          </article>
          <img src={seventhSectionImage} alt=""></img>
        </section>
        <CookiesPopup />
      </main>
      <Footer/>
    </>
  );
}

export default Home;
