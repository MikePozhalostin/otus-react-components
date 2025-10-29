import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { RootState } from "../store";

const withAuth = <P extends object>(Component: React.ComponentType<P>) => {
  const ProtectedRoute: React.FC<P> = (props) => {
    const user = useSelector((state: RootState) => state.user.user);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return <Component {...props} />;
  };

  return ProtectedRoute;
};

export default withAuth;