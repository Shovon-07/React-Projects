import React, { useState } from "react";
import { Link } from "react-router-dom";

//___ Icons ___//
import { FaBangladeshiTakaSign, FaAngleDown } from "react-icons/fa6";
//___ Css ___//
import "./Cards.scss";

//___ Data ___//
import { productCard } from "../../Data";

//___ Components ___//
import RattingComponent from "../RattingComponent/RattingComponent";

const Cards = () => {
  const [numberOfElement, setNumberOfElement] = useState(12);

  const slicedData = productCard.slice(0, numberOfElement);
  const loadMore = () => {
    setNumberOfElement((prev) => prev * 2);
  };

  return (
    <>
      <div className="Cards">
        <h2 className="title">Just for you</h2>
        <div className="d-flex">
          {slicedData.map((items) => {
            return (
              <div className="card" key={items.id}>
                <Link to={`/Product/${items.id}`}>
                  <div className="img">
                    <img src={items.img} alt="" />
                  </div>
                  <div className="texts">
                    <h4 className="cardTitle">
                      {String(items.title).length > 30
                        ? String(items.title).substr(0, 30) + "..."
                        : String(items.title)}
                    </h4>
                    <p className="price">
                      <FaBangladeshiTakaSign className="priceIcon" />{" "}
                      {items.price - (items.price * items.discount) / 100}
                    </p>
                    <div className="discount d-flex">
                      <s>
                        <FaBangladeshiTakaSign />
                        {items.price}
                      </s>
                      <p>-{items.discount}%</p>
                    </div>
                    <div className="ratting">
                      <RattingComponent value={items.ratting} />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="loadMore">
          <button onClick={loadMore}>Load More</button>
        </div>
      </div>
    </>
  );
};

export default Cards;
