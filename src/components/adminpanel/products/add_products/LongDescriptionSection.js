import React from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const LongDescriptionSection = React.memo(({ value, updateProductData }) => (
    <section className="product-long-description-section">
      <label>Product Long Description</label>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={(val) => updateProductData("long_description", val)}
        placeholder="Enter a long product description"
        modules={{
          toolbar: [
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
          ],
        }}
      />
    </section>
));

export default LongDescriptionSection;