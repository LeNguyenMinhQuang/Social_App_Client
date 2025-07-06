import React, { useEffect } from "react"; // Đảm bảo đã import React và useEffect
import { useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

interface IProps {
  children: React.ReactNode;
  requireAuth?: boolean;
}

const AuthGuard: React.FC<IProps> = ({ children, requireAuth }) => {
  // setup
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  // life cycle
  useEffect(() => {
    if (requireAuth && !isAuthenticated) {
      navigate("/login", { replace: true });
    } else if (!requireAuth && isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate, requireAuth]);

  return <>{children}</>;
};

export default AuthGuard;
