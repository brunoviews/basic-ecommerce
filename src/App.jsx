import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const menuNav = [
    { name: "Inicio", path: "/" },
    { name: "Productos", path: "/productos" },
    { name: "Carrito", path: "/carrito" },
  ];

  const [cart, setCart] = useState([]);

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert("Producto añadido al carrito");
    
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (productId) => {
    const index = cart.findIndex((product) => product.id === productId);
  if (index !== -1) {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  }
  };

  const links = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/bruno-da-silva33/" },
    { name: "GitHub", url: "https://github.com/brunoviews" },
  ];

  return (
    <Router>
      
      {/* Navbar y Footer envuelven todas las rutas */}
      <Navbar links={menuNav} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/productos"
          element={<ProductsPage addToCart={addToCart} />}
        />
        <Route
          path="/carrito"
          element={<CartPage cartItems={cart} onRemoveItem={removeFromCart} />}
        />
      </Routes>
      <Footer links={links} />
    </Router>
  );
}

export default App;