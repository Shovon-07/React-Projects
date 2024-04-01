import React, { useState } from "react";

//___ Images ___//
import jubba from "/images/dress/jubba2.png";

import Btn_1 from "/images/dress/button_type/Button curve.png";
import Btn_2 from "/images/dress/button_type/Buttoned square.png";
import Btn_3 from "/images/dress/button_type/Buttoned triangle.png";
import Btn_4 from "/images/dress/button_type/Hidden Zipper Curved.png";
import Btn_5 from "/images/dress/button_type/Hidden zipped square.png";
import Btn_6 from "/images/dress/button_type/Hidden zipper triangle.png";

import Nack_1 from "/images/dress/neck_type/Curve.png";
import Nack_2 from "/images/dress/neck_type/French.png";
import Nack_3 from "/images/dress/neck_type/Royal Opened.jpg";
import Nack_4 from "/images/dress/neck_type/Royal.jpg";

import Pocket_1 from "/images/dress/pocket_type/Curved standard.jpg";
import Pocket_2 from "/images/dress/pocket_type/Curved.jpg";
import Pocket_3 from "/images/dress/pocket_type/Triangle.jpg";
import Pocket_4 from "/images/dress/pocket_type/Pointed.jpg";

import Hand_1 from "/images/dress/hand_type/Cuffed.png";
import Hand_2 from "/images/dress/hand_type/Standard Charts.png";
import Hand_3 from "/images/dress/hand_type/Standard small.png";
import Hand_4 from "/images/dress/hand_type/Normal Cuffed.png";

//___ Css ___//
import "./CustomizeImg.scss";

const CustomizeImg = () => {
  // Images
  const [btnImgPreview, setBtnImgPreview] = useState();
  const [nakImgPreview, setNakImgPreview] = useState();
  const [pktImgPreview, setPktImgPreview] = useState();
  const [handImgPreview, setHandImgPreview] = useState();

  const buttonImg = [
    { btnImg: Btn_1 },
    { btnImg: Btn_2 },
    { btnImg: Btn_3 },
    { btnImg: Btn_4 },
    { btnImg: Btn_5 },
    { btnImg: Btn_6 },

    { btnImg: Btn_1 },
    { btnImg: Btn_2 },
    { btnImg: Btn_3 },
    { btnImg: Btn_4 },
    { btnImg: Btn_5 },
    { btnImg: Btn_6 },
    { btnImg: Btn_1 },
    { btnImg: Btn_2 },
    { btnImg: Btn_3 },
    { btnImg: Btn_4 },
    { btnImg: Btn_5 },
    { btnImg: Btn_6 },
    { btnImg: Btn_1 },
    { btnImg: Btn_2 },
    { btnImg: Btn_3 },
    { btnImg: Btn_4 },
    { btnImg: Btn_5 },
    { btnImg: Btn_6 },
    { btnImg: Btn_1 },
    { btnImg: Btn_2 },
    { btnImg: Btn_3 },
    { btnImg: Btn_4 },
    { btnImg: Btn_5 },
    { btnImg: Btn_6 },
  ];
  const nackImg = [
    { nakImg: Nack_1 },
    { nakImg: Nack_2 },
    { nakImg: Nack_3 },
    { nakImg: Nack_4 },
    { nakImg: Nack_1 },
    { nakImg: Nack_2 },
    { nakImg: Nack_3 },
    { nakImg: Nack_4 },
  ];
  const pocketImg = [
    { pktImg: Pocket_1 },
    { pktImg: Pocket_2 },
    { pktImg: Pocket_3 },
    { pktImg: Pocket_4 },
    { pktImg: Pocket_1 },
    { pktImg: Pocket_2 },
    { pktImg: Pocket_3 },
    { pktImg: Pocket_4 },
  ];
  const handImg = [
    { hndImg: Hand_1 },
    { hndImg: Hand_2 },
    { hndImg: Hand_3 },
    { hndImg: Hand_4 },
  ];

  const handelButtonImgPreview = (items) => {
    setBtnImgPreview(items.btnImg);
  };
  const handelNackImgPreview = (items) => {
    setNakImgPreview(items.nakImg);
  };
  const handelPocketImgPreview = (items) => {
    setPktImgPreview(items.pktImg);
  };
  const handelHandImgPreview = (items) => {
    setHandImgPreview(items.hndImg);
  };

  // Active Button
  const [activeBtn, setActiveBtn] = useState(1);
  const handleBtnChild = (e) => {
    setActiveBtn((prev) => e.target.value);
  };

  // Reset
  const handelReset = () => {
    setBtnImgPreview();
    setNakImgPreview();
    setPktImgPreview();
    setHandImgPreview();
    setActiveBtn(1);
  };

  return (
    <div className="CustomizeImg d-flex flex-start gap-30">
      <div className="left">
        <h2>Preview Image</h2>
        <div className="imageBox d-flex">
          <img src={jubba} alt="" className="main-img" />
          <img
            src={btnImgPreview}
            alt=""
            className={`${btnImgPreview == null ? "d-none" : "buttonImg"}`}
          />
          <img
            src={nakImgPreview}
            alt=""
            className={`${nakImgPreview == null ? "d-none" : "nackImg"}`}
          />
          {/* <img src={nakImgPreview} alt="" className="nackImg" /> */}
          <img
            src={pktImgPreview}
            alt=""
            className={`${pktImgPreview == null ? "d-none" : "pocket"}`}
          />
          <img
            src={handImgPreview}
            alt=""
            className={`${handImgPreview == null ? "d-none" : "rightHand"}`}
          />
          <img
            src={handImgPreview}
            alt=""
            className={`${handImgPreview == null ? "d-none" : "leftHand"}`}
          />
        </div>
      </div>
      <div className="right">
        <h2>Select type</h2>
        <div className="btnBox d-flex flex-start gap-30">
          <div className="btnParent">
            <button className="button" onClick={handleBtnChild} value={1}>
              Button Type
            </button>
            <ul className={`${activeBtn == 1 ? "btnChild active" : "d-none"}`}>
              {buttonImg.map((items, index) => {
                return (
                  <li key={index}>
                    <img
                      src={items.btnImg}
                      alt=""
                      onClick={() => handelButtonImgPreview(items)}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="btnParent">
            <button className="button" onClick={handleBtnChild} value={2}>
              Nack Type
            </button>
            <ul className={`${activeBtn == 2 ? "btnChild active" : "d-none"}`}>
              {nackImg.map((items, index) => {
                return (
                  <li key={index}>
                    <img
                      src={items.nakImg}
                      alt=""
                      onClick={() => handelNackImgPreview(items)}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="btnParent">
            <button className="button" onClick={handleBtnChild} value={3}>
              Pocket Type
            </button>
            <ul className={`${activeBtn == 3 ? "btnChild active" : "d-none"}`}>
              {pocketImg.map((items, index) => {
                return (
                  <li key={index}>
                    <img
                      src={items.pktImg}
                      alt=""
                      onClick={() => handelPocketImgPreview(items)}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="btnParent">
            <button className="button" onClick={handleBtnChild} value={4}>
              Hand Type
            </button>
            <ul className={`${activeBtn == 4 ? "btnChild active" : "d-none"}`}>
              {handImg.map((items, index) => {
                return (
                  <li key={index}>
                    <img
                      src={items.hndImg}
                      alt=""
                      onClick={() => handelHandImgPreview(items)}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="resetBtn">
          <button className="button" onClick={handelReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomizeImg;
