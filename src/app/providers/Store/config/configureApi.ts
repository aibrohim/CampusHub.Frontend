import { createApi } from "@reduxjs/toolkit/query/react";

import { IUser } from "@/entities/User";
import { tokenService } from "@/entities/Token";

import { baseQuery } from "./configureBaseQuery";

export const rootApi = createApi({
  reducerPath: "rootApi",
  baseQuery: baseQuery(tokenService.getAccessToken),
  endpoints: (builder) => ({
    getUser: builder.query<IUser, void>({ query: () => "" }),
  }),
  tagTypes: ["User"],
});
