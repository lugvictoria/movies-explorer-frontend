import AuthInput from "../AuthInput/AuthInput";

function AuthInputEmail() {
  return (
    <AuthInput
      label="E-mail"
      params={{
        type: "email",
        name: "email",
        required: true,
        placeholder: "pochta@yandex.ru",
      }}
    />
  );
}

export default AuthInputEmail;
