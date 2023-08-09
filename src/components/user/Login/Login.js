import Authorization from "../Authorization/Authorization";
import AuthInputEmail from "../AuthInputEmail/AuthInputEmail";
import AuthInputPassword from "../AuthInputPassword/AuthInputPassword";

function Login() {
  return (
    <Authorization mode="login">
      <AuthInputEmail />
      <AuthInputPassword />
    </Authorization>
  );
}

export default Login;
