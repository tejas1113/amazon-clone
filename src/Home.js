import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61aUfpZteZL._SX3740_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1"
            title="Apple iPhone 13 Pro Max (128GB) - Sierra Blue"
            price={129000}
            rating={5}
            image="https://m.media-amazon.com/images/I/61i8Vjb17SL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="2"
            title="Samsung Galaxy S22 Ultra 5G (Burgundy, 12GB, 256GB Storage)"
            price={109000}
            rating={5}
            image="https://m.media-amazon.com/images/I/71J8tz0UeJL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="The Psychology of Money"
            price={329}
            rating={4}
            image="https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="4"
            title="Atomic Habits: The life-changing million copy bestseller"
            price={507}
            rating={4}
            image="https://m.media-amazon.com/images/I/51S7KOWir7L._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="5"
            title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!"
            price={243}
            rating={5}
            image="https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="6"
            title="Wings of Fire"
            price={150}
            rating={5}
            image="https://m.media-amazon.com/images/I/51vgy3LMz6L._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="7"
            title="Nivia Airstrike Football Studs, Black/Fluorescent Green"
            price={529}
            rating={5}
            image="https://m.media-amazon.com/images/I/312qrhxAFxL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="8"
            title="Nivia storm football"
            price={450}
            rating={4}
            image="https://m.media-amazon.com/images/I/81g87b5bzLL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="9"
            title="Vector X Fantastic Football Shoes for Men's (Pearl White-Black)"
            price={1290}
            rating={4}
            image="https://m.media-amazon.com/images/I/31tsxYTbShL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="10"
            title="Sony Bravia 164 cm (65 inches) XR series 4K Ultra HD Smart OLED Google TV XR-65A80J (Black) (2021 Model) | with Alexa Compatibility"
            price={256000}
            rating={5}
            image="https://m.media-amazon.com/images/I/8116TOvxtsL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
