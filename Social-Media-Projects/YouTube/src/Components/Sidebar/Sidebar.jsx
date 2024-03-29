import React, { useState } from "react";

//___ Images ___//
import home_icon from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles_icon from "../../assets/automobiles.png";
import sports_icon from "../../assets/sports.png";
import entertainment_icon from "../../assets/entertainment.png";
import tech_icon from "../../assets/tech.png";
import music_icon from "../../assets/music.png";
import blogs_icon from "../../assets/blogs.png";
import news_icon from "../../assets/news.png";
import jack_icon from "../../assets/jack.png";
import simon_icon from "../../assets/simon.png";
import tom_icon from "../../assets/tom.png";
import megan_icon from "../../assets/megan.png";
import cameron_icon from "../../assets/cameron.png";

//___ Css ___//
import "./Sidebar.css";

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="sortcut-links">
        <div
          className={`side-link ${category === 0 ? "active" : ""}`}
          onClick={() => setCategory(0)}
        >
          <img src={home_icon} alt="" /> <p>Home</p>
        </div>
        <div
          className={`side-link ${category === 20 ? "active" : ""}`}
          onClick={() => setCategory(20)}
        >
          <img src={game_icon} alt="" /> <p>Gaming</p>
        </div>
        <div
          className={`side-link ${category === 2 ? "active" : ""}`}
          onClick={() => setCategory(2)}
        >
          <img src={automobiles_icon} alt="" /> <p>Automobiles</p>
        </div>
        <div
          className={`side-link ${category === 17 ? "active" : ""}`}
          onClick={() => setCategory(17)}
        >
          <img src={sports_icon} alt="" /> <p>Sports</p>
        </div>
        <div
          className={`side-link ${category === 24 ? "active" : ""}`}
          onClick={() => setCategory(24)}
        >
          <img src={entertainment_icon} alt="" /> <p>Entertainments</p>
        </div>
        <div
          className={`side-link ${category === 28 ? "active" : ""}`}
          onClick={() => setCategory(28)}
        >
          <img src={tech_icon} alt="" /> <p>Technology</p>
        </div>
        <div
          className={`side-link ${category === 10 ? "active" : ""}`}
          onClick={() => setCategory(10)}
        >
          <img src={music_icon} alt="" /> <p>Music</p>
        </div>
        <div
          className={`side-link ${category === 22 ? "active" : ""}`}
          onClick={() => setCategory(22)}
        >
          <img src={blogs_icon} alt="" /> <p>Bologs</p>
        </div>
        <div
          className={`side-link ${category === 25 ? "active" : ""}`}
          onClick={() => setCategory(25)}
        >
          <img src={news_icon} alt="" /> <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jack_icon} alt="" /> <p>Jack</p>
        </div>
        <div className="side-link">
          <img src={simon_icon} alt="" /> <p>Simon</p>
        </div>
        <div className="side-link">
          <img src={tom_icon} alt="" /> <p>Tomas</p>
        </div>
        <div className="side-link">
          <img src={megan_icon} alt="" /> <p>Megan</p>
        </div>
        <div className="side-link">
          <img src={cameron_icon} alt="" /> <p>Cameron</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
