import React, { useEffect, useRef } from "react";
import "./ClientReview.css";

const ClientReview = ({ reviews }) => {
  reviews = [
    {
      text: "Productos de calidad y atención al cliente excepcional. ¡Muy recomendado!",
      name: "Juan Pérez",
      logo: "/avatar.png",
    },
    {
      text: "Excelente servicio y entrega rápida. ¡Volveré a comprar!",
      name: "Ana Gómez",
      logo: "/avatar2.png",
    },
    {
      text: "Gran variedad de productos y precios competitivos. ¡Gracias!",
      name: "María Rodríguez",
      logo: "/avatar3.png",
    },
  ];

  const reviewContainerRef = useRef();

  useEffect(() => {
    const container = reviewContainerRef.current;

    // Duplica los elementos para garantizar la continuidad
    const duplicatedContent = container.innerHTML;
    container.innerHTML += duplicatedContent;

    let animation;
    let animationProgress = 0;

    const startAnimation = () => {
      animation = container.animate([
          { transform: 'translateX(40%)' },
          { transform: 'translateX(-100%)' }
      ], {
          duration: 60000,
          iterations: Infinity
      });

      // Si hay un progreso previo, ajusta el inicio
      if (animationProgress > 0) {
          animation.currentTime = animationProgress;
      }
  };

  const stopAnimation = () => {
      if (animation) {
          animationProgress = animation.currentTime; // Guarda el progreso actual
          animation.pause(); // Pausa la animación
      }
  };

  // Agregar eventos para pausar y reanudar
  container.addEventListener('mouseover', stopAnimation);
  container.addEventListener('mouseout', startAnimation);

  startAnimation();

  // Limpieza al desmontar el componente
  return () => {
      container.removeEventListener('mouseover', stopAnimation);
      container.removeEventListener('mouseout', startAnimation);
  };
}, []);

  return (
    <div className="client-review">
      <div className="client-review__container" ref={reviewContainerRef}>
        {reviews.map((review, index) => (
          <div key={index} className="client-review__content">
            <p className="client-review__text">{review.text}</p>
            <p className="client-review__name">{review.name}</p>
            <div className="info-block">
              <img src={review.logo} alt={review.name} className="logo-img" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientReview;