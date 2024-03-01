import React from "react";

//___ CSS ___//
import "../assets/css/table.css";

//___ Components ___//
import SideNav from "../Components/SideNav";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Brands() {
  const createBrandPopUp = () => {
    alert("createBrandPopUp()");
  };

  return (
    <>
      <SideNav />
      <Header />
      <div className="main-panel">
        <div className="container">
          <section className="section">
            <h1>Brands</h1>
            <div data-bs-theme="dark" style={{ marginTop: "20px" }}>
              <div style={{ textAlign: "right" }}>
                <button
                  className="button"
                  style={{ padding: "10px 20px" }}
                  onClick={createBrandPopUp}
                >
                  Add new brand
                </button>
              </div>
              <table id="table">
                <thead>
                  <tr>
                    <th>Sl no</th>
                    <th>Brand name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody id="tableData">
                  <tr>
                    <td>1</td>
                    <td>shovon</td>
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
