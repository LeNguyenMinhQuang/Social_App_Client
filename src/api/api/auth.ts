import type { IUserData } from "../../datatypes/types";
import {
  PATH_CHECK_ACCESS_TOKEN,
  PATH_LOGIN,
  PATH_LOGOUT,
  PATH_REFRESH_TOKENS,
  PATH_REGISTER,
} from "../apiPath/path";
import axiosClient from "../axios/axiosClient";

const checkAccessToken = async (): Promise<IUserData | null | undefined> => {
  try {
    const response = await axiosClient.get(PATH_CHECK_ACCESS_TOKEN);
    if (response && response.data) {
      return response.data;
    }
  } catch (error: any) {
    console.error("Authentication failed: ", error);
    return null;
  }
};

const refreshTokens = async (): Promise<string | null | undefined> => {
  try {
    const response: { data: { access_token: string; user: {} } } =
      await axiosClient.get(PATH_REFRESH_TOKENS);
    if (response && response.data.access_token) {
      return response.data.access_token;
    }
  } catch (error: any) {
    console.error("Refresh Token failed: ", error);
    return error;
  }
};

const login = async (payload: { userName: string; password: string }) => {
  try {
    const response = await axiosClient.post(PATH_LOGIN, {
      ...payload,
    });
    if (response && response.data) {
      return response.data;
    }
  } catch (error: any) {
    console.error("Cannot login: ", error);
    return error;
  }
};

const register = async (payload: {
  userName: string;
  password: string;
  email: string;
}) => {
  try {
    const response = await axiosClient.post(PATH_REGISTER, {
      ...payload,
    });
    if (response && response.data) {
      return response.data;
    }
  } catch (error: any) {
    console.error("Cannot register: ", error);
    return error;
  }
};

const logout = async () => {
  try {
    const response = await axiosClient.get(PATH_LOGOUT);
    if (response && response.data) {
      return response.data;
    }
  } catch (error) {
    console.error("Cannot logout: ", error);
    return error;
  }
};

export { checkAccessToken, refreshTokens, login, register, logout };
