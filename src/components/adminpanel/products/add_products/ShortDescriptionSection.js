import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ShortDescriptionSection = React.memo(({ value, updateProductData }) => {
  return (
    <section className="product-short-description-section">
      <label>Product Short Description</label>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={(val) => updateProductData("short_description", val)}
        placeholder="Enter a short description for the product"
        modules={{
          toolbar: [
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
          ],
        }}
      />
    </section>
  );
});

export default ShortDescriptionSection;