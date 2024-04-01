import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./configureBaseQuery";

export const rootApi = createApi({
  reducerPath: "rootApi",
  baseQuery: baseQuery(),
  endpoints: () => ({}),
  tagTypes: ["User"],
});
