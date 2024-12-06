import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";

const PrivateRoute = (props = {}) => {
  const { user, loading } = useContext(AuthContext);
  const { children } = props || {};

  if (loading) {
    return <Loading />;
  }

  if (user && user?.email) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default PrivateRoute;
