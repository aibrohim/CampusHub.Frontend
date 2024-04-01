import { BaseQueryFn } from "@reduxjs/toolkit/query/react";
import { message } from "antd";
import { AxiosError, AxiosRequestConfig } from "axios";

import { axiosInstance } from "@/shared/config/api";

export const baseQuery =
  (): BaseQueryFn<
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

    const { url, body, params } = query;
    let { method } = query;
    method = method?.toUpperCase();

    const isMutation =
      method == "POST" || method == "PATCH" || method == "DELETE";

    const { withMessage = isMutation } = query;

    try {
      const result = await axiosInstance({
        url,
        method,
        data: body,
        params,
      });
      return { data: result.data };
    } catch (axiosError) {
      console.dir(axiosError);

      const err = axiosError as AxiosError<{ message: string; error: string }>;
      const status = err.response?.status;

      if (withMessage) {
        message.error(err.response?.data?.message || err.message);
      }

      return {
        error: {
          status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
