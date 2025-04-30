import React from "react";

const SlugInputSection = React.memo(({ slug, onChange }) => {
  return (
    <section className="slug-section">
      <label>Slug</label>
      <input
        className="slug-input"
        name="slug"
        value={slug}
        onChange={(e) => onChange(e.target.name, e.target.value)}
        type="text"
        placeholder="Enter a slug"
        required
      />
    </section>
  );
});

export default SlugInputSection;