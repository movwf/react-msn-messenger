import React from "react";
import { Navigate } from "react-router-dom";

import { useUserInfo } from "../contexts/AuthContext";

const ProtectedRoute: React.FC = ({ children }: any) => {
  const { email } = useUserInfo();

  return email ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
