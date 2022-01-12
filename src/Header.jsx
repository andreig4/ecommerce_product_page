import React from "react";
import logo from "./images/logo.svg";
import cartIcon from "./images/icon-cart.svg";
import avatar from "./images/image-avatar.png";
import { useSelector } from "react-redux";
import { selectItems } from "./features/items/itemsSlice";
import menuIcon from "./images/icon-menu.svg";

function Header({ openCart, openSidebar }) {
  const totalItemsSelector = useSelector(selectItems);

  return (
    <div className="header">
      <div className="header_left">
        <div className="logo">
          <img src={menuIcon} alt="" onClick={openSidebar} />
          <img src={logo} alt="" />
        </div>
        <div className="menu_items">
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="header_right">
        <img src={cartIcon} alt="" onClick={openCart} />
        <div className="header_total">
          <p>{totalItemsSelector}</p>
        </div>
        <img src={avatar} alt="" />
      </div>
    </div>
  );
}

export default Header;
