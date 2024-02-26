import React from "react";

//___ Images ___//
import ProductImg from "../assets/images/Contact-us-amico.png";

const Card = (props) => {
  // const [title, price] = props;
  return (
    <>
      {/* <section className="container">
        <h2 className="title">Products</h2>
        <div className="products">
          <div className="card">
            <img src={ProductImg} alt="" />
            <div>
              <h3>Shoes</h3>
              <p>Price : 40$</p>
              <button className="button">Show</button>
            </div>
          </div>

          <div className="card">
            <img src={ProductImg} alt="" />
            <div>
              <h3>Shoes</h3>
              <p>Price : 40$</p>
              <button className="button">Show</button>
            </div>
          </div>

          <div className="card">
            <img src={ProductImg} alt="" />
            <div>
              <h3>Shoes</h3>
              <p>Price : 40$</p>
              <button className="button">Show</button>
            </div>
          </div>

          <div className="card">
            <img src={ProductImg} alt="" />
            <div>
              <h3>Shoes</h3>
              <p>Price : 40$</p>
              <button className="button">Show</button>
            </div>
          </div>
        </div>
      </section> */}

      <div className="card">
        <img src={props.img} alt="" />
        <div>
          <h3>{props.title}</h3>
          <p>Price : {props.price} $</p>
          <div className="d-flex-full" style={{ margin: "15px 0" }}>
            <p style={{ marginRight: "5px" }}>Discount: {props.discount} %</p>
            <p style={{ marginLeft: "5px" }}>Stock: {props.stock}</p>
          </div>
          <p>Rating : {props.rating}</p>
          <button className="button">Show</button>
        </div>
      </div>
    </>
  );
};

export default Card;
