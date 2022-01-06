import React from "react";
import "../css/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home-container">
          <img
            className="home-img"
            src="https://st4.depositphotos.com/1001941/21877/v/1600/depositphotos_218773320-stock-illustration-website-header-banner-design-discount.jpg"
          />
          <div className="home-row">
            <Product
              title={"Product 1"}
              price={112}
              rating={4}
              image={
                "https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg"
              }
            />
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
