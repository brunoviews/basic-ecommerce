// src/pages/HomePage.jsx
import React from "react";
import "./HomePage.css";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="home-page">
        <header className="home-header">
          <h1>Bienvenido a Mi E-commerce</h1>
          <p>Encuentra productos únicos y de calidad para tus necesidades.</p>
          <a href="/productos" className="home-button">
            Ver Productos
          </a>
        </header>
        <section className="home-features">
          <div className="feature-card">
            <h3>Envío Rápido</h3>
            <p>Entrega en menos de 48 horas en todo el país.</p>
          </div>
          <div className="feature-card">
            <h3>Calidad Garantizada</h3>
            <p>Productos verificados y de alta calidad.</p>
          </div>
          <div className="feature-card">
            <h3>Atención al Cliente</h3>
            <p>Soporte disponible las 24 horas para cualquier consulta.</p>
          </div>
        </section>
        <section className="home-testimonials">
        <h2>Testimonios de Nuestros Clientes</h2>
        <div className="testimonial-card">
          <p>"Excelente servicio y productos de alta calidad. ¡Volveré a comprar!"</p>
          <span>- Cliente Satisfecho</span>
        </div>
        <div className="testimonial-card">
          <p>"El envío fue rápido y la atención al cliente inmejorable."</p>
          <span>- Juan Pérez</span>
        </div>
      </section>
      </div>
    </motion.div>
  );
}

export default HomePage;
