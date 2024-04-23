import { rootApi } from "@/app/providers/Store";
import { IForgotPasswordRequest } from "../types/IForgotPasswordRequest";
import { IForgotPasswordResponse } from "../types/IForgotPasswordResponse";
import { IRecoverPasswordRequest } from "../types/IRecoverPasswordRequest";

export const { useForgotPasswordMutation, useRecoverPasswordMutation } =
  rootApi.injectEndpoints({
    endpoints: (builder) => ({
      forgotPassword: builder.mutation<
        IForgotPasswordResponse,
        IForgotPasswordRequest
      >({
        query: (body) => ({
          url: "/auth/forgot-password",
          body,
          method: "POST",
        }),
      }),
      recoverPassword: builder.mutation<
        IForgotPasswordResponse,
        IRecoverPasswordRequest
      >({
        query: (body) => ({
          url: "auth/recover-password",
          method: "POST",
          body,
        }),
      }),
    }),
  });
