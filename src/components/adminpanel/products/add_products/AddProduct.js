import React, { useState, useEffect } from "react";
import "../../../../styles/adminpanel/products/AddProduct.css";
import { CustomAlert } from "../../../utilities/CustomAlert.js";
import LoadingScreen from "../../../utilities/LoadingScreen.js";
import ProductNameSection from "./ProductNameSection.js";
import SelectCategorySection from "./SelectCategorySection.js";
import LongDescriptionSection from "./LongDescriptionSection.js";
import ShortDescriptionSection from "./ShortDescriptionSection.js";
import ThumbnailUploaderSection from "./ThumbnailUploaderSection.js";
import CarouselUploaderSection from "./CarouselUploaderSection.js";
import SlugInputSection from "./SlugInputSection.js";
import PricingSection from "./PricingSection.js";
import InventorySection from "./InventorySection.js";
import StockStatusSection from "./StockStatusSection.js";
import ShippingDetailsSection from "./ShippingDetailsSection";

function AddProduct() {
  const [isUploading, setIsUploading] = useState(null)
  const [thumbnail, setThumbnail] = useState(null);
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
    setIsUploading(true)

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
      CustomAlert({
        title: "Success",
        icon: "success",
        text: "Successfully added the product",
        confirmButtonColor: "#81c784",
      });
    } catch (error) {
      CustomAlert({
        title: "Oops!",
        text: error.message,
      });
    }finally{
      setIsUploading(false)
    }
  }

  return (
    <section className="add-product-page">
      {isUploading && <LoadingScreen text="Uploading Product..." />}
      <form onSubmit={submitData} method="post">
        <section className="add-product-section">
          <h1>Add Product</h1>
          <ProductNameSection name={productData.name} updateProductData={updateProductData} />
          <SelectCategorySection categoriesSummary={categoriesSummary} updateProductData={updateProductData} />
          <LongDescriptionSection value={productData.long_description} updateProductData={updateProductData} />
          <ShortDescriptionSection value={productData.short_description} updateProductData={updateProductData} />
          <ThumbnailUploaderSection thumbnail={thumbnail} setThumbnail={setThumbnail} updateProductData={updateProductData} />
          <CarouselUploaderSection images={productData.carousel_images} setImages={updateProductData} />
          <SlugInputSection slug={productData.slug} onChange={updateProductData} />
          <PricingSection price={productData.price} discount={productData.discount} onChange={updateProductData} />
          <InventorySection inventory={productData.inventory} sku={productData.sku} onChange={updateProductData} />
          <StockStatusSection onChange={updateProductData} />
          <ShippingDetailsSection 
            weight={productData.weight}
            length={productData.length}
            width={productData.width}
            height={productData.height}
            onChange={updateProductData}
          />
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
