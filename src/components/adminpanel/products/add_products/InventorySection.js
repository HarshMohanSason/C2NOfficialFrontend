import React from "react";

const InventorySection = React.memo(({ inventory, sku, onChange }) => {
  return (
    <section className="inventory-section">
      <section className="total-inventory-input-section">
        <label style={{ display: "block", paddingBottom: "5px" }}>Total Inventory</label>
        <input
          type="tel"
          required
          pattern="[0-9]*"
          inputMode="numeric"
          placeholder="0"
          title="Enter only digits"
          name="inventory"
          value={inventory}
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </section>

      <section className="sku-input-section">
        <label style={{ display: "block", paddingBottom: "5px" }}>SKU</label>
        <input
          type="text"
          required
          name="sku"
          value={sku}
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </section>
    </section>
  );
});

export default InventorySection;