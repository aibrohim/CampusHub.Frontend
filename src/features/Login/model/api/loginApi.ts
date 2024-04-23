import { rootApi } from "@/app/providers/Store";

import { ILoginRes } from "../types/ILoginRes";
import { ILoginReq } from "../types/ILoginReq";

export const { useLoginMutation } = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ILoginRes, ILoginReq>({
      query: (values) => ({
        url: "/auth/login/admin",
        method: "POST",
        body: values,
      }),
    }),
  }),
});
