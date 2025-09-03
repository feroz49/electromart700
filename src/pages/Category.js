import React from 'react';
import '../styles/Category.css';

function Category() {
  const categories = [
    'Smartphones',
    'Laptops',
    'Smartwatches',
    'Headphones',
    'Televisions',
    'Cameras',
    'Gaming Consoles',
    'Accessories',
  ];

  return (
    <div className="category-page">
      <h1>Shop by Category</h1>
      <div className="category-grid">
        {categories.map((cat, index) => (
          <div key={index} className="category-card">
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
