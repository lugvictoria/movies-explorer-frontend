import { useMemo, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { toCapitalize, validateFormField } from "../../../utils";
import "../Auth/Authorization.css";
import MainApi from "../../../utils/MainApi";
import Authorization from "../Auth/Authorization";
import useFormValidate from "../../../hooks/useFormValidate";

const initialData = {
  name: "",
  email: "",
  password: "",
};

function Register() {
  const [form, setForm] = useState(initialData);
  const { validate, isValid, setValidate } = useFormValidate(initialData);

  const [register, isLoading, error] = useFetch(async (data) => {
    setValidate(initialData);
    await MainApi.register(data);
    setForm(initialData);
    alert("Вы успешно зарегистрировались!");
  });

  async function onSubmitHandler(e) {
    e.preventDefault();
    await register(form);
  }

  const isDisabled = useMemo(() => {
    return Object.values(form).some(it => !it.trim());
  }, [form]);

  return (
    <Authorization
      mode="register"
      isLoading={isLoading}
      isDisabled={isDisabled || !isValid}
      error={error}
      onSubmit={onSubmitHandler}
    >
      <label className="auth__input-container">
        <span className="auth__label">Имя</span>

        <input
          className="auth__input"
          type="text"
          name="name"
          required
          minLength="2"
          maxLength="30"
          placeholder="Виталий"
          value={form.name}
          autoComplete="nope"
          onChange={({ target }) => {
            const value = toCapitalize(target.value.trim());
            const error = validateFormField(value, "testName");

            setForm((prev) => ({ ...prev, name: value }));
            setValidate((prev) => ({ ...prev, name: error }));
          }}
        />

        {validate.name && <p className="auth__error">{validate.name}</p>}
      </label>

      <label className="auth__input-container">
        <span className="auth__label">E-mail</span>

        <input
          className="auth__input"
          type="email"
          name="email"
          placeholder="pochta@yandex.ru"
          autoComplete="nope"
          required
          value={form.email}
          onChange={({ target }) => {
            const value = target.value.trim();
            const error = validateFormField(value, "testEmail");

            setForm((prev) => ({ ...prev, email: value }));
            setValidate((prev) => ({ ...prev, email: error }));
          }}
        />

        {validate.email && <p className="auth__error">{validate.email}</p>}
      </label>

      <label className="auth__input-container">
        <span className="auth__label">Пароль</span>

        <input
          className="auth__password-input"
          type="password"
          name="password"
          placeholder=".............."
          autoComplete="new-password"
          required
          value={form.password}
          onChange={({ target }) => {
            const value = target.value.trim();
            const error = validateFormField(value, "testPassword");

            setForm(prev => ({ ...prev, password: value }));
            setValidate((prev) => ({ ...prev, password: error }));
          }}
        />

        {validate.password && <p className="auth__error">{validate.password}</p>}
      </label>
    </Authorization>
  );
}

export default Register;
