import React, { useEffect, useState } from "react";
import apiURL from "../config/config";
import "../css/Home.css";
import { useStateValue } from "../StateProvider";
import getApiResponse from "../utils/apiHandler";
import Product from "./Product";

function Home() {
  const [products, setProducts] = useState([]);
  const [{ searchTerm }, dispatch] = useStateValue();
  const fetchProductData = async () => {
    try {
      const productList = await getApiResponse(apiURL);
      setProducts(productList);
      console.log(products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);
  return (
    <div>
      <div className="home">
        <div className="home-container">
          <img
            className="home-img"
            src="https://cdn.shopify.com/s/files/1/0332/3917/1117/files/Product_Banner_1920x500_copy6.jpg?v=1591789167"
          />
          <div className="home-row">
            {products
              .filter((product) => {
                if (searchTerm === "") {
                  return product;
                } else {
                  let returnProduct =
                    product.title
                      .toLowerCase()
                      .indexOf(searchTerm.toLowerCase()) > -1;
                  return returnProduct;
                }
              })
              .map((product) => (
                <Product
                  title={product.title}
                  price={product.price}
                  rating={Math.ceil(product.rating.rate)}
                  image={product.image}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
