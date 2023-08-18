import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "./AuthProvider";

function ProtectedLayout() {
  const { user } = useAuthContext();
  return user ? <Outlet/> : <Navigate to="/"/>;
}

export default ProtectedLayout;
