import React from "react";

const PricingSection = React.memo(({ price, discount, onChange }) => {
  return (
    <section className="pricing-section">
      <section className="price-input-section">
        <label style={{ display: "block", paddingBottom: "5px" }}>Price</label>
        <div className="price-input-div">
          <div className="rupee-logo">₹</div>
          <input
            className="price-input"
            required
            inputMode="numeric"
            name="price"
            value={price}
            onChange={(e) => onChange(e.target.name, e.target.value)}
            type="tel"
            placeholder="0.00"
            title="Enter only digits"
          />
        </div>
      </section>

      <section className="discount-input-section">
        <label style={{ display: "block", paddingBottom: "5px" }}>Discount</label>
        <div className="discount-input-div">
          <div className="rupee-logo">₹</div>
          <input
            className="discount-input"
            required
            inputMode="numeric"
            name="discount"
            value={discount}
            onChange={(e) => onChange(e.target.name, e.target.value)}
            type="tel"
            title="Enter only digits"
            placeholder="0.00"
          />
        </div>
      </section>
    </section>
  );
});

export default PricingSection;