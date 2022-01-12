import React from "react";
import minusIcon from "./images/icon-minus.svg";
import plusIcon from "./images/icon-plus.svg";
import cartIcon2 from "./images/icon-cart2.svg";
import { useSelector } from "react-redux";
import { selectItemsToAdd } from "./features/items/itemsSlice";
import { useDispatch } from "react-redux";
import {
  incrementItemsToAdd,
  decrementItemsToAdd,
  addItem,
} from "./features/items/itemsSlice";

function RightSide() {
  const itemsToAddSelector = useSelector(selectItemsToAdd);
  const dispatch = useDispatch();

  const decrementItems = () => {
    if (itemsToAddSelector > 0) {
      dispatch(decrementItemsToAdd());
    }
  };

  const incrementItems = () => {
    dispatch(incrementItemsToAdd());
  };

  const addToCart = () => {
    dispatch(addItem(itemsToAddSelector));
  };

  return (
    <div className="app_bodyRight">
      <p className="name">SNEAKER COMPANY</p>
      <h1>Fall Limited Edition Sneakers</h1>
      <small>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </small>
      <div className="price_section">
        <p className="price">$125.00</p>
        <div className="offer">
          <p>50%</p>
        </div>
      </div>
      <p className="old_price">$250.00</p>

      <div className="cart_section">
        <div className="amount_section">
          <img src={minusIcon} alt="minusIcon" onClick={decrementItems} />
          <span className="amount">{itemsToAddSelector}</span>
          <img src={plusIcon} alt="plusIcon" onClick={incrementItems} />
        </div>
        <button className="add_btn" onClick={addToCart}>
          <img src={cartIcon2} alt="" />
          <p>Add to cart</p>
        </button>
      </div>
    </div>
  );
}

export default RightSide;
