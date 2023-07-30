import './Promo.css';

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <h2 className="promo__subtitle">
        Листайте ниже, чтобы узнать больше про этот проект и его создателя.
      </h2>
      <div className="promo__button">
      <h3 className="promo__button-text">
       Узнать больше
      </h3>
      </div>
    </section>
  );
}

export default Promo;
