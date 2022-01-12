import React from "react";
import ReactDOM from "react-dom";
import ModalContent from "./ModalContent";

const portalDiv = document.getElementById("portal");

function Modal({ closeModal }) {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal_content">
        <ModalContent isModal={true} closeModal={closeModal} />
      </div>
    </div>,
    portalDiv
  );
}

export default Modal;
