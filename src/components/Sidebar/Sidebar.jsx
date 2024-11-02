// src/components/Sidebar/Sidebar.jsx
import React from "react";
import "./Sidebar.css";
import Button from "../Button/Button";



function Sidebar({ isOpen, onClose, cartItems = [], onRemoveItem }) {


 
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="sidebar-close" onClick={onClose}>
        &times;
      </button>
      <h3>Carrito de Compras</h3>
      <div className="sidebar-cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.name}</p>
              <p>Precio: ${item.price}</p>
              <Button text="Eliminar" type="danger" onClick={() => onRemoveItem(item.id)} />
            </div>
            
          ))
        ) : (
          <p>El carrito está vacío.</p>
        )}
      </div>
      <p>Total: ${cartItems.reduce((total, item) => total + item.price, 0)}</p>
    </aside>
  );
}

export default Sidebar;
