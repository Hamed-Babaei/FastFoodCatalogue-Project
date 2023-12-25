import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../../Redux/Store/CartReducer";

const CartItem = ({ id, img, title, price, quantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="d-flex justify-content-between align-items-stretch mt-3">
      <div className="d-block d-sm-flex align-items-center text-center text-sm-end">
        <img src={img} width="120" className="ms-3 rounded" alt="Pizza" />

        <div>
          <Link to={"/food-item"} className="product-title fs-base h3 mb-2">
            <p style={{ paddingTop: "0.5rem" }}>{title}</p>
          </Link>
          <div className="fs-lg text-accent pt-2">
            {price.toLocaleString()} تومان
          </div>
        </div>
      </div>
      <div className="pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-end">
        <label className="form-label">تعداد :</label>
        <br />
        <button
          onClick={() => dispatch(increase(id))}
          className="btn btn-info btn-shadow btn-sm ms-2"
        >
          +
        </button>
        <span>{quantity}</span>
        <button
          className={`btn btn-info btn-shadow btn-sm me-2 ${
            quantity === 1 ? "disabled" : ""
          }`}
          onClick={() => dispatch(decrease(id))}
        >
          -
        </button>
        <br />
        <button
          className="btn btn-link text-danger pe-0"
          type="button"
          onClick={() => dispatch(removeItem(id))}
        >
          <RiCloseCircleLine className="ms-1" />
          <span className="fs-sm">حذف</span>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
