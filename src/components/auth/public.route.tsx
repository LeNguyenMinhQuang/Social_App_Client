import React from "react";
import AuthGuard from "./auth.guard";

const PublicRoute: React.FC<{
  children: React.ReactNode;
  redirectTo?: string;
}> = ({ children, redirectTo = "/" }) => {
  return (
    <AuthGuard requireAuth={false} redirectTo={redirectTo}>
      {children}
    </AuthGuard>
  );
};

export default PublicRoute;
