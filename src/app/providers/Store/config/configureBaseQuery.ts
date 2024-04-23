import { BaseQueryFn } from "@reduxjs/toolkit/query/react";
import { message } from "antd";
import { AxiosError, AxiosRequestConfig } from "axios";

import { axiosInstance } from "@/shared/config/api";

interface FieldError {
  FieldName: string;
  Message: string;
}

interface ProcessError {
  Message: string;
  FieldErrors: null;
}

interface FieldsError {
  Message: string;
  FieldErrors: FieldError[];
}

type BackendError = ProcessError | FieldsError;

export const baseQuery =
  (
    tokenAccessor: () => string
  ): BaseQueryFn<
    | {
        url: string;
        method: AxiosRequestConfig["method"];
        body?: AxiosRequestConfig["data"];
        params?: AxiosRequestConfig["params"];
        withMessage?: boolean;
        withToken?: boolean;
      }
    | string,
    unknown,
    unknown
  > =>
  async (query) => {
    if (typeof query == "string") {
      query = {
        method: "GET",
        url: query,
      };
    }

    const { url, body, params, withToken = true } = query;
    let { method } = query;
    method = method?.toUpperCase();

    const isMutation =
      method == "POST" || method == "PATCH" || method == "DELETE";

    const { withMessage = isMutation } = query;

    const token = tokenAccessor();

    try {
      const result = await axiosInstance({
        url,
        method,
        data: body,
        params,
        headers:
          token && withToken
            ? {
                Authorization: `Bearer ${token}`,
              }
            : {},
      });
      return { data: result.data };
    } catch (error) {
      console.dir(error);

      const axiosError = error as AxiosError<BackendError>;
      const status = axiosError.response?.status;

      let messageTxt: string = "";

      if (axiosError.isAxiosError) {
        if (axiosError.response) {
          if (axiosError.response.data.Message)
            messageTxt = axiosError.response.data.Message;
          else if (axiosError.response.data.FieldErrors)
            messageTxt = axiosError.response.data.FieldErrors.map(
              (e) => e.Message
            ).join(", ");
          else {
            messageTxt = "Unknown error occurred";
          }
        } else if (axiosError.request) {
          messageTxt = "No response from server";
        } else {
          messageTxt = `Error setting up request: ${axiosError.message}`;
        }
      } else {
        messageTxt = `Non-Axios error: ${error}`;
      }

      if (withMessage) message.error(messageTxt);

      return {
        error: {
          status,
          message: messageTxt,
        },
      };
    }
  };
