import React, { useEffect, useState } from "react"; // Đảm bảo đã import React và useEffect
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getAccessToken, removeAccessToken } from "../../ultils/token.service";
import { checkAccessTokenPending } from "../../redux/slide/auth/auth.action";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

interface IProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<IProps> = ({ children }) => {
  const { isLoading } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const access_token = getAccessToken();
        if (access_token) {
          await dispatch(checkAccessTokenPending());
        }
      } catch (error) {
        console.log("Authentication initialization failed:", error);
        removeAccessToken();
      } finally {
        setIsInitialized(true);
      }
    };

    initializeAuth();
  }, [dispatch]);

  if (!isInitialized || isLoading) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <Spin indicator={<LoadingOutlined style={{ fontSize: 120 }} spin />} />
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthProvider;
