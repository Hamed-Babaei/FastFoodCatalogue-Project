import { Link } from "react-router-dom";
import "./fastFoodItem.css";
import { HiShoppingCart } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { addExistItem, addToCart } from "../../Redux/Store/CartReducer";
const FastFoodItem = ({
  name,
  price,
  ingredients,
  imageUrl,
  quantity,
  delay,
}) => {
  const dispatch = useDispatch();
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
        <button
          className="btn btn-outline-success btn-sm w-100 mt-auto fw-bold"
          onClick={() =>
            dispatch(
              addExistItem({
                id: crypto.randomUUID(),
                title: name,
                price: price,
                img: imageUrl,
                quantity: quantity === 1 ? quantity++ : 1,
              })
            )
          }
        >
          <HiShoppingCart className="fs-5 ms-3" />
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default FastFoodItem;
