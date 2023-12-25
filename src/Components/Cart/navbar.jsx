import { RiShoppingCartLine } from "react-icons/ri";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { items, totalCount } = useSelector((state) => state.cart);
  console.log("total: in file navbar", totalCount);

  useEffect(() => {
    console.log("added item");
  }, [items]);
  return (
    <header className="navbar navbar-dark bg-dark shadow-sm">
      <div className="container">
        <a className="navbar-tool ms-3">
          <div className="navbar-tool-icon-box bg-secondary ">
            <span className="navbar-tool-label">50</span>
            <RiShoppingCartLine className="navbar-tool-icon" />
          </div>
        </a>
        <p className="h3 mb-0 text-light">MY Cart</p>
      </div>
    </header>
  );
};

export default Navbar;
