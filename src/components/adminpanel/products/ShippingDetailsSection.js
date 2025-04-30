import React from "react";

const ShippingDetailsSection = React.memo(({ weight, length, width, height, onChange }) => {
  return (
    <section className="shipping-details-section">
      <section className="weight-info-section">
        <label style={{ display: "block", paddingBottom: "5px" }}>Weight (g)</label>
        <input
          type="tel"
          pattern="^\d*\.?\d*$"
          inputMode="numeric"
          placeholder="0.00"
          title="Enter only digits"
          name="weight"
          value={weight}
          required
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </section>

      <section className="dimension-info-section">
        <label style={{ display: "block" }}>Length (cm)</label>
        <input
          type="tel"
          pattern="^\d*\.?\d*$"
          inputMode="numeric"
          placeholder="0.00"
          title="Only digits with decimals allowed"
          name="length"
          value={length}
          required
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />

        <label style={{ display: "block" }}>Width (cm)</label>
        <input
          type="tel"
          pattern="^\d*\.?\d*$"
          inputMode="numeric"
          placeholder="0.00"
          title="Only digits with decimals allowed"
          name="width"
          value={width}
          required
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />

        <label style={{ display: "block" }}>Height (cm)</label>
        <input
          type="tel"
          pattern="^\d*\.?\d*$"
          inputMode="numeric"
          placeholder="0.00"
          title="Only digits with decimals allowed"
          name="height"
          value={height}
          required
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </section>
    </section>
  );
});

export default ShippingDetailsSection;