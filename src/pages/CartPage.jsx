import React from "react";
import './CartPage.css';

function CartPage({ cartItems, onRemoveItem }) {
    return (
      <div>
        
        <div className="cart-page">
          <h2>Carrito de Compras</h2>
          {cartItems.length > 0 ? (
            <div>
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
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
    );
  }
  
  export default CartPage;