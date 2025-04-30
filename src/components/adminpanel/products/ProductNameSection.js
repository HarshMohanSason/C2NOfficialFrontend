import React from 'react';

const ProductNameSection = React.memo(({ name, updateProductData }) => (
  <section className="product-name-section">
    <label>Product Name</label>
    <input
      className="product-name"
      name="name"
      value={name}
      onChange={(e) => updateProductData(e.target.name, e.target.value)}
      type="text"
      placeholder="Enter a product name"
      required
    />
  </section>
));

export default ProductNameSection;