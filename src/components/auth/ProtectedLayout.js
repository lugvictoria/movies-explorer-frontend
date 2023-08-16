import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

function ProtectedLayout() {
  const { user } = useAuth();
  return user ? <Outlet/> : <Navigate to="/"/>;
}

export default ProtectedLayout;