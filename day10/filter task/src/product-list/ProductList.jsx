// src/product-list/ProductList.jsx
import React, { useState, useMemo, useCallback } from "react";
import "./ProductListStyle.css";

// Expanded fake API response
const mockProducts = [
  { id: 1, name: "Apple iPhone 14", price: 999, category: "Electronics" },
  { id: 2, name: "Samsung Galaxy S22", price: 899, category: "Electronics" },
  { id: 3, name: "OnePlus 11", price: 699, category: "Electronics" },
  { id: 4, name: "Google Pixel 7", price: 799, category: "Electronics" },
  { id: 5, name: "Sony Xperia 1", price: 1099, category: "Electronics" },
  { id: 6, name: "Xiaomi Redmi Note 12", price: 499, category: "Electronics" },
  { id: 7, name: "Asus ROG Phone 6", price: 1199, category: "Electronics" },
  { id: 8, name: "Nokia G50", price: 299, category: "Electronics" },
  { id: 9, name: "Motorola Edge 30", price: 749, category: "Electronics" },
  { id: 10, name: "Realme GT 2 Pro", price: 649, category: "Electronics" },
  { id: 11, name: "Dell XPS 15", price: 1499, category: "Laptops" },
  { id: 12, name: "MacBook Pro 16", price: 2499, category: "Laptops" },
  { id: 13, name: "HP Spectre x360", price: 1399, category: "Laptops" },
  { id: 14, name: "Lenovo ThinkPad X1", price: 1899, category: "Laptops" },
  { id: 15, name: "Asus ZenBook 14", price: 1299, category: "Laptops" },
  { id: 16, name: "Acer Swift 3", price: 899, category: "Laptops" },
  { id: 17, name: "Nike Air Max 270", price: 149, category: "Footwear" },
  { id: 18, name: "Adidas Ultraboost", price: 179, category: "Footwear" },
  { id: 19, name: "Puma RS-X", price: 129, category: "Footwear" },
  { id: 20, name: "Reebok Zig Kinetica", price: 159, category: "Footwear" },
  { id: 21, name: "Converse Chuck Taylor", price: 99, category: "Footwear" },
  { id: 22, name: "Under Armour HOVR", price: 149, category: "Footwear" },
  { id: 23, name: "Ray-Ban Wayfarer", price: 199, category: "Accessories" },
  { id: 24, name: "Fossil Gen 6 Smartwatch", price: 299, category: "Accessories" },
  { id: 25, name: "Casio G-Shock", price: 129, category: "Accessories" },
  { id: 26, name: "Sony WH-1000XM5", price: 399, category: "Accessories" },
  { id: 27, name: "Bose QuietComfort 45", price: 349, category: "Accessories" },
  { id: 28, name: "JBL Flip 6 Bluetooth Speaker", price: 129, category: "Accessories" },
  { id: 29, name: "LG 4K OLED TV", price: 1799, category: "Home Appliances" },
  { id: 30, name: "Samsung Smart Refrigerator", price: 2599, category: "Home Appliances" },
];

function ProductList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);

  // useMemo to optimize filtering the product list
  const filteredProducts = useMemo(() => {
    return mockProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // useCallback to optimize the clear search button
  const clearSearch = useCallback(() => {
    setSearchTerm("");
  }, []);

  // Add item to the cart
  const addToCart = useCallback(
    (product) => {
      setCart((prevCart) => {
        if (prevCart.find((item) => item.id === product.id)) {
          return prevCart; // Prevent duplicates
        }
        return [...prevCart, product];
      });
    },
    [setCart]
  );

  return (
    <div className="product-list-container">
      <h1>Filterable Product List with Cart</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <button onClick={clearSearch} className="clear-button">
        Clear Search
      </button>
      <div className="product-count">Products Found: {filteredProducts.length}</div>
      <ul className="product-list">
        {filteredProducts.map((product) => (
          <li key={product.id} className="product-item">
            <span>{product.name}</span>
            <span className="product-price">${product.price}</span>
            <button
              onClick={() => addToCart(product)}
              className="add-to-cart-button"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      <div className="cart">
        <h2>Shopping Cart</h2>
        {cart.length > 0 ? (
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
