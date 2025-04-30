import React from 'react';

const SelectCategorySection = React.memo(({ categoriesSummary, updateProductData }) => (
    <section className="select-a-category">
      <label>Select a Category</label>
      <select name="category_id" onChange={(e) => updateProductData(e.target.name,e.target.value)}>
        {categoriesSummary.map((category, index) => (
          <option key={index} value={category.id}>{category.name}</option>
          ))
        }
      </select>
    </section>
));

export default SelectCategorySection;