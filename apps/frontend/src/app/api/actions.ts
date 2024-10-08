import { AxiosResponse } from "axios";
import { CreateCommentType, PostType } from "@repo/common/config";
import { client, getAxiosConfig } from "./axiosClient";
import { ApiResponse } from "@/lib/types";

export const signIn = async (payload = {}) => {
  try {
    const response = await client.post(
      `/api/v1/auth/signin`,
      payload,
      getAxiosConfig(false)
    );
    return response;
  } catch (err) {
    //Show error toast
  }
};

export const signUp = async (payload = {}) => {
  try {
    const response = await client.post(
      `/api/v1/auth/signup`,
      payload,
      getAxiosConfig(false)
    );
    return response;
  } catch (err) {
    //Show error toast
  }
};

export const getAllBlogs = async (payload = {}) => {
  try {
    const response = await client.get(`/api/v1/blog`, {
      params: { ...payload },
    });
    return response;
  } catch (err) {
    //Show error toast
  }
};

export const uploadCoverImage = async (payload = {}) => {
  try {
    let headers = { "Content-Type": "multipart/form-data" };
    let response = await client.put(`/api/v1/blog/auth/cover-upload`, payload, {
      headers,
    });
    return response;
  } catch (err) {
    //Show error toast
  }
};

export const publishBlog = async (
  payload = {},
  post_id = "",
  is_update = false
) => {
  try {
    let response;
    if (is_update) {
      response = await client.put(`/api/v1/blog/auth/${post_id}`, payload);
    } else {
      response = await client.post(`/api/v1/blog/auth/`, payload);
    }
    return response;
  } catch (err) {
    //Show error toast
  }
};

export const getSingleBlog = async (
  id = ""
): Promise<AxiosResponse<ApiResponse<PostType>> | undefined> => {
  try {
    const response = await client.get(`/api/v1/blog/${id}`);
    return response;
  } catch (err) {
    //Show error toast
  }
};

export const deleteBlog = async (id = "") => {
  try {
    const response = await client.delete(`/api/v1/blog/auth/${id}`);
    return response;
  } catch (err) {
    //Show error toast
  }
};

export const likeBlog = async (postId = "", userId: "", like_count = 1) => {
  try {
    const response = await client.post(`/api/v1/blog/auth/like-post`, {
      postId,
      userId,
      like_count,
    });
    return response;
  } catch (err) {
    //Show error toast
  }
};

export const postComment = async (payload: CreateCommentType) => {
  try {
    const response = await client.post(`/api/v1/blog/auth/comment`, payload);
    return response;
  } catch (err) {
    //Show error toast
  }
};

export const updateComment = async (id = "", payload: { message: string }) => {
  try {
    const response = await client.put(
      `/api/v1/blog/auth/comment/${id}`,
      payload
    );
    return response;
  } catch (err) {
    //Show error toast
  }
};

export const deleteComment = async (id = "") => {
  try {
    const response = await client.delete(`/api/v1/blog/auth/comment/${id}`);
    return response;
  } catch (err) {
    //Show error toast
  }
};

export const likeComment = async (id = "") => {
  try {
    const response = await client.post(`/api/v1/blog/auth/comment/like/${id}`);
    return response;
  } catch (err) {
    //Show error toast
  }
};
