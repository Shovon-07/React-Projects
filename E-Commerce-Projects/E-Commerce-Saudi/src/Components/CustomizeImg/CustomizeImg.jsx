import React from "react";

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
import Pocket_3 from "/images/dress/pocket_type/Hidden curve.jpg";
import Pocket_4 from "/images/dress/pocket_type/Hidden curve.jpg";

import Hand_1 from "/images/dress/hand_type/Cuffed charts.jpg";
import Hand_2 from "/images/dress/hand_type/Normal Cuffed.jpg";
import Hand_3 from "/images/dress/hand_type/Standard Charts.jpg";
import Hand_4 from "/images/dress/hand_type/Standard small.jpg";

//___ Css ___//
import "./CustomizeImg.scss";

const CustomizeImg = () => {
  return (
    <div className="CustomizeImg d-flex flex-start gap-30">
      <div className="left">
        <h2>Preview Image</h2>
        <div className="imageBox">
          <img src={Main_img} alt="" className="main-img" />
        </div>
      </div>
      <div className="right">
        <h2>Select type</h2>
        <div className="btnBox d-flex flex-start gap-30">
          <div className="btnParent">
            <button className="button">Button Type</button>
            <ul className="btnChild">
              <li>
                <img src={Btn_1} alt="" />
              </li>
              <li>
                <img src={Btn_2} alt="" />
              </li>
              <li>
                <img src={Btn_3} alt="" />
              </li>
              <li>
                <img src={Btn_4} alt="" />
              </li>
              <li>
                <img src={Btn_1} alt="" />
              </li>
              <li>
                <img src={Btn_2} alt="" />
              </li>
              <li>
                <img src={Btn_3} alt="" />
              </li>
              <li>
                <img src={Btn_4} alt="" />
              </li>
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
              <li>
                <img src={Pocket_1} alt="" />
              </li>
              <li>
                <img src={Pocket_2} alt="" />
              </li>
              <li>
                <img src={Pocket_3} alt="" />
              </li>
              <li>
                <img src={Pocket_4} alt="" />
              </li>
            </ul>
          </div>
          <div className="btnParent">
            <button className="button">Hand Type</button>
            <ul className="btnChild">
              <li>
                <img src={Hand_1} alt="" />
              </li>
              <li>
                <img src={Hand_2} alt="" />
              </li>
              <li>
                <img src={Hand_3} alt="" />
              </li>
              <li>
                <img src={Hand_4} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeImg;
