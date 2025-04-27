import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/adminpanel/AdminPanel.css";
import Categories from "./categories/Categories.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faBoxOpen,
  faUsers,
  faChartLine,
  faTags,
} from "@fortawesome/free-solid-svg-icons";

function AdminPanel() {
  const [showAddProductSection, setShowAddProductSection] = useState(false);
  const addProductRef = useRef(null);

  const [activeMenuItem, showMenuItem] = useState("products");
  const triggerDisplayAddProductSection = () => {
    if (addProductRef.current) {
      addProductRef.current.style.display = "flex";
    }
    setShowAddProductSection(true);
  };
  const updateMenuItem = (section) => {
    showMenuItem(section);
  };
  return (
    <section className="admin-panel">
      <section className="menu-section">
        <nav>
          <ul>
            <li>
              <button
                onClick={() => showMenuItem("orders")}
                className={activeMenuItem === "orders" ? "active" : ""}
              >
                <FontAwesomeIcon
                  icon={faClipboardList}
                  style={{ marginRight: "8px" }}
                />{" "}
                Orders
              </button>
            </li>
            <li>
              <button
                onClick={() => showMenuItem("products")}
                className={activeMenuItem === "products" ? "active" : ""}>
                <FontAwesomeIcon
                  icon={faBoxOpen}
                  style={{ marginRight: "8px" }}
                />{" "}
                Products
              </button>
            </li>
            <li>
              <button
                onClick={() => showMenuItem("categories")}
                className={activeMenuItem === "categories" ? "active" : ""}>
                <FontAwesomeIcon
                  icon={faTags}
                  style={{ marginRight: "8px" }}
                />{" "}
                Categories
              </button>
            </li>
            <li>
              <button
                onClick={() => showMenuItem("customers")}
                className={activeMenuItem === "customers" ? "active" : ""}
              >
                <FontAwesomeIcon
                  icon={faUsers}
                  style={{ marginRight: "8px" }}
                />{" "}
                Customers
              </button>
            </li>
            <li>
              <button
                onClick={() => showMenuItem("analytics")}
                className={activeMenuItem === "analytics" ? "active" : ""}
              >
                <FontAwesomeIcon
                  icon={faChartLine}
                  style={{ marginRight: "8px" }}
                />{" "}
                Analytics
              </button>
            </li>
          </ul>
        </nav>
      </section>
      <section className="content-section">
        {activeMenuItem === "products" && (
          <section className="products-section">
            <input className="search-bar" type="text" placeholder="Search" />
            <div className="sort-box-wrapper">
              <select className="sort-box">
                <option value="name">Best Sellers</option>
                <option value="name">Top rated</option>
                <option value="price">Price Range</option>
                <option value="name">Newly Added</option>
                <option value="color">Color</option>
              </select>
            </div>
            <section className="product-grid">
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Total</th>
                    <th>Inventory</th>
                    <th>Price</th>
                    <th>Visibility</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
              <Link to="/addProduct">
                {" "}
                <button id="upload-product-button">UPLOAD</button>
              </Link>
            </section>
          </section>
        )}
        {activeMenuItem === "categories" && (
          <Categories/>
        )}
      </section>
    </section>
  );
}

export default AdminPanel;
