import React, { useState } from "react";
import { Link } from "react-router-dom";

//___ Icons ___//
import { FaBangladeshiTakaSign } from "react-icons/fa6";

//___ Css ___//
import "./Cards.scss";

//___ Data ___//
import { productCard } from "../../Data";

//___ Components ___//
import RattingComponent from "../RattingComponent/RattingComponent";

// import Product_1 from "/images/product-1.jpg";
// import Product_2 from "/images/product-2.jpg";
// import Product_3 from "/images/product-3.jpg";
// import Product_4 from "/images/product-4.jpg";

const Cards = () => {
  const [productTitle, setProductTitle] = useState();

  return (
    <div className="Cards d-flex">
      {productCard.map((items) => {
        return (
          <div className="card" key={items.id}>
            <Link to={`/view-product/${items.id}`}>
              <div className="img">
                <img src={items.img} alt="" />
              </div>
              <div className="texts">
                <h4 className="title">
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
      {/* <div className="card">
        <Link>
          <div className="img">
            <img src={Product_1} alt="" />
          </div>
          <div className="texts">
            <h4 className="title">
              {String(productTitle).length > 30
                ? String(productTitle).substr(0, 30) + "..."
                : String(productTitle)}
            </h4>
            <p className="price">
              <FaBangladeshiTakaSign className="priceIcon" /> 450
            </p>
            <div className="discount d-flex">
              <s>
                <FaBangladeshiTakaSign />
                500
              </s>
              <p>-50%</p>
            </div>
            <div className="ratting">
              <RattingComponent />
            </div>
          </div>
        </Link>
      </div> */}
      {/* <div className="card">
        <Link>
          <div className="img">
            <img src={Product_2} alt="" />
          </div>
          <div>
            <h4>
              {String(productTitle).length > 30
                ? String(productTitle).substr(0, 30) + "..."
                : String(productTitle)}
            </h4>
            <p>
              <FaBangladeshiTakaSign /> 500
            </p>
            <div className="discount">
              <p>
                <FaBangladeshiTakaSign /> 500
              </p>
              <p>50%</p>
            </div>
            <RattingComponent />
          </div>
        </Link>
      </div>
      <div className="card">
        <Link>
          <div className="img">
            <img src={Product_3} alt="" />
          </div>
          <div>
            <h4>
              {String(productTitle).length > 30
                ? String(productTitle).substr(0, 30) + "..."
                : String(productTitle)}
            </h4>
            <p>
              <FaBangladeshiTakaSign /> 500
            </p>
            <div className="discount">
              <p>
                <FaBangladeshiTakaSign /> 500
              </p>
              <p>50%</p>
            </div>
            <RattingComponent />
          </div>
        </Link>
      </div>
      <div className="card">
        <Link>
          <div className="img">
            <img src={Product_4} alt="" />
          </div>
          <div>
            <h4>
              {String(productTitle).length > 30
                ? String(productTitle).substr(0, 30) + "..."
                : String(productTitle)}
            </h4>
            <p>
              <FaBangladeshiTakaSign /> 500
            </p>
            <div className="discount">
              <p>
                <FaBangladeshiTakaSign /> 500
              </p>
              <p>50%</p>
            </div>
            <RattingComponent />
          </div>
        </Link>
      </div>
      <div className="card">
        <Link>
          <div className="img">
            <img src={Product_1} alt="" />
          </div>
          <div className="texts">
            <h4>
              {String(productTitle).length > 30
                ? String(productTitle).substr(0, 30) + "..."
                : String(productTitle)}
            </h4>
            <p>
              <FaBangladeshiTakaSign /> 500
            </p>
            <div className="discount">
              <p>
                <FaBangladeshiTakaSign /> 500
              </p>
              <p>50%</p>
            </div>
            <RattingComponent />
          </div>
        </Link>
      </div>
      <div className="card">
        <Link>
          <div className="img">
            <img src={Product_2} alt="" />
          </div>
          <div>
            <h4>
              {String(productTitle).length > 30
                ? String(productTitle).substr(0, 30) + "..."
                : String(productTitle)}
            </h4>
            <p>
              <FaBangladeshiTakaSign /> 500
            </p>
            <div className="discount">
              <p>
                <FaBangladeshiTakaSign /> 500
              </p>
              <p>50%</p>
            </div>
            <RattingComponent />
          </div>
        </Link>
      </div>
      <div className="card">
        <Link>
          <div className="img">
            <img src={Product_3} alt="" />
          </div>
          <div>
            <h4>
              {String(productTitle).length > 30
                ? String(productTitle).substr(0, 30) + "..."
                : String(productTitle)}
            </h4>
            <p>
              <FaBangladeshiTakaSign /> 500
            </p>
            <div className="discount">
              <p>
                <FaBangladeshiTakaSign /> 500
              </p>
              <p>50%</p>
            </div>
            <RattingComponent />
          </div>
        </Link>
      </div>
      <div className="card">
        <Link>
          <div className="img">
            <img src={Product_4} alt="" />
          </div>
          <div>
            <h4>
              {String(productTitle).length > 30
                ? String(productTitle).substr(0, 30) + "..."
                : String(productTitle)}
            </h4>
            <p>
              <FaBangladeshiTakaSign /> 500
            </p>
            <div className="discount">
              <p>
                <FaBangladeshiTakaSign /> 500
              </p>
              <p>50%</p>
            </div>
            <RattingComponent />
          </div>
        </Link>
      </div>
      <div className="card">
        <Link>
          <div className="img">
            <img src={Product_1} alt="" />
          </div>
          <div className="texts">
            <h4>
              {String(productTitle).length > 30
                ? String(productTitle).substr(0, 30) + "..."
                : String(productTitle)}
            </h4>
            <p>
              <FaBangladeshiTakaSign /> 500
            </p>
            <div className="discount">
              <p>
                <FaBangladeshiTakaSign /> 500
              </p>
              <p>50%</p>
            </div>
            <RattingComponent />
          </div>
        </Link>
      </div>
      <div className="card">
        <Link>
          <div className="img">
            <img src={Product_2} alt="" />
          </div>
          <div>
            <h4>
              {String(productTitle).length > 30
                ? String(productTitle).substr(0, 30) + "..."
                : String(productTitle)}
            </h4>
            <p>
              <FaBangladeshiTakaSign /> 500
            </p>
            <div className="discount">
              <p>
                <FaBangladeshiTakaSign /> 500
              </p>
              <p>50%</p>
            </div>
            <RattingComponent />
          </div>
        </Link>
      </div>
      <div className="card">
        <Link>
          <div className="img">
            <img src={Product_3} alt="" />
          </div>
          <div>
            <h4>
              {String(productTitle).length > 30
                ? String(productTitle).substr(0, 30) + "..."
                : String(productTitle)}
            </h4>
            <p>
              <FaBangladeshiTakaSign /> 500
            </p>
            <div className="discount">
              <p>
                <FaBangladeshiTakaSign /> 500
              </p>
              <p>50%</p>
            </div>
            <RattingComponent />
          </div>
        </Link>
      </div>
      <div className="card">
        <Link>
          <div className="img">
            <img src={Product_4} alt="" />
          </div>
          <div>
            <h4>
              {String(productTitle).length > 30
                ? String(productTitle).substr(0, 30) + "..."
                : String(productTitle)}
            </h4>
            <p>
              <FaBangladeshiTakaSign /> 500
            </p>
            <div className="discount">
              <p>
                <FaBangladeshiTakaSign /> 500
              </p>
              <p>50%</p>
            </div>
            <RattingComponent />
          </div>
        </Link>
      </div>
      <div className="card">
        <Link>
          <div className="img">
            <img src={Product_1} alt="" />
          </div>
          <div className="texts">
            <h4>
              {String(productTitle).length > 30
                ? String(productTitle).substr(0, 30) + "..."
                : String(productTitle)}
            </h4>
            <p>
              <FaBangladeshiTakaSign /> 500
            </p>
            <div className="discount">
              <p>
                <FaBangladeshiTakaSign /> 500
              </p>
              <p>50%</p>
            </div>
            <RattingComponent />
          </div>
        </Link>
      </div>
      <div className="card">
        <Link>
          <div className="img">
            <img src={Product_2} alt="" />
          </div>
          <div>
            <h4>
              {String(productTitle).length > 30
                ? String(productTitle).substr(0, 30) + "..."
                : String(productTitle)}
            </h4>
            <p>
              <FaBangladeshiTakaSign /> 500
            </p>
            <div className="discount">
              <p>
                <FaBangladeshiTakaSign /> 500
              </p>
              <p>50%</p>
            </div>
            <RattingComponent />
          </div>
        </Link>
      </div>
      <div className="card">
        <Link>
          <div className="img">
            <img src={Product_3} alt="" />
          </div>
          <div>
            <h4>
              {String(productTitle).length > 30
                ? String(productTitle).substr(0, 30) + "..."
                : String(productTitle)}
            </h4>
            <p>
              <FaBangladeshiTakaSign /> 500
            </p>
            <div className="discount">
              <p>
                <FaBangladeshiTakaSign /> 500
              </p>
              <p>50%</p>
            </div>
            <RattingComponent />
          </div>
        </Link>
      </div>
      <div className="card">
        <Link>
          <div className="img">
            <img src={Product_4} alt="" />
          </div>
          <div>
            <h4>
              {String(productTitle).length > 30
                ? String(productTitle).substr(0, 30) + "..."
                : String(productTitle)}
            </h4>
            <p>
              <FaBangladeshiTakaSign /> 500
            </p>
            <div className="discount">
              <p>
                <FaBangladeshiTakaSign /> 500
              </p>
              <p>50%</p>
            </div>
            <RattingComponent />
          </div>
        </Link>
      </div> */}
    </div>
  );
};

export default Cards;
