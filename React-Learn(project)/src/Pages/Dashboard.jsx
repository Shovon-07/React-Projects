import React from "react";

//___ CSS ___//
import "../assets/css/Card.css";

//___ Images ___//
import Laptop from "../assets/images/laptop.jpg";
import Perfume from "../assets/images/perfume.jpg";

//___ Components ___//
import Card from "../Components/Card";
import TempRemote from "../Components/TempRemote";
import Header from "../Components/Header";
import Products from "../Components/Products";
import Contact from "../Components/Contact";
import ContextChild from "../Components/ContextChild";

const Dashboard = (props) => {
  const productsData = [
    { title: "Mens", price: "50$", img: Laptop },
    { title: "Womens", price: "10$", img: Perfume },
    { title: "Child", price: "40$", img: Laptop },
    { title: "Old", price: "6$", img: Perfume },
  ];
  return (
    <>
      <Header />
      <Products />

      {/* Card */}
      <section className="container">
        <h2 className="title">Cards</h2>
        <div className="products">
          {productsData.map((items, i) => {
            return (
              <Card
                key={i}
                img={items.img}
                title={items.title}
                price={items.price}
              />
            );
          })}
        </div>
      </section>

      <TempRemote />
      <Contact />

      {/* <ContextChild ContData={props.ContextData} /> */}
      <ContextChild />
    </>
  );
};

export default Dashboard;
