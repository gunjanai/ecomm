import React, { useState } from "react";
import "../css/Header.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
const imgPath = process.env.PUBLIC_URL;

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [searchTerm, setSearchTerm] = useState("");

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    dispatch({
      type: "SEARCH",
      search: searchTerm,
    });
  };
  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src={`${imgPath}/logoipsum-logo-38.svg`} />
      </Link>
      <div className="header-search">
        <input
          className="header-search-input"
          type="text"
          placeholder="Looking for something specific? Search here..."
          onChange={handleSearch}
        ></input>
        <SearchOutlinedIcon className="header-search-icon" />
      </div>
      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div className="header-option" onClick={handleAuthentication}>
            <span className="header-option-line-one">Hello {user?.email}</span>
            <span className="header-option-line-two">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-option-line-one">Returns</span>
          <span className="header-option-line-two">& Orders</span>
        </div>
        <div className="header-option">
          <span className="header-option-line-one">Your</span>
          <span className="header-option-line-two">Cart</span>
        </div>
        <Link to="/checkout">
          <div className="header-cart">
            <ShoppingCartOutlinedIcon />
            <span className="header-option-line-two item-count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
