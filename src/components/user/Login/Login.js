import Auth from "../Auth/Auth";
import AuthInputEmail from "../AuthInputEmail/AuthInputEmail";
import AuthInputPassword from "../AuthInputPassword/AuthInputPassword";

function Login() {
  return (
    <Auth mode="login">
      <AuthInputEmail />
      <AuthInputPassword />
    </Auth>
  );
}

export default Login;
