import React from "react";
import { useParams } from "react-router-dom";

//___ Components ___//
import SideNav from "../Components/SideNav";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Category() {
  let { id } = useParams();

  const createCategoryPopUp = () => {
    alert("createCategoryPopUp()");
  };

  return (
    <>
      <SideNav />
      <Header />
      <div className="main-panel">
        <div className="container">
          <section className="section">
            <h1>Categories</h1>
            <div data-bs-theme="dark" style={{ marginTop: "20px" }}>
              <div style={{ textAlign: "right" }}>
                <button
                  className="button"
                  style={{ padding: "10px 20px" }}
                  onClick={createCategoryPopUp}
                >
                  Add new category
                </button>
              </div>
              <table id="table">
                <thead>
                  <tr>
                    <th>Sl no</th>
                    <th>Category name</th>
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
