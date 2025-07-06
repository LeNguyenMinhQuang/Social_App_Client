import type { IPost } from "./../../datatypes/types.d";
import type { IPostQuery } from "../../datatypes/types";
import {
  PATH_CREATE_A_POST,
  PATH_GET_ALL_POST,
  PATH_LIKE_POST,
  PATH_UPDATE_A_POST,
} from "../apiPath/path";
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
    const response = await axiosClient.post(PATH_CREATE_A_POST, payload);
    if (response && response.data) {
      return response.data;
    }
  } catch (error) {
    console.log("Cannot create post");
    return error;
  }
};

const updatePost = async (payload: IPost) => {
  try {
    const response = await axiosClient.patch(
      PATH_UPDATE_A_POST(payload._id!),
      payload
    );
    if (response && response.data) {
      return response.data;
    }
  } catch (error) {
    console.log("Cannot update post");
    return error;
  }
};

const likeOrUnlikePost = async (payload: string) => {
  try {
    const response = await axiosClient.patch(PATH_LIKE_POST(payload!));
    if (response && response.data) {
      return response.data;
    }
  } catch (error) {
    console.log("Cannot like post");
    return error;
  }
};

export { getAllPostWithPagination, createPost, updatePost, likeOrUnlikePost };
