import AuthInput from "../AuthInput/AuthInput";

function AuthInputForPassword() {
  return (
    <AuthInput
      label="Пароль"
      params={{
        type: "password",
        name: "password",
        required: true,
        id: "password-input",
        placeholder: "movingTo",
      }}
    />
  );
}

export default AuthInputForPassword;
