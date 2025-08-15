import React, { useEffect } from "react";
import { Navigate, useOutletContext, Outlet } from "react-router-dom";

function Auth() {
  const { isAuthenticated, setModalType } = useOutletContext();
  useEffect(() => {
    if (!isAuthenticated) {
      setModalType("login");
    }
  }, [isAuthenticated, setModalType]);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}

export default Auth;