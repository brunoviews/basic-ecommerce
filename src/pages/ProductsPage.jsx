import React, { useState } from "react";
import Card from "../components/Card/Card";
import { motion } from "framer-motion";
import "./ProductsPage.css";

function ProductsPage({ addToCart }) {
  // Datos de los productos
  const products = [
    {

      id: 1,
      info: ["tablet", "ipad", "tablets"],
      name: "Tablet",
      description: "Tablet de última generación con pantalla de alta resolución.",
      imageUrl:
        "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 600,
    },
    {

      id: 2,
      info: ["movil", "Telefono", "Celular", "Iphone"],
      name: "Iphone 14",
      description: "iPhone 14 128GB - Medianoche - Libre",
      imageUrl:
        "https://images.pexels.com/photos/18525574/pexels-photo-18525574/free-photo-of-unboxing-iphone-15-pro-max-box-in-natural-titanium-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 800,
    },
    {

      id: 3,
      info: ["tablet", "ipad"],
      name: "Ipad",
      description: "Tablet de última generación con pantalla de alta resolución.",
      imageUrl:
        "https://images.pexels.com/photos/1334598/pexels-photo-1334598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 1200,
    },
    {

      id: 4,
      info: ["movil", "Telefono", "Celular", "Iphone"],
      name: "Samsung Galaxy",
      description: "Smartphone de alta gama con excelente rendimiento.",
      imageUrl:
        "https://images.pexels.com/photos/28902919/pexels-photo-28902919/free-photo-of-four-smartphones-on-display-showing-various-screens.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 1200,
    },
    {

      id: 5,
      info: ["pc", "ordenador", "Air", "Macbook"],
      name: "Macbook Air",
      description: "Portátil ligero y potente con diseño elegante.",
      imageUrl:
        "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 1200,
    },
    {

      id: 6,
      info: ["tv", "LG", "television", "smarttv"],
      name: "LG Smart TV",
      description: "Televisor inteligente con resolución 4K.",
      imageUrl:
        "https://www.lavanguardia.com/andro4all/hero/2021/04/android-tv.jpg?width=1200&aspect_ratio=16:9",
      price: 900,
    },
    {

      id: 7,
      info: ["tv", "samsung", "television", "smart tv", "smarttv"],
      name: "Samsung TV",
      description: "Televisor inteligente con excelente calidad de imagen.",
      imageUrl: "https://i.blogs.es/c855a9/smart-tv-xiaomi-cabecera/1200_800.jpeg",
      price: 1200,
    },
    {

      id: 8,
      info: ["laptop", "ordenador", "portátil", "Dell", "pc"],
      name: "Dell XPS 13",
      description: "Portátil de alto rendimiento con diseño compacto.",
      imageUrl:
        "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 1500,
    },
    {

      id: 9,
      info: ["reloj", "smartwatch", "Apple Watch"],
      name: "Apple Watch",
      description: "Reloj inteligente con múltiples funciones de salud.",
      imageUrl:
        "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 400,
    },
    {
      keyWord: "auriculares",
      id: 10,
      info: ["auriculares", "audífonos", "Bose"],
      name: "Bose Headphones",
      description: "Auriculares con cancelación de ruido y excelente calidad de sonido.",
      imageUrl:
        "https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 300,
    },
    {
      id: 11,
      info: ["tablet", "ipad", "tablets"],
      name: "iPad Pro",
      description: "iPad Pro con pantalla Liquid Retina y chip M1.",
      imageUrl:
        "https://media.istockphoto.com/id/1350806998/es/foto/tabletas-negras-puestas-en-blanco.jpg?s=2048x2048&w=is&k=20&c=q0F67uSZ0tW4GXyqqFZ8iqdViG9Yr_4k1-tK9Wbh3zE=",
      price: 1400,
    },
    {
      id: 12,
      info: ["movil", "telefono", "celular", "android"],
      name: "Google Pixel 6",
      description: "Google Pixel 6 con cámara avanzada y Android puro.",
      imageUrl:
        "https://media.istockphoto.com/id/1394988455/es/foto/port%C3%A1til-con-pantalla-en-blanco-sobre-fondo-blanco.jpg?s=2048x2048&w=is&k=20&c=Mw1-pF7aAe5Y4KK4VdlVoLehx5y-0gQAMNfNlwoJ6Qc=",
      price: 900,
    },
    {
      id: 13,
      info: ["laptop", "ordenador", "portátil", "hp", "pc"],
      name: "HP Spectre x360",
      description: "Portátil convertible con pantalla táctil y diseño elegante.",
      imageUrl:
        "https://media.istockphoto.com/id/1389603578/es/foto/pantalla-en-blanco-de-la-computadora-port%C3%A1til-en-la-mesa-de-madera-con-fondo-interior-de.jpg?s=2048x2048&w=is&k=20&c=3NqVGhcpsIySdzv-RTTQ-2py90Uhx6ejXDeK961ejdY=",
      price: 1600,
    },
    {
      id: 14,
      info: ["tv", "sony", "television", "smart tv", "smarttv"],
      name: "Sony Bravia",
      description: "Televisor inteligente Sony Bravia con resolución 4K HDR.",
      imageUrl:
        "https://media.istockphoto.com/id/863399504/es/foto/pantalla-grande-de-televisi%C3%B3n-smart-tv.jpg?s=2048x2048&w=is&k=20&c=8f6cuj9dCscmBv2oDj09aGZlSmjz-dukVL29EZJEdr8=",
      price: 1300,
    },
  ];

  // Estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("Todos");

  const filteredProducts = products.filter(
    (product) =>
      (category === "Todos" || product.info.includes(category.toLowerCase())) &&
      (product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.info.some((keyword) =>
          keyword.toLowerCase().includes(searchTerm.toLowerCase())
        ))
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

        <div className="category-title"><h3> Filtrar por categoría </h3></div>
        <div className="category-filter">
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Todos">Todos</option>
            <option value="Tablet">Tablets</option>
            <option value="Movil">Móviles</option>
            <option value="pc">Ordenadores</option>
            <option value="auriculares">Auriculares</option>
            <option value="reloj">Reloj Inteligente</option>
            <option value="tv">TV</option>
          </select>
        </div>
        <div className="products-container">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              title={product.name}
              description={product.description}
              price={product.price}
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
