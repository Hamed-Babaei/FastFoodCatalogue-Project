import { useDispatch, useSelector } from "react-redux";
import "./header.css";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { cartTotal } from "../../Redux/Store/CartReducer";

const Header = () => {
  const dispatch = useDispatch();
  const { items, totalCount } = useSelector((state) => state.cart);
  console.log("items;", items);
  console.log("totalAmount;", totalCount);
  // console.log(items);

  useEffect(() => {
    dispatch(cartTotal(items));
  }, [items]);

  console.log("items In Navbar:", items);

  useEffect(() => {}, [items]);
  return (
    <header className="bg-size-cover bg-position-center py-5">
      <div className="container">
        <h1 className="text-start text-light text-uppercase">
          fast food catalogue
        </h1>
        <Link to={"/cart"} className="navbar-tool ms-3 text-dark">
          <div className="navbar-tool-icon-box bg-secondary">
            <span className="navbar-tool-label align-items-center">
              {totalCount}
            </span>
            <RiShoppingCartLine className="navbar-tool-icon" />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
