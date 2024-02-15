import { useState } from "react";
import { useAuthContext } from "../../auth/AuthProvider";
import { toCapitalize, validateFormField } from "../../../utils";
import MainApi from "../../../utils/MainApi";
import "./Profile.css";

const defError = "При обновлении профиля произошла ошибка.";

function Profile() {
  const { user, logout, update } = useAuthContext();

  const [form, setForm] = useState(() => ({
    name: user.name,
    email: user.email,
  }));
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  async function onUpdateProfile(e) {
    e.preventDefault();

    setLoading(true);

    try {
      const data = await MainApi.updateProfile(form);
      update(data);
      alert("Данные профиля успешно обновлены!");
    } catch (e) {
      console.error(e);
      setError(e?.message || defError);
    } finally {
      setLoading(false);
    }
  }

  function isInitial() {
    return form.name === user.name && form.email === user.email;
  }

  function runValidateForm(key, value) {
    const { name, email } = {
      name: key === "name" ? value : form.name,
      email: key === "email" ? value : form.email,
    };

    console.log(name, email);

    const errors = [
      validateFormField(name, "testName"),
      validateFormField(email, "testEmail"),
    ];

    console.log(errors);

    setError(errors.filter(Boolean).join(" | "));
  }

  return (
    <div className="profile-page">
      <main className="profile">
        <div className="profile__container">
          <h1 className="profile__title">
            Привет, {user.name || "Неизвестный"}!
          </h1>

          <form
            id="profile"
            className="profile__form"
            onSubmit={onUpdateProfile}
          >
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
                value={form.name}
                onChange={({ target }) => {
                  const value = toCapitalize(target.value.replaceAll(" ", ""));
                  setForm((prev) => ({ ...prev, name: value }));

                  runValidateForm("name", value);
                }}
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
                value={form.email}
                onChange={({ target }) => {
                  const value = target.value.replaceAll(" ", "");
                  setForm((prev) => ({ ...prev, email: value }));

                  runValidateForm("email", value);
                }}
              />
            </label>
          </form>

          <ul className="profile__links">
            {error && <p className="profile__error-message">{error}</p>}

            <li className="profile__links-item">
              <button
                className="profile__link"
                type="submit"
                form="profile"
                disabled={isLoading || isInitial() || error}
              >
                {isLoading ? "Ожидайте..." : "Редактировать"}
              </button>
            </li>

            <li className="profile__links-item">
              <button
                className="profile__link profile__link_type_logout"
                onClick={logout}
              >
                Выйти из аккаунта
              </button>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Profile;
