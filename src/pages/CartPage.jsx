import React from "react";
import './CartPage.css';
import { motion } from "framer-motion";

function CartPage({ cartItems, onRemoveItem }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}  >
      <div>
        
        <div className="cart-page">
          <h2>Carrito de Compras</h2>
          {cartItems.length > 0 ? (
            <div className="cart-container">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.imageUrl} alt={item.name} className="item-img" />
                  <p>{item.name}</p>
                  
                  <p>Precio: ${item.price}</p>
                  <button className="btn-eliminar" onClick={() => onRemoveItem(item.id)}>Eliminar</button>
                </div>
              ))}
              <p className="precio-total">Total: ${cartItems.reduce((total, item) => total + item.price, 0)}</p>
            </div>
          ) : (
            <p>El carrito está vacío.</p>
          )}
        </div>
        
      </div>
      </motion.div>
    );
  }
  
  export default CartPage;