import React, { useState, lazy, Suspense } from "react";
import Tooltip from "@mui/material/Tooltip";

//___ Additional utility ___//
import Loader from "../Loader/Loader";

//___ Images ___//
import jubba from "/images/dress/jubba.png";
import Dress_1 from "/images/dress/dress_type/1.png";
import Dress_2 from "/images/dress/dress_type/2.png";
import Dress_3 from "/images/dress/dress_type/3.png";
import Dress_4 from "/images/dress/dress_type/4.png";

import Btn_1 from "/images/dress/button_type/Button Triangle.png";
import Btn_2 from "/images/dress/button_type/Button Square.png";
import Btn_3 from "/images/dress/button_type/Button Curved.png";
import Btn_4 from "/images/dress/button_type/Hidden Curved.png";
import Btn_5 from "/images/dress/button_type/Hidden Square.png";
import Btn_6 from "/images/dress/button_type/Hidden Triangle.png";
import Btn_7 from "/images/dress/button_type/Zipper Cuved.png";
import Btn_8 from "/images/dress/button_type/Zipper Square.png";
import Btn_9 from "/images/dress/button_type/Zipper Triangle.png";

import Nack_1 from "/images/dress/neck_type/French.png";
import Nack_2 from "/images/dress/neck_type/double button.png";
import Nack_3 from "/images/dress/neck_type/Closed Royal.png";
import Nack_4 from "/images/dress/neck_type/Opened.png";
import Nack_5 from "/images/dress/neck_type/Royal.png";
import Nack_6 from "/images/dress/neck_type/Single Button.png";

import Pocket_1 from "/images/dress/pocket_type/Pointed Triangle.png";
import Pocket_2 from "/images/dress/pocket_type/Pointed.png";
import Pocket_3 from "/images/dress/pocket_type/Hidden Curved.png";
import Pocket_4 from "/images/dress/pocket_type/Curved.png";
import Pocket_5 from "/images/dress/pocket_type/Square.png";
import Pocket_6 from "/images/dress/pocket_type/Standard.png";
import Pocket_7 from "/images/dress/pocket_type/Standard Curved.png";
import Pocket_8 from "/images/dress/pocket_type/Standard Triangle.png";

import Hand_1 from "/images/dress/hand_type/Standard Cuffed.png";
import Hand_2 from "/images/dress/hand_type/Standard Chart.png";
import Hand_3 from "/images/dress/hand_type/Standard.png";
import Hand_4 from "/images/dress/hand_type/Cuffed Chart.png";
import Hand_5 from "/images/dress/hand_type/Standard Small.png";

//___ Css ___//
import "./CustomizeImg.scss";

//___ Components ___//
const GetScreenShoot = lazy(() => import("../GetScreenShoot/GetScreenShoot"));

const CustomizeImg = () => {
  // Images
  const [dressImgPreview, setDressImgPreview] = useState({
    dressImgPrev: jubba,
    dressImgNamePrev: "Standard",
    widthDressImgPrev: null,
    heightDressImgPrev: null,
    topDressImgPrev: null,
    rightPosDressImgPrev: null,
    leftPosDressImgPrev: null,
  });
  const [btnImgPreview, setBtnImgPreview] = useState({
    btnImgPrev: null,
    btnImgNamePrev: "",
    widthBtnImgPrev: null,
    heightBtnImgPrev: null,
    topBtnImgPrev: null,
    rightPosBtnImgPrev: null,
    leftPosBtnImgPrev: null,
  });
  const [nakImgPreview, setNakImgPreview] = useState({
    nakImgPrev: null,
    nakImgNamePrev: "",
    widthNakImgPrev: null,
    rightPosNakImgPrev: null,
    leftPosNakImgPrev: null,
  });
  const [pktImgPreview, setPktImgPreview] = useState({
    pktImgPrev: null,
    pktImgNamePrev: "",
    widthPktImgPrev: null,
    rightPosPktImgPrev: null,
  });
  const [handImgPreview, setHandImgPreview] = useState({
    hndImgPrev: null,
    hndImgNamePrev: "",
    widthHndImgPrev: null,
    topPosHndImgPrev: null,
    rightPosHndImgPrev: null,
    leftPosHndImgPrev: null,
  });

  const dressImg = [
    {
      dressImg: jubba,
      dressName: "Standard",
      width: "300px",
      height: "400px",
      top: "0",
      right: "0",
    },
    {
      dressImg: Dress_1,
      dressName: "Dress 1",
      width: "300px",
      height: "400px",
      top: "0",
      right: "0",
    },
    {
      dressImg: Dress_2,
      dressName: "Dress 2",
      width: "300px",
      height: "400px",
      top: "0",
      right: "0",
    },
    {
      dressImg: Dress_3,
      dressName: "Dress 3",
      width: "300px",
      height: "400px",
      top: "0",
      right: "0",
    },
    {
      dressImg: Dress_4,
      dressName: "Dress 4",
      width: "300px",
      height: "400px",
      top: "0",
      right: "0",
    },
  ];
  const buttonImg = [
    {
      btnImg: Btn_1,
      btnName: "Button Triangle",
      width: "73px",
      height: "170px",
      top: "26px",
      right: "110px",
    },
    {
      btnImg: Btn_2,
      btnName: "Button Square",
      width: "73px",
      height: "170px",
      top: "26px",
      right: "110px",
    },
    {
      btnImg: Btn_3,
      btnName: "Button Curved",
      width: "73px",
      height: "170px",
      top: "26px",
      right: "110px",
    },
    {
      btnImg: Btn_4,
      btnName: "Hidden Curved",
      width: "71px",
      height: "171px",
      top: "16px",
      right: "111px",
    },
    {
      btnImg: Btn_5,
      btnName: "Hidden Square",
      width: "73px",
      height: "170px",
      top: "26px",
      right: "110px",
    },
    {
      btnImg: Btn_6,
      btnName: "Hidden Triangle",
      width: "73px",
      height: "170px",
      top: "26px",
      right: "110px",
    },
    {
      btnImg: Btn_7,
      btnName: "Zipper Cuved",
      width: "73px",
      height: "170px",
      top: "26px",
      right: "110px",
    },
    {
      btnImg: Btn_8,
      btnName: "Zipper Square",
      width: "73px",
      height: "170px",
      top: "26px",
      right: "110px",
    },
    {
      btnImg: Btn_9,
      btnName: "Zipper Triangle",
      width: "73px",
      height: "170px",
      top: "26px",
      right: "110px",
    },
  ];
  const nackImg = [
    { nakImg: Nack_1, nakName: "French", width: "80px", right: "108px" },
    {
      nakImg: Nack_2,
      nakName: "double button",
      width: "80px",
      right: "108px",
    },
    { nakImg: Nack_3, nakName: "Closed Royal", width: "80px", right: "108px" },
    { nakImg: Nack_4, nakName: "Opened", width: "80px", right: "108px" },
    { nakImg: Nack_5, nakName: "Royal", width: "80px", right: "108px" },
    {
      nakImg: Nack_6,
      nakName: "Single Button ",
      width: "80px",
      right: "108px",
    },
  ];
  const pocketImg = [
    {
      pktImg: Pocket_1,
      pktName: "Pointed Triangle",
      width: "58px",
      right: "72px",
    },
    { pktImg: Pocket_2, pktName: "Pointed", width: "58px", right: "72px" },
    {
      pktImg: Pocket_3,
      pktName: "Hidden Curved",
      width: "58px",
      right: "72px",
    },
    { pktImg: Pocket_4, pktName: "Curved", width: "58px", right: "72px" },
    { pktImg: Pocket_5, pktName: "Square", width: "58px", right: "72px" },
    { pktImg: Pocket_6, pktName: "Standard", width: "58px", right: "72px" },
    {
      pktImg: Pocket_7,
      pktName: "Standard Curved",
      width: "58px",
      right: "72px",
    },
    {
      pktImg: Pocket_8,
      pktName: "Standard Triangle",
      width: "58px",
      right: "72px",
    },
  ];
  const handImg = [
    {
      hndImg: Hand_1,
      hndName: "Standard Cuffed",
      width: "102px",
      top: "147px",
      right: "-30px",
      left: "-32px",
    },
    {
      hndImg: Hand_2,
      hndName: "Standard Chart",
      width: "102px",
      top: "147px",
      right: "-30px",
      left: "-32px",
    },
    {
      hndImg: Hand_3,
      hndName: "Standard",
      width: "102px",
      top: "147px",
      right: "-29px",
      left: "-33px",
    },
    {
      hndImg: Hand_4,
      hndName: "Cuffed Chart",
      width: "102px",
      top: "147px",
      right: "-30px",
      left: "-32px",
    },
    {
      hndImg: Hand_5,
      hndName: "Standard",
      width: "103px",
      top: "145px",
      right: "-31px",
      left: "-32px",
    },
  ];

  const handelDressImgPreview = (items) => {
    setDressImgPreview({
      ...dressImgPreview,
      dressImgPrev: items.dressImg,
      dressImgNamePrev: items.dressName,
      widthDressImgPrev: items.width,
      heightDressImgPrev: items.height,
      topDressImgPrev: items.top,
      rightPosDressImgPrev: items.right,
    });

    if (dressImgPreview.dressImgNamePrev !== "Standard") {
      setBtnImgPreview({
        btnImgPrev: null,
        widthBtnImgPrev: null,
        rightPosBtnImgPrev: null,
        leftPosBtnImgPrev: null,
      });
      setNakImgPreview({
        nakImgPrev: null,
        widthNakImgPrev: null,
        rightPosNakImgPrev: null,
        leftPosNakImgPrev: null,
      });
      setPktImgPreview({
        pktImgPrev: null,
        widthPktImgPrev: null,
        rightPosPktImgPrev: null,
      });
      setHandImgPreview({
        hndImgPrev: null,
        widthHndImgPrev: null,
        rightPosHndImgPrev: null,
        leftPosHndImgPrev: null,
      });
    }
  };
  const handelButtonImgPreview = (items) => {
    setBtnImgPreview({
      ...btnImgPreview,
      btnImgPrev: items.btnImg,
      btnImgNamePrev: items.btnName,
      widthBtnImgPrev: items.width,
      heightBtnImgPrev: items.height,
      topBtnImgPrev: items.top,
      rightPosBtnImgPrev: items.right,
    });
  };
  const handelNackImgPreview = (items) => {
    setNakImgPreview({
      ...nakImgPreview,
      nakImgPrev: items.nakImg,
      nakImgNamePrev: items.nakName,
      widthNakImgPrev: items.width,
      rightPosNakImgPrev: items.right,
    });
  };
  const handelPocketImgPreview = (items) => {
    setPktImgPreview({
      ...pktImgPreview,
      pktImgPrev: items.pktImg,
      pktImgNamePrev: items.pktName,
      widthPktImgPrev: items.width,
      rightPosPktImgPrev: items.right,
    });
  };
  const handelHandImgPreview = (items) => {
    setHandImgPreview({
      ...handImgPreview,
      hndImgPrev: items.hndImg,
      hndImgNamePrev: items.hndName,
      widthHndImgPrev: items.width,
      topPosHndImgPrev: items.top,
      rightPosHndImgPrev: items.right,
      leftPosHndImgPrev: items.left,
    });
  };

  // Active Button
  const [activeBtn, setActiveBtn] = useState(0);
  const handleButtonChild = (e) => {
    setActiveBtn((prev) => e.target.value);
  };

  // Reset
  const handelReset = () => {
    setActiveBtn(0);

    setDressImgPreview({
      dressImgPrev: jubba,

      // widthDressImgPrev: items.width,
      // heightDressImgPrev: items.height,
      // topDressImgPrev: items.top,
      // rightPosDressImgPrev: items.right,
    });
    setBtnImgPreview({
      btnImgPrev: null,
      widthBtnImgPrev: null,
      rightPosBtnImgPrev: null,
      leftPosBtnImgPrev: null,
    });
    setNakImgPreview({
      nakImgPrev: null,
      widthNakImgPrev: null,
      rightPosNakImgPrev: null,
      leftPosNakImgPrev: null,
    });
    setPktImgPreview({
      pktImgPrev: null,
      widthPktImgPrev: null,
      rightPosPktImgPrev: null,
    });
    setHandImgPreview({
      hndImgPrev: null,
      widthHndImgPrev: null,
      rightPosHndImgPrev: null,
      leftPosHndImgPrev: null,
    });
  };

  return (
    <div className="CustomizeImg d-flex flex-start gap-30">
      <div className="left previewSection">
        <h2 className="title">Preview Image</h2>
        <div className="imageBox d-flex" id="capture">
          <img
            src={dressImgPreview.dressImgPrev}
            alt=""
            style={
              {
                // width: dressImgPreview.widthDressImgPrev,
                // height: dressImgPreview.heightDressImgPrev,
                // top: dressImgPreview.topDressImgPrev,
                // right: dressImgPreview.rightPosDressImgPrev,
              }
            }
            className={`main-img ${
              dressImgPreview == null ? "d-none" : "main-img"
            }`}
          />
          <img
            src={btnImgPreview.btnImgPrev}
            alt=""
            style={{
              width: btnImgPreview.widthBtnImgPrev,
              height: btnImgPreview.heightBtnImgPrev,
              top: btnImgPreview.topBtnImgPrev,
              right: btnImgPreview.rightPosBtnImgPrev,
            }}
            className={`buttonImg ${
              dressImgPreview.dressImgNamePrev !== "Standard" ? "d-none" : ""
            }`}
          />
          <img
            src={nakImgPreview.nakImgPrev}
            alt=""
            style={{
              width: nakImgPreview.widthNakImgPrev,
              right: nakImgPreview.rightPosNakImgPrev,
            }}
            className={`nackImg ${
              dressImgPreview.dressImgNamePrev !== "Standard" ? "d-none" : ""
            }`}
          />
          <img
            src={pktImgPreview.pktImgPrev}
            alt=""
            style={{
              width: pktImgPreview.widthPktImgPrev,
              right: pktImgPreview.rightPosPktImgPrev,
            }}
            className={`pocket ${
              dressImgPreview.dressImgNamePrev !== "Standard" ? "d-none" : ""
            }`}
          />
          <img
            src={handImgPreview.hndImgPrev}
            alt=""
            style={{
              width: handImgPreview.widthHndImgPrev,
              top: handImgPreview.topPosHndImgPrev,
              right: handImgPreview.rightPosHndImgPrev,
            }}
            className={`rightHand ${
              dressImgPreview.dressImgNamePrev !== "Standard" ? "d-none" : ""
            }`}
          />
          <img
            src={handImgPreview.hndImgPrev}
            alt=""
            style={{
              width: handImgPreview.widthHndImgPrev,
              top: handImgPreview.topPosHndImgPrev,
              left: handImgPreview.leftPosHndImgPrev,
            }}
            className={`leftHand ${
              dressImgPreview.dressImgNamePrev !== "Standard" ? "d-none" : ""
            }`}
          />
        </div>
      </div>
      <div className="right">
        <h2>Select type</h2>
        <div className="btnBox d-flex flex-start gap-30">
          <div className="btnParent">
            <button className="button" onClick={handleButtonChild} value={0}>
              Dress Type
            </button>
            <ul className={`${activeBtn == 0 ? "btnChild active" : "d-none"}`}>
              {dressImg.map((items, index) => {
                return (
                  <li key={index}>
                    <Tooltip title={items.dressName}>
                      <img
                        src={items.dressImg}
                        alt=""
                        onClick={() => handelDressImgPreview(items)}
                      />
                    </Tooltip>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="btnParent">
            <button
              className={`button ${
                dressImgPreview.dressImgNamePrev == "Standard" ? "" : "disabled"
              }`}
              onClick={handleButtonChild}
              value={1}
            >
              Button Type
            </button>
            <ul className={`${activeBtn == 1 ? "btnChild active" : "d-none"}`}>
              {buttonImg.map((items, index) => {
                return (
                  <li key={index}>
                    <Tooltip title={items.btnName}>
                      <img
                        src={items.btnImg}
                        alt=""
                        onClick={() => handelButtonImgPreview(items)}
                      />
                    </Tooltip>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="btnParent">
            <button
              className={`button ${
                dressImgPreview.dressImgNamePrev == "Standard" ? "" : "disabled"
              }`}
              onClick={handleButtonChild}
              value={2}
            >
              Neck Type
            </button>
            <ul className={`${activeBtn == 2 ? "btnChild active" : "d-none"}`}>
              {nackImg.map((items, index) => {
                return (
                  <li key={index}>
                    <Tooltip title={items.nakName}>
                      <img
                        src={items.nakImg}
                        alt=""
                        onClick={() => handelNackImgPreview(items)}
                      />
                    </Tooltip>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="btnParent">
            <button
              className={`button ${
                dressImgPreview.dressImgNamePrev == "Standard" ? "" : "disabled"
              }`}
              onClick={handleButtonChild}
              value={3}
            >
              Pocket Type
            </button>
            <ul className={`${activeBtn == 3 ? "btnChild active" : "d-none"}`}>
              {pocketImg.map((items, index) => {
                return (
                  <li key={index}>
                    <Tooltip title={items.pktName}>
                      <img
                        src={items.pktImg}
                        alt=""
                        onClick={() => handelPocketImgPreview(items)}
                      />
                    </Tooltip>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="btnParent">
            <button
              className={`button ${
                dressImgPreview.dressImgNamePrev == "Standard" ? "" : "disabled"
              }`}
              onClick={handleButtonChild}
              value={4}
            >
              Hand Type
            </button>
            <ul className={`${activeBtn == 4 ? "btnChild active" : "d-none"}`}>
              {handImg.map((items, index) => {
                return (
                  <li key={index}>
                    <Tooltip title={items.hndName}>
                      <img
                        src={items.hndImg}
                        alt=""
                        onClick={() => handelHandImgPreview(items)}
                      />
                    </Tooltip>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="bottomBtn d-flex gap-30">
          <Suspense fallback={<Loader />}>
            <GetScreenShoot
              dressImgName={dressImgPreview.dressImgNamePrev}
              btnImgName={btnImgPreview.btnImgNamePrev}
              nakImgName={nakImgPreview.nakImgNamePrev}
              pktImgName={pktImgPreview.pktImgNamePrev}
              hndImgName={handImgPreview.hndImgNamePrev}
            />
          </Suspense>
          <button className="button resetBtn" onClick={handelReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomizeImg;
