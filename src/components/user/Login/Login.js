import Authorization from "../Auth/Authorization";
import { useMemo, useState } from "react";
import useFormValidate from "../../../hooks/useFormValidate";
import useFetch from "../../../hooks/useFetch";
import MainApi from "../../../utils/MainApi";
import { validateFormField } from "../../../utils";
import { AUTH_ERROR } from "../../../defines";
import { useAuth } from "../../auth/AuthProvider";
import { Navigate } from "react-router-dom";

const initialData = {
  email: "",
  password: "",
};

function Login() {
  const { user, login } = useAuth();

  const [form, setForm] = useState(initialData);
  const { validate, isValid, setValidate } = useFormValidate(initialData);

  const [register, isLoading, error] = useFetch(async (form) => {
    setValidate(initialData);
    const data = await MainApi.login(form);
    return data?.token || "";
  });

  async function onSubmitHandler(e) {
    e.preventDefault();
    const token = await register(form);
    login({ user: { email: form.email }, token });
  }

  const isDisabled = useMemo(() => {
    return Object.values(form).some(it => !it.trim());
  }, [form]);

  if (user) return <Navigate to="/movies"/>;

  return (
    <Authorization
      mode="login"
      isLoading={isLoading}
      isDisabled={isDisabled || !isValid}
      error={error}
      onSubmit={onSubmitHandler}
    >
      <label className="auth__input-container">
        <span className="auth__label">E-mail</span>

        <input
          className="auth__input"
          type="email"
          name="email"
          placeholder="pochta@yandex.ru"
          autoComplete="email"
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
          autoComplete="current-password"
          required
          value={form.password}
          onChange={({ target }) => {
            const value = target.value.trim();
            const error = !value ? AUTH_ERROR.EMPTY : "";

            setForm(prev => ({ ...prev, password: value }));
            setValidate((prev) => ({ ...prev, password: error }));
          }}
        />

        {validate.password && <p className="auth__error">{validate.password}</p>}
      </label>
    </Authorization>
  );
}

export default Login;
