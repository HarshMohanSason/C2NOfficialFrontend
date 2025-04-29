import React, { useState,  useEffect, useRef } from "react";
import "../../../styles/adminpanel/products/AddProduct.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SingleImageUploader from "../../../utilities/SingleImageUploader.js";
import MultiImageUploader from "../../../utilities/MultiImageUploader.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { CustomAlert } from "../../../utilities/CustomAlert.js";

function AddProduct() {

  const [thumbnail, setThumbnail] = useState(null);
  const [activeTab, setActiveTab] = useState("Price");
  const [categoriesSummary, setCategoriesSummary] = useState([{
    id: "1", 
    name: "",
  }])
  const [productData, setProductData] = useState({
    name: "",
    category_id: "1",
    thumbnail_image: "",
    carousel_images: Array(8).fill(null),
    amount_sold: "",
    inventory: "",
    long_description: "",
    short_description: "",
    price: "",
    slug: "",
    sku: "",
    status: true,
    discount: "",
    weight: "",
    length: "",
    width: "",
    height: "",
  });

  {/* Fetch the categories summary to populate the select category option*/}
  useEffect(() => {
    // Function to fetch data
    const fetchCategoriesSummary = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_GET_ALL_CATEGORY_SUMMARY, {
          method: "GET",
          credentials: "include", 
        });
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCategoriesSummary(data);
      } catch (error) {
            CustomAlert({
              title: "Oops!",
              text: error.message,
          });
      } 
    };
    fetchCategoriesSummary(); 
  }, []); 

  const updateProductData = (name, value) => {
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const createProductFormData = () => {
    const formData = new FormData();

    formData.append("name", productData.name);
    formData.append("amount_sold", parseInt(productData.amount_sold, 10)); // Make sure it's an integer
    formData.append("inventory", parseInt(productData.inventory, 10)); // Make sure it's an integer
    formData.append("category_id", productData.category_id);
    formData.append("long_description", productData.long_description);
    formData.append("short_description", productData.short_description);
    formData.append("price", parseInt(productData.price)); // Ensure price is a float
    formData.append("slug", productData.slug);
    formData.append("sku", productData.sku);
    formData.append("status", productData.status); // Boolean field
    formData.append("discount", parseInt(productData.discount) || 0); // Default to 0 if empty
    formData.append("weight", parseFloat(productData.weight) || 0); // Default to 0 if empty
    formData.append("length", parseFloat(productData.length) || 0); // Default to 0 if empty
    formData.append("width", parseFloat(productData.width) || 0); // Default to 0 if empty
    formData.append("height", parseFloat(productData.height) || 0); // Default to 0 if empty

    // Thumbnail Image
    if (productData.thumbnail_image) {
      formData.append("thumbnail_image", productData.thumbnail_image); // Make sure it's a file object
    }

    // Carousel images array
    productData.carousel_images.forEach((file) => {
      formData.append("carousel_images", file);
    });

    return formData;
  };

  //Submit the productData
  async function submitData(event) {
    event.preventDefault();
    console.log(process.env.REACT_APP_SUBMIT_PRODUCT_DATA)
    try {
      const productData = createProductFormData();
      const response = await fetch(process.env.REACT_APP_SUBMIT_PRODUCT_DATA, {
        method: "POST",
        credentials: "include",
        body: productData,
      });
      const result = await response.text();
      if (!response.ok) {
        throw new Error(result);
      }
    } catch (error) {
      CustomAlert({
        title: "Oops!",
        text: error.message,
      });
      return;
    }
  }

  return (
    <section className="add-product-page">
      <form onSubmit={submitData} method="post">
        <section className="add-product-section">
          <h1>Add Product</h1>
          <section className="product-name-section">
            <label>Product Name</label>
            <input
              className="product-name"
              name="name"
              value={productData.name}
              onChange={(e) => updateProductData(e.target.name, e.target.value)}
              type="text"
              placeholder="Enter a product name"
              required
            />
          </section>
          <section className="select-a-category">
            <label>Select a Category</label>
            <select name="category_id" onChange={(e) => updateProductData(e.target.name,e.target.value)}>
              {categoriesSummary.map((category, index) => (
                <option key={index} value={category.id}>{category.name}</option>
                ))
              }
            </select>
          </section>
          <section className="product-long-description-section">
            <label>Product Long Description</label>
            <ReactQuill
              theme="snow"
              value={productData.long_description}
              onChange={(value) => updateProductData("long_description", value)}
              placeholder="Enter a long product description"
              modules={{
                toolbar: [
                  ["bold", "italic", "underline"],
                  [{ list: "ordered" }, { list: "bullet" }],
                ],
              }}
            />
          </section>

          <section className="product-short-description-section">
            <label>Product Short Description</label>
            <ReactQuill
              theme="snow"
              value={productData.short_description}
              onChange={(value) =>
                updateProductData("short_description", value)
              }
              placeholder="Enter a short description for the product"
              modules={{
                toolbar: [
                  ["bold", "italic", "underline"],
                  [{ list: "ordered" }, { list: "bullet" }],
                ],
              }}
            />
          </section>

          <section className="upload-thumbnail-image-section">
            {!thumbnail && (
              <>
                <h4>Upload a 200x200 image for thumbnail</h4>
                <SingleImageUploader
                  onImageSelected={(file) => {
                    setThumbnail(file);
                    updateProductData("thumbnail_image", file);
                  }}
                />
              </>
            )}
            {thumbnail && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "Column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <img
                  style={{ marginRight: "10px" }}
                  src={URL.createObjectURL(thumbnail)}
                  alt="Thumbnail Preview"
                />
                <FontAwesomeIcon
                  icon={faTrashCan}
                  style={{ paddingBottom: "10px" }}
                  size="2x"
                  onClick={() => setThumbnail(null)}
                />
              </div>
            )}
          </section>

          <section className="upload-carousel-images-section">
            <h4
              style={{
                fontSize: "clamp(25px, 3.5vh, 40px)",
                fontWeight: "200",
                textAlign: "center",
                paddingTop: "50px",
              }}
            >
              Upload 500x500 images for carousel
            </h4>
            <MultiImageUploader
              images={productData.carousel_images}
              setImages={(images) =>
                updateProductData("carousel_images", images)
              }
            />
          </section>

          <section className="slug-section">
            <label>Slug</label>
            <input
              className="slug-input"
              name="slug"
              value={productData.slug}
              onChange={(e) => updateProductData(e.target.name, e.target.value)}
              type="text"
              placeholder="Enter a slug"
              required
            />
          </section>

          <section className="pricing-section">
            <section className="price-input-section">
              <label style={{ display: "block", paddingBottom: "5px" }}>
                Price
              </label>
              <div className="price-input-div">
                <div className="rupee-logo">₹</div>
                <input
                  className="price-input"
                  required
                  inputMode="numeric"
                  name="price"
                  value={productData.price}
                  onChange={(e) =>
                    updateProductData(e.target.name, e.target.value)
                  }
                  type="tel"
                  placeholder="0.00"
                  title="Enter only digits"
                />
              </div>
            </section>
            <section className="discount-input-section">
              <label style={{ display: "block", paddingBottom: "5px" }}>
                Discount
              </label>
              <div className="discount-input-div">
                <div className="rupee-logo">₹</div>
                <input
                  className="discount-input"
                  required
                  inputMode="numeric"
                  name="discount"
                  value={productData.discount}
                  onChange={(e) =>
                    updateProductData(e.target.name, e.target.value)
                  }
                  type="tel"
                  title="Enter only digits"
                  placeholder="0.00"
                />
              </div>
            </section>
          </section>

          <section className="inventory-section">
            <section className="total-inventory-input-section">
              <label style={{ display: "block", paddingBottom: "5px" }}>
                Total Inventory
              </label>
              <input
                type="tel"
                required
                pattern="[0-9]*"
                inputMode="numeric"
                placeholder="0"
                title="Enter only digits"
                name="inventory"
                value={productData.inventory}
                onChange={(e) =>
                  updateProductData(e.target.name, e.target.value)
                }
              />
            </section>
            <section className="sku-input-section">
              <label style={{ display: "block", paddingBottom: "5px" }}>
                SKU
              </label>
              <input
                type="text"
                required
                placeholder=""
                name="sku"
                value={productData.sku}
                onChange={(e) =>
                  updateProductData(e.target.name, e.target.value)
                }
              />
            </section>
          </section>

          <section className="stock-status-section">
            <label for="stockStatus">Stock Status:</label>
            <select id="stockStatus" name="status" onChange={(e) => updateProductData(e.target.name, e.target.value)}>
              <option value="true">In Stock</option>
              <option value="false" >Out of Stock</option>
            </select>
          </section>

          <section className="shipping-details-section">
            <section className="weight-info-section">
              <label style={{ display: "block", paddingBottom: "5px" }}>
                Weight(g)
              </label>
              <input
                type="tel"
                pattern="^\d*\.?\d*$"
                inputMode="numeric"
                placeholder="0.00"
                title="Enter only digits"
                name="weight"
                value={productData.weight}
                required
                onChange={(e) =>
                  updateProductData(e.target.name, e.target.value)
                }
              />
            </section>
            <section className="dimension-info-section">
              <label style={{ display: "block" }}>Length(cm)</label>
              <input
                type="tel"
                pattern="^\d*\.?\d*$"
                inputMode="numeric"
                placeholder="0.00"
                title="Only digits with decimals allowed"
                name="length"
                value={productData.length}
                required
                onChange={(e) =>
                  updateProductData(e.target.name, e.target.value)
                }
              />
              <label style={{ display: "block" }}>Width(cm)</label>
              <input
                type="tel"
                pattern="^\d*\.?\d*$"
                inputMode="numeric"
                placeholder="0.00"
                title="Only digits with decimals allowed"
                name="width"
                value={productData.width}
                required
                onChange={(e) =>
                  updateProductData(e.target.name, e.target.value)
                }
              />
              <label style={{ display: "block" }}>Height(cm)</label>
              <input
                type="tel"
                pattern="^\d*\.?\d*$"
                inputMode="numeric"
                placeholder="0.00"
                title="Only digits with decimals allowed"
                name="height"
                value={productData.height}
                required
                onChange={(e) =>
                  updateProductData(e.target.name, e.target.value)
                }
              />
            </section>
          </section>

          <button
            id="product-data-submit-button"
            className="product-data-submit-button"
            type="submit"
            style={{ alignSelf: "center", width: "50%", marginBottom: "10px" }}
          >
            Submit
          </button>
        </section>
      </form>
    </section>
  );
}

export default AddProduct;
