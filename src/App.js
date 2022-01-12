import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import LeftSide from "./LeftSide";
import Modal from "./Modal";
import RightSide from "./RightSide";
import Cart from "./Cart";
import SidebarModal from "./SidebarModal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openCart = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="app">
      {isCartOpen && <Cart />}
      {isOpen && <Modal closeModal={closeModal} />}
      {isSidebarOpen && <SidebarModal closeSidebar={closeSidebar} />}
      <Header openCart={openCart} openSidebar={openSidebar} />
      <div className="app_body">
        <LeftSide openModal={openModal} />

        <RightSide />
      </div>
    </div>
  );
}

export default App;
