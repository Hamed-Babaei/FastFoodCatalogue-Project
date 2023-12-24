import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeItem, incrementValue } from "../../Redux/Store/CartReducer";

const CartItem = ({ id, img, title, price, quantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="d-flex justify-content-between align-items-center mt-3">
      <div className="d-block d-sm-flex align-items-center text-center text-sm-end">
        <img src={img} width="120" className="ms-3 rounded" alt="Pizza" />

        <div>
          <Link to={"/food-item"} className="product-title fs-base h3 mb-2">
            <p>{title}</p>
          </Link>
          <div className="fs-lg text-accent pt-2">
            {price.toLocaleString()} تومان
          </div>
        </div>
      </div>
      <div className="pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-end">
        <label className="form-label">تعداد</label>
        <button
          onClick={() => dispatch(incrementValue(id))}
          className="btn btn-info btn-shadow"
        >
          +
        </button>
        <span>{quantity}</span>
        <button className="btn btn-info btn-shadow">-</button>
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
