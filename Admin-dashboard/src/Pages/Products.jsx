import React, { useEffect, useState } from "react";
import axios from "axios";

//___ Components ___//
import SideNav from "../Components/SideNav";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [errMsg, setErrMsg] = useState();

  const fetchData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    } catch (err) {
      setErrMsg(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const createProductPopUp = () => {
    alert("createProductPopUp()");
  };

  return (
    <>
      <SideNav />
      <Header />

      <div className="main-panel">
        <div className="container">
          <section className="section">
            <h1>Products</h1>
            <div data-bs-theme="dark" style={{ marginTop: "20px" }}>
              <div style={{ textAlign: "right" }}>
                <button
                  className="button"
                  style={{ padding: "10px 20px" }}
                  onClick={createProductPopUp}
                >
                  Add new product
                </button>
              </div>
              <table id="table">
                <thead>
                  <tr>
                    <th>Sl no</th>
                    <th>Products title</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Image</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody id="tableData">
                  {products.map((items, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{items.title}</td>
                        <td>{items.price}</td>
                        <td>{items.rating.count}</td>
                        <td>
                          <img
                            src={items.image}
                            alt=""
                            style={{ width: "40px", height: "40px" }}
                          />
                        </td>
                        <td>
                          <button data-id="${item['id']}" className="edite">
                            Edite
                          </button>
                          <span className="btnDevider">|</span>
                          <button data-id="${item['id']}" className="delete">
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}

                  {/* <tr>
                    <td>1</td>
                    <td>shovon</td>
                    <td>20000</td>
                    <td>100</td>
                    <td>img</td>
                    <td>
                      <button data-id="${item['id']}" className="edite">
                        Edite
                      </button>
                      <span className="btnDevider">|</span>
                      <button data-id="${item['id']}" className="delete">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>jubair</td>
                    <td>3000</td>
                    <td>50</td>
                    <td>img</td>
                    <td>
                      <button data-id="${item['id']}" className="edite">
                        Edite
                      </button>
                      <span className="btnDevider">|</span>
                      <button data-id="${item['id']}" className="delete">
                        Delete
                      </button>
                    </td>
                  </tr> */}
                </tbody>
              </table>
              <h4 style={{ textAlign: "center" }}>{errMsg}</h4>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
