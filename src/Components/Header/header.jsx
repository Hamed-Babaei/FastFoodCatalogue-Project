import { useSelector } from "react-redux";
import "./header.css";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <header className="bg-size-cover bg-position-center py-5">
      <div className="container">
        <h1 className="text-start text-light text-uppercase">
          fast food catalogue
        </h1>
        <Link to={"/cart"} className="navbar-tool ms-3 text-dark">
          <div className="navbar-tool-icon-box bg-secondary">
            <span className="navbar-tool-label align-items-center">
              {cart.length}
            </span>
            <RiShoppingCartLine className="navbar-tool-icon" />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
