import "./PageError.css";

function PageError() {
  return (
    <div className="page-error">
      <p>
        Во время запроса произошла ошибка. Возможно, проблема с соединением или
        сервер недоступен. Подождите немного и попробуйте ещё раз
      </p>
    </div>
  );
}

export default PageError;
