import React from "react";
import AuthGuard from "./auth.guard";

interface IProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<IProps> = ({ children }) => {
  return <AuthGuard requireAuth={true}>{children}</AuthGuard>;
};

export default ProtectedRoute;
