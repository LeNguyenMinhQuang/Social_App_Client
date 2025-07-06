// Auth
const PATH_REFRESH_TOKENS = "/auth/refresh";
const PATH_CHECK_ACCESS_TOKEN = "/auth";
const PATH_LOGIN = "/auth/login";
const PATH_REGISTER = "/auth/register";
const PATH_ERROR = "/auth/error";
const PATH_LOGOUT = "/auth/logout";

// File
const PATH_UPLOAD_ONE_FILE = "files/upload";

// Post
const PATH_GET_ALL_POST = "posts";
const PATH_CREATE_A_POST = "posts";
const PATH_UPDATE_A_POST = (id: string) => `posts/${id}`;
const PATH_LIKE_POST = (id: string) => `posts/${id}/like`;

export {
  PATH_REFRESH_TOKENS,
  PATH_CHECK_ACCESS_TOKEN,
  PATH_LOGIN,
  PATH_REGISTER,
  PATH_ERROR,
  PATH_UPLOAD_ONE_FILE,
  PATH_GET_ALL_POST,
  PATH_CREATE_A_POST,
  PATH_UPDATE_A_POST,
  PATH_LIKE_POST,
  PATH_LOGOUT,
};
