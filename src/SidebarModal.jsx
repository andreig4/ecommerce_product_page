import React from "react";
import ReactDOM from "react-dom";
import closeIcon from "./images/icon-close.svg";

const portalDiv = document.getElementById("sidebar_portal");

function Modal({ closeSidebar }) {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="sidebarmodal_content">
        <img src={closeIcon} alt="" onClick={closeSidebar} />
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>,
    portalDiv
  );
}

export default Modal;
