import React, { useState } from "react";
import Card from "../components/Card/Card";
import { motion } from "framer-motion";
import "./ProductsPage.css";
import Sidebar from "../components/Sidebar/Sidebar";

function ProductsPage({ addToCart, cart }) {
  // Datos de los productos
  const products = [
    {
      id: 1,
      info: ["Tablet", "Ipad"],
      name: "Tablet",
      description: "Descripción breve del producto 1.",
      imageUrl:
        "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 600,
    },
    {
      id: 2,
      info: ["Movil", "Telefono", "Celular", "Iphone"],
      name: "Iphone 14",
      description: "Descripción breve del producto 2.",
      imageUrl:
        "https://images.pexels.com/photos/18525574/pexels-photo-18525574/free-photo-of-unboxing-iphone-15-pro-max-box-in-natural-titanium-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 800,
    },
    {
      id: 3,
      info: ["Tablet", "Ipad"],
      name: "Ipad",
      description: "Descripción breve del producto 3.",
      imageUrl:
        "https://images.pexels.com/photos/1334598/pexels-photo-1334598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 1200,
    },
    {
      id: 4,
      info: ["Movil", "Telefono", "Celular", "Iphone"],
      name: "Samsung Galaxy",
      description: "Descripción breve del producto 3.",
      imageUrl:
        "https://images.pexels.com/photos/28902919/pexels-photo-28902919/free-photo-of-four-smartphones-on-display-showing-various-screens.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 1200,
    },
    {
      id: 5,
      info: ["Pc", "ordenador", "Air", "Macbook"],
      name: "Macbook Air",
      description: "Descripción breve del producto 3.",
      imageUrl:
        "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 1200,
    },
    {
      id: 6,
      info: ["tv", "LG", "television", "smart tv", "smarttv"],
      name: "LG Smart TV",
      description: "Descripción breve del producto 3.",
      imageUrl:
        "https://www.lavanguardia.com/andro4all/hero/2021/04/android-tv.jpg?width=1200&aspect_ratio=16:9",
      price: 900,
    },
    {
      id: 7,
      info: ["tv", "samsung", "television", "smart tv", "smarttv"],
      name: "Samsung TV",
      description: "Descripción breve del producto 3.",
      imageUrl: "https://i.blogs.es/c855a9/smart-tv-xiaomi-cabecera/1200_800.jpeg",
      price: 1200,
    },
  ];

  // Estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.info.some((keyword) =>
        keyword.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="main-container">
        <h1>Aquí encontrarás nuestros productos destacados</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="products-container">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              title={product.name}
              description={`${product.description} - $${product.price}`}
              imageUrl={product.imageUrl}
              buttonText="Añadir al Carrito"
              onButtonClick={() => addToCart(product)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ProductsPage;
