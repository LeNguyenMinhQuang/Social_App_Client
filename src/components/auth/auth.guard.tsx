import React, { useEffect } from "react"; // Đảm bảo đã import React và useEffect
import { useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

interface IProps {
  children: React.ReactNode;
  redirectTo?: string;
  requireAuth?: boolean;
}

const AuthGuard: React.FC<IProps> = ({
  children,
  redirectTo = "/",
  requireAuth = true,
}) => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (requireAuth && !isAuthenticated) {
      navigate("/login", { replace: true });
    } else if (!requireAuth && isAuthenticated) {
      navigate(redirectTo, { replace: true });
    }
  }, [isAuthenticated, navigate, redirectTo, requireAuth]);

  return <>{children}</>;
};

export default AuthGuard;
