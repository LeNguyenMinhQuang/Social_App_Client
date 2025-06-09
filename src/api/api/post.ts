import { IPost } from "./../../datatypes/types.d";
import type { IPostQuery } from "../../datatypes/types";
import { PATH_CREATE_A_POST, PATH_GET_ALL_POST } from "../apiPath/path";
import axiosClient from "../axios/axiosClient";

const getAllPostWithPagination = async ({ page, isPublic }: IPostQuery) => {
  try {
    const response = await axiosClient.get(PATH_GET_ALL_POST, {
      params: {
        page,
        isPublic,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Cannot get all post");
    return error;
  }
};

const createPost = async (payload: IPost) => {
  try {
    console.log(payload);
    // const response = await axiosClient.post(PATH_CREATE_A_POST, {
    //   co,
    // });
  } catch (error) {}
};

export { getAllPostWithPagination };
