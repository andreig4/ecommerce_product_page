import React, { useState } from "react";
import imageProduct1 from "./images/image-product-1.jpg";
import imageProductThumbail1 from "./images/image-product-1-thumbnail.jpg";
import imageProduct2 from "./images/image-product-2.jpg";
import imageProductThumbail2 from "./images/image-product-2-thumbnail.jpg";
import imageProduct3 from "./images/image-product-3.jpg";
import imageProductThumbail3 from "./images/image-product-3-thumbnail.jpg";
import imageProduct4 from "./images/image-product-4.jpg";
import imageProductThumbail4 from "./images/image-product-4-thumbnail.jpg";
import closeIcon from "./images/icon-close.svg";
import nextIcon from "./images/icon-next.svg";
import prevIcon from "./images/icon-previous.svg";

function LeftSide({ openModal }) {
  const initialState = {
    image1: true,
    image2: false,
    image3: false,
    image4: false,
  };

  const [activeItems, setActiveItems] = useState(initialState);
  const [mainImg, setMainImg] = useState(imageProduct1);

  const setFirstActive = () => {
    setActiveItems({
      image1: true,
      image2: false,
      image3: false,
      image4: false,
    });

    setMainImg(imageProduct1);
  };
  const setSecondActive = () => {
    setActiveItems({
      image1: false,
      image2: true,
      image3: false,
      image4: false,
    });

    setMainImg(imageProduct2);
  };
  const setThirdActive = () => {
    setActiveItems({
      image1: false,
      image2: false,
      image3: true,
      image4: false,
    });

    setMainImg(imageProduct3);
  };

  const setForthActive = () => {
    setActiveItems({
      image1: false,
      image2: false,
      image3: false,
      image4: true,
    });

    setMainImg(imageProduct4);
  };

  const setNextItem = () => {
    if (activeItems.image1) {
      setSecondActive();
    } else if (activeItems.image2) {
      setThirdActive();
    } else if (activeItems.image3) {
      setForthActive();
    } else {
      setFirstActive();
    }
  };

  const setPrevItem = () => {
    if (activeItems.image1) {
      setForthActive();
    } else if (activeItems.image2) {
      setFirstActive();
    } else if (activeItems.image3) {
      setSecondActive();
    } else {
      setThirdActive();
    }
  };

  return (
    <div className="app_bodyLeft">
      <div className="prev_icon" onClick={setPrevItem}>
        <img src={prevIcon} alt="" />
      </div>

      <div className="next_icon" onClick={setNextItem}>
        <img src={nextIcon} alt="" />
      </div>

      <div className="main_img">
        <img src={mainImg} alt="" onClick={openModal} />
      </div>

      <div className="imgs_bottom">
        <img
          src={imageProductThumbail1}
          alt="image1"
          className={`${activeItems.image1 ? "active" : ""}`}
          onClick={setFirstActive}
        />
        <img
          src={imageProductThumbail2}
          alt="image2"
          className={`${activeItems.image2 ? "active" : ""}`}
          onClick={setSecondActive}
        />
        <img
          src={imageProductThumbail3}
          alt="image3"
          className={`${activeItems.image3 ? "active" : ""}`}
          onClick={setThirdActive}
        />
        <img
          src={imageProductThumbail4}
          alt="image4"
          className={`${activeItems.image4 ? "active" : ""}`}
          onClick={setForthActive}
        />
      </div>
    </div>
  );
}

export default LeftSide;
