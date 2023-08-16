import { useRef } from "react";
import "./Promo.css";

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
        onClick={() => {
          nextScreenRef.current.scrollIntoView({
            behavior: "smooth", block: "start",
          });
        }}
      >
        <h3 className="promo__button-text">Узнать больше</h3>
      </div>

      <div ref={nextScreenRef}></div>
    </section>
  );
};

export default Promo;
