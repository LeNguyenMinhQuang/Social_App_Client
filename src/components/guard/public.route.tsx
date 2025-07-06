import React from "react";
import AuthGuard from "./auth.guard";

interface IProps {
  children: React.ReactNode;
}

const PublicRoute: React.FC<IProps> = ({ children }) => {
  return <AuthGuard requireAuth={false}>{children}</AuthGuard>;
};

export default PublicRoute;
