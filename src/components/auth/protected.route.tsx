import React from "react";
import AuthGuard from "./auth.guard";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <AuthGuard requireAuth={true}>{children}</AuthGuard>;
};

export default ProtectedRoute;
