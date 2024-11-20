import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { globalContext } from "./context/GlobalContext";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useContext(globalContext);

  if (!isAuthenticated) {

    return <Navigate to="/Register" replace />;
  }

  return children;
}