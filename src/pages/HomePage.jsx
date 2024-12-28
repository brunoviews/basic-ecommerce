// src/pages/HomePage.jsx
import React from "react";
import "./HomePage.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import ClientReview from "../components/ClientReview/ClientReview";

function HomePage() {
  const starRating = () => {
    return (
      <div>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
    );
  };

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
          <Link to="/productos" className="home-button">
            Ver Productos
          </Link>
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
         <ClientReview/>
        </section>
        <section className="home-newsletter">
          <h2>Suscríbete a Nuestro Boletín</h2>
          <p>Recibe las últimas noticias y ofertas directamente en tu bandeja de entrada.</p>
          <input type="email" placeholder="Introduce tu correo electrónico" />
          <button>Suscribirse</button>
        </section>
      </div>
    </motion.div>
  );
}

export default HomePage;
