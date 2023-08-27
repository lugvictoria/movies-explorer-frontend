import "./More.css";

function More({ onClick }) {
  return (
    <section className="more section">
      <button className="more__button" type="button" onClick={onClick}>
        Ещё
      </button>
    </section>
  );
}

export default More;
