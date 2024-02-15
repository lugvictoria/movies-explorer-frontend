import "./Promo.css";
import React, { useRef } from "react";

const Promo = () => {
  const nextScreenRef = useRef(null);

  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <h2 className="promo__subtitle">
        Листайте ниже, чтобы узнать больше про этот проект и его создателя.
      </h2>
      <div
        className="promo__button"
        onClick={() => window.scrollTo(0, window.innerHeight)}
      >
        <h3 className="promo__button-text">Узнать больше</h3>
      </div>
      <div ref={nextScreenRef}></div>
    </section>
  );
};

export default Promo;
