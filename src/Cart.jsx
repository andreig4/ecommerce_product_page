import React from "react";
import product1 from "./images/image-product-1-thumbnail.jpg";
import deleteIcon from "./images/icon-delete.svg";
import { useSelector } from "react-redux";
import { selectItems } from "./features/items/itemsSlice";
import { deleteItems } from "./features/items/itemsSlice";
import { useDispatch } from "react-redux";

function Cart() {
  const totalItemsSelector = useSelector(selectItems);
  const total = +totalItemsSelector * 125;
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <div className="cart_header">
        <h3>Cart</h3>
      </div>
      {totalItemsSelector ? (
        <>
          <div className="cart_body">
            <img src={product1} alt="" />
            <div className="cart_items">
              <p>Fall Limited Edition Sneakers</p>
              <p>
                <span className="cart_price">$125.00 </span>x
                <span className="amount">{totalItemsSelector}</span>
                <span className="cart_total"> ${total}</span>
              </p>
            </div>
            <img
              src={deleteIcon}
              alt=""
              onClick={() => dispatch(deleteItems())}
            />
          </div>
          <button className="checkout_btn">Checkout</button>
        </>
      ) : (
        <div className="cart_body empty">
          <p className="empty">Your cart is empty.</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
