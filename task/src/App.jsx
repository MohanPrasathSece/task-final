import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Apple', category: 'Fruit' },
  { id: 2, name: 'Banana', category: 'Fruit' },
  { id: 3, name: 'Carrot', category: 'Vegetable' },
  { id: 4, name: 'Broccoli', category: 'Vegetable' },
];

function FilterableProductList() {
  const [filter, setFilter] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilter(value);
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div>
      <h1>Product List</h1>
      <input
        type="text"
        placeholder="Filter products"
        value={filter}
        onChange={handleFilterChange}
      />
      <p>Count: {filteredProducts.length}</p>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterableProductList;

