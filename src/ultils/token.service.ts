const ACCESS_TOKEN_KEY = "access_token";

const getAccessToken = (): string | null => {
  try {
    const access_token = localStorage.getItem(ACCESS_TOKEN_KEY);
    return access_token;
  } catch (error) {
    console.error("No access token in storage", error);
    return null;
  }
};

const setAccessToken = (token: string): void => {
  try {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  } catch (error) {
    console.error("Cannot save token in storage", error);
  }
};

const removeAccessToken = (): void => {
  try {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  } catch (error) {
    console.error("Cannot remove token in storage", error);
  }
};

export { getAccessToken, setAccessToken, removeAccessToken };
