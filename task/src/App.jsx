// import React, { useState } from 'react';

// const products = [
//   { id: 1, name: 'Apple', category: 'Fruit' },
//   { id: 2, name: 'Banana', category: 'Fruit' },
//   { id: 3, name: 'Carrot', category: 'Vegetable' },
//   { id: 4, name: 'Broccoli', category: 'Vegetable' },
// ];

// function FilterableProductList() {
//   const [filter, setFilter] = useState('');
//   const [filteredProducts, setFilteredProducts] = useState(products);

//   const handleFilterChange = (event) => {
//     const value = event.target.value;
//     setFilter(value);
//     setFilteredProducts(
//       products.filter((product) =>
//         product.name.toLowerCase().includes(value.toLowerCase())
//       )
//     );
//   };

//   return (
//     <div>
//       <h1>Product List</h1>
//       <input
//         type="text"
//         placeholder="Filter products"
//         value={filter}
//         onChange={handleFilterChange}
//       />
//       <p>Count: {filteredProducts.length}</p>
//       <ul>
//         {filteredProducts.map((product) => (
//           <li key={product.id}>{product.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default FilterableProductList;

//context-Api
import React, { createContext, useContext, useState } from 'react';

// 1. Create Context
const UserContext = createContext();

// 2. Create a provider component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'John Doe', age: 25 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// 3. Consumer Component using useContext
const UserProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

// 4. Another component to update context
const UpdateUser = () => {
  const { setUser } = useContext(UserContext);

  const handleUpdate = () => {
    setUser({ name: 'Jane Smith', age: 30 });
  };

  return (
    <button onClick={handleUpdate}>Update User</button>
  );
};

// 5. App Component
const App = () => {
  return (
    <UserProvider>
      <UserProfile />
      <UpdateUser />
    </UserProvider>
  );
};

export default App;
