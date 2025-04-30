import React from "react";

const StockStatusSection = React.memo(({ onChange }) => {
  return (
    <section className="stock-status-section">
      <label htmlFor="stockStatus">Stock Status:</label>
      <select
        id="stockStatus"
        name="status"
        onChange={(e) => onChange(e.target.name, e.target.value)}
      >
        <option value="true">In Stock</option>
        <option value="false">Out of Stock</option>
      </select>
    </section>
  );
});

export default StockStatusSection;