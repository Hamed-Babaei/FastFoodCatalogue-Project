import { useState } from "react";
import { Link } from "react-router-dom";
import "./fastFoodItem.css";
import { HiShoppingCart } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Store/CartReducer";
const FastFoodItem = ({ name, price, ingredients, imageUrl, delay }) => {
  const [isThereValue, setIsThereValue] = useState(false);
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    e.preventDefault();
    setIsThereValue(true);
    dispatch(
      addToCart({
        id: Math.floor(Math.random() * 100),
        title: name,
        price: price,
        img: imageUrl,
        quantity: 1,
      })
    );
  };
  return (
    <div
      className="card product-card h-100 border-0 shadow-sm pb-1 fade-in-horiz"
      style={{ animationDelay: delay + "s" }}
    >
      <span className="badge badge-end badge-shadow bg-success fs-md fw-medium">
        قیمت : {price.toLocaleString()} تومان
      </span>
      <div className="card__placeholder">
        <img src={imageUrl} className="card-img-top" />
      </div>

      <div className="card-body text-center pt-3 pb-4 d-flex flex-column">
        <Link to={"/food-item"} className="mb-2 text-dark h5">
          {name}
        </Link>
        <div className="fs-ms fw-bold text-muted mb-3">{ingredients}</div>
        {isThereValue ? (
          <>
            <Link
              to={"/cart"}
              className="btn btn-success btn-sm w-100 mt-auto fw-bold"
            >
              با موفقیت به سبد خرید اضافه شد
            </Link>
          </>
        ) : (
          <>
            <button
              className="btn btn-outline-success btn-sm w-100 mt-auto fw-bold"
              onClick={clickHandler}
            >
              <HiShoppingCart className="fs-5 ms-1" />
              افزودن به سبد خرید
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default FastFoodItem;
