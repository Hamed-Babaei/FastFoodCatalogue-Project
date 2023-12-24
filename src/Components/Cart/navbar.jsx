import { RiShoppingCartLine } from "react-icons/ri";
import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  // console.log(cart);
  return (
    <header className="navbar navbar-dark bg-dark shadow-sm">
      <div className="container">
        <a className="navbar-tool ms-3">
          <div className="navbar-tool-icon-box bg-secondary">
            <span className="navbar-tool-label">{cart.length}</span>
            <RiShoppingCartLine className="navbar-tool-icon" />
          </div>
        </a>
        <p className="h3 mb-0 text-light">useContext & useReducer</p>
      </div>
    </header>
  );
};

export default Navbar;
