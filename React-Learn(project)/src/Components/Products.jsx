import React, { useState } from "react";

//___ Components ___//
import Card from "./Card";
import productsData from "../Data/ProductsData";

const Products = () => {
  const [products, setProducts] = useState(productsData);

  const sortByPrice = () => {
    const sortByPrice = products.filter((filteredItem) => {
      return filteredItem.price < 500;
    });

    setProducts(sortByPrice);
  };

  return (
    <>
      <section className="container">
        <h2 className="title">Products</h2>
        <button
          className="button"
          style={{ padding: "10px 20px", margin: "15px 0" }}
          onClick={sortByPrice}
        >
          Sort by price
        </button>
        <div className="products">
          {products.map((items, index) => {
            return (
              <Card
                key={index}
                img={items.thumbnail}
                title={items.title}
                price={items.price}
                discount={items.discountPercentage}
                stock={items.stock}
                rating={items.rating}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Products;
