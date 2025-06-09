import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";
import { getAccessToken, setAccessToken } from "../../ultils/token.service";

import { refreshTokens } from "../api/auth";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const axiosClient: AxiosInstance = axios.create({
  baseURL: SERVER_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Interceptor request
axiosClient.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    const access_token = getAccessToken();
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }
    return config;
  },
  function (error: AxiosError) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response: AxiosResponse): AxiosResponse {
    console.log("response: ", response);
    return response.data;
  },
  async function (error: AxiosError): Promise<AxiosResponse> {
    console.log("error", error);
    const orginalRequest = error.config as InternalAxiosRequestConfig & {
      _retry: boolean;
    };
    console.log("old access token: ", orginalRequest.headers["Authorization"]);

    if (error.response?.status === 401 && !orginalRequest._retry) {
      orginalRequest._retry = true;
      try {
        const access_token = await refreshTokens();
        console.log("new access token: ", access_token);
        setAccessToken(access_token!);
        orginalRequest.headers["Authorization"] = `Bearer ${access_token}`;
        return axiosClient(orginalRequest);
      } catch (error) {}
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
