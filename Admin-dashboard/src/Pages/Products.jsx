import React from "react";

//___ Components ___//
import SideNav from "../Components/SideNav";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Products() {
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
                  <tr>
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
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
