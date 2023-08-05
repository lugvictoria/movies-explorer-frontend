import React from "react";
import "./Profile.css";
function Profile() {
  return (
    <main className="profile content__stretched-element ">
      <div className="profile__container">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form">
          <label className="profile__input-container">
            <span className="profile__input-label">Имя</span>
            <input
              type="text"
              className="profile__input"
              name="name"
              minLength="2"
              maxLength="30"
              required={true}
              placeholder="Виталий"
            />
          </label>
          <label className="profile__input-container">
            <span className="profile__input-label">E-mail</span>
            <input
              type="email"
              className="profile__input"
              name="email"
              required={true}
              placeholder="pochta@yandex.ru"
            />
          </label>
        </form>

        <ul className="profile__links">
          <p className="profile__error-message">
            При обновлении профиля произошла ошибка.
          </p>
          <li className="profile__links-item">
            <button className="profile__link">Редактировать</button>
          </li>
          <li className="profile__links-item">
            <button className="profile__link profile__link_type_logout">
              Выйти из аккаунта
            </button>
          </li>
        </ul>
      </div>
    </main>
  );
}
export default Profile;
