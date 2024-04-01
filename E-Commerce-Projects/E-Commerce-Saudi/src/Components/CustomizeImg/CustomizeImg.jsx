import React, { useState } from "react";

//___ Images ___//
import Logo from "/images/icons/Company_orrange.png";
import Main_img from "/images/dress/main-img.jpeg";

import Btn_1 from "/images/dress/button_type/Button curve.jpg";
import Btn_2 from "/images/dress/button_type/Buttoned square.jpg";
import Btn_3 from "/images/dress/button_type/Buttoned triangle.jpg";
import Btn_4 from "/images/dress/button_type/Hidden Curved.jpg";

import Nack_1 from "/images/dress/neck_type/Curve.jpg";
import Nack_2 from "/images/dress/neck_type/French.jpg";
import Nack_3 from "/images/dress/neck_type/Royal Opened.jpg";
import Nack_4 from "/images/dress/neck_type/Royal.jpg";

import Pocket_1 from "/images/dress/pocket_type/Curved standard.jpg";
import Pocket_2 from "/images/dress/pocket_type/Curved.jpg";
import Pocket_3 from "/images/dress/pocket_type/Triangle.jpg";
import Pocket_4 from "/images/dress/pocket_type/Pointed.jpg";

import Hand_1 from "/images/dress/hand_type/Cuffed.png";
import Hand_2 from "/images/dress/hand_type/Standard Charts.png";
import Hand_3 from "/images/dress/hand_type/Standard small.png";
import Hand_4 from "/images/dress/hand_type/Normal Cuffed.jpg";

//___ Css ___//
import "./CustomizeImg.scss";

const CustomizeImg = () => {
  const [btnImgPreview, setBtnImgPreview] = useState();
  const [pktImgPreview, setPktImgPreview] = useState();
  const [handImgPreview, setHandImgPreview] = useState();

  const jubba = "/images/dress/jubba2.png";
  const buttonImg = [
    { btnImg: Btn_1 },
    { btnImg: Btn_2 },
    { btnImg: Btn_3 },
    { btnImg: Btn_4 },
    { btnImg: Btn_1 },
    { btnImg: Btn_2 },
    { btnImg: Btn_3 },
    { btnImg: Btn_4 },
    { btnImg: Btn_1 },
    { btnImg: Btn_2 },
    { btnImg: Btn_3 },
    { btnImg: Btn_4 },
  ];
  const pocketImg = [
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
    console.log(items.btnImg);
  };
  const handelPocketImgPreview = (items) => {
    setPktImgPreview(items.pktImg);
    console.log(items.pktImg);
  };
  const handelHandImgPreview = (items) => {
    setHandImgPreview(items.hndImg);
    console.log(items.hndImg);
  };

  return (
    <div className="CustomizeImg d-flex flex-start gap-30">
      <div className="left">
        <h2>Preview Image</h2>
        <div className="imageBox d-flex">
          <img src={jubba} alt="" className="main-img" />
          <img src={pktImgPreview} alt="" className="pocket" />
          <img src={handImgPreview} alt="" className="hand" />
        </div>
      </div>
      <div className="right">
        <h2>Select type</h2>
        <div className="btnBox d-flex flex-start gap-30">
          <div className="btnParent">
            <button className="button">Button Type</button>
            <ul className="btnChild">
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
            <button className="button">Nack Type</button>
            <ul className="btnChild">
              <li>
                <img src={Nack_1} alt="" />
              </li>
              <li>
                <img src={Nack_2} alt="" />
              </li>
              <li>
                <img src={Nack_3} alt="" />
              </li>
              <li>
                <img src={Nack_4} alt="" />
              </li>
            </ul>
          </div>
          <div className="btnParent">
            <button className="button">Pocket Type</button>
            <ul className="btnChild">
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
            <button className="button">Hand Type</button>
            <ul className="btnChild">
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
      </div>
    </div>
  );
};

export default CustomizeImg;
