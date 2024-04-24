import { BaseQueryFn } from "@reduxjs/toolkit/query/react";
import { message } from "antd";
import { AxiosError, AxiosRequestConfig } from "axios";

import { axiosInstance } from "@/shared/config/api";

interface FieldError {
  FieldName: string;
  message: string;
}

interface ProcessError {
  message: string;
  fieldErrors: null;
}

interface FieldsError {
  message: string;
  fieldErrors: FieldError[];
}

type BackendError = ProcessError | FieldsError;

const mutationMethods = ["POST", "DELETE", "PUT", "PATCH"];

export const baseQuery =
  (
    tokenAccessor: () => string
  ): BaseQueryFn<
    | {
        url: string;
        method: "POST" | "GET" | "DELETE" | "PUT" | "PATCH";
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

    const isMutation = mutationMethods.includes(method);

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
          if (axiosError.response.data.message)
            messageTxt = axiosError.response.data.message;
          else if (axiosError.response.data.fieldErrors)
            messageTxt = axiosError.response.data.fieldErrors
              .map((e) => e.message)
              .join(", ");
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
