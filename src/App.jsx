import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import CookieConsent from "react-cookie-consent";
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
      <CookieConsent
        style={{
          background: "#333",
          color: "#fff",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "16px",
          padding: "10px 20px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          width: "100%",
        }}
        buttonStyle={{
          background: "#007BFF",
          color: "#fff",
          fontSize: "16px",
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
          marginRight: "100px",
        }}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
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