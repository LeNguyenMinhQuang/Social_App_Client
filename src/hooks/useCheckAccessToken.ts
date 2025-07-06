import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { getAccessToken, removeAccessToken } from "../utils/token.service";
import { checkAccessTokenPending } from "../redux/slide/auth/auth.action";

const useCheckAccessToken = (): boolean => {
  const dispatch = useAppDispatch();

  // state
  const [isInitialized, setIsInitialized] = useState(false);

  // life cycle
  useEffect(() => {
    const initializeAuth = async () => {
      console.log("run");
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

  return isInitialized;
};

export default useCheckAccessToken;
