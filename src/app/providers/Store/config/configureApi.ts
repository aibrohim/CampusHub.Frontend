import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./configureBaseQuery";
import { IUser } from "@/entities/User";

export const rootApi = createApi({
  reducerPath: "rootApi",
  baseQuery: baseQuery(),
  endpoints: (builder) => ({
    getUser: builder.query<IUser, void>({ query: () => "" }),
  }),
  tagTypes: ["User"],
});
