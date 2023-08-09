import AuthInput from "../AuthInput/AuthInput";

function AuthInputPassword() {
  return (
    <AuthInput
      label="Пароль"
      params={{
        type: "password",
        name: "password",
        required: true,
        id: "password-input",
        placeholder: "",
      }}
    />
  );
}

export default AuthInputPassword;
