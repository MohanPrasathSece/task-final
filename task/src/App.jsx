import React, { useState, useEffect } from 'react';
import './App.css';

function FilterableProductList() {
  const [filter, setFilter] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    // Fetching the products from the API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Set initial filtered products
      });
  }, []);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilter(value);
    setFilteredProducts(
      products
        .filter((product) =>
          product.title.toLowerCase().includes(value.toLowerCase())
        )
        .sort(sortProducts)
    );
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    setFilteredProducts(
      [...filteredProducts].sort(sortProducts)
    );
  };

  const sortProducts = (a, b) => {
    if (sortBy === 'name') {
      return a.title.localeCompare(b.title);
    } else if (sortBy === 'price') {
      return a.price - b.price;
    }
    return 0;
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      // Check if product is already in the cart
      if (prevCart.some((item) => item.id === product.id)) {
        return prevCart; // If already in cart, do nothing
      }
      return [...prevCart, product];
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId)); // Remove product from cart
  };

  const handleClearSearch = () => {
    setFilter('');
    setFilteredProducts(products); // Reset to all products
  };

  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0).toFixed(2);

  return (
    <div className="container">
      <h1>Product List</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="Search products"
          value={filter}
          onChange={handleFilterChange}
          className="search-input"
        />
        <button className="clear-btn" onClick={handleClearSearch}>
          Clear Search
        </button>
        <select className="sort-select" onChange={handleSortChange}>
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>

      <p className="count-text">Total Products: {filteredProducts.length}</p>

      <ul className="product-list">
        {filteredProducts.map((product) => (
          <li key={product.id} className="product-item">
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-info">
              <span className="product-name">{product.title}</span>
              <span className="product-category">{product.category}</span>
              <span className="product-price">${product.price}</span>
              <button 
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Cart Section */}
      <div className="cart-section">
        <h2>Your Cart</h2>
        <ul className="cart-list">
          {cart.length === 0 ? (
            <li className="cart-item">Your cart is empty</li>
          ) : (
            cart.map((product) => (
              <li key={product.id} className="cart-item">
                <span>{product.title} - ${product.price}</span>
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveFromCart(product.id)}
                >
                  Remove
                </button>
              </li>
            ))
          )}
        </ul>
        {cart.length > 0 && (
          <div className="total-price">
            <strong>Total: ${totalPrice}</strong>
          </div>
        )}
      </div>
    </div>
  );
}

export default FilterableProductList;
