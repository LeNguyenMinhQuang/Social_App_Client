import React from "react"; // Đảm bảo đã import React và useEffect
import { useAppSelector } from "../../redux/hooks";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import useCheckAccessToken from "../../hooks/useCheckAccessToken";

interface IProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<IProps> = ({ children }) => {
  // setup
  const { accessStatus } = useAppSelector((state) => state.auth);
  const isInitialized = useCheckAccessToken();

  if (!isInitialized || accessStatus === "pending") {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <Spin
          indicator={
            <LoadingOutlined
              style={{ fontSize: 120, color: "var(--color-primary-base)" }}
              spin
            />
          }
        />
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthProvider;
