import { createApi } from "@reduxjs/toolkit/query/react";

import { ICourse } from "@/entities/Course";
import { IModule } from "@/entities/Module";
import { tokenService } from "@/entities/Token";
import { IUser } from "@/entities/User";
import { IGroup } from "@/entities/Group";

import { baseQuery } from "./configureBaseQuery";

export const rootApi = createApi({
  reducerPath: "rootApi",
  baseQuery: baseQuery(tokenService.getAccessToken),
  endpoints: (builder) => ({
    getUser: builder.query<IUser, void>({ query: () => "" }),
    getCourses: builder.query<ICourse[], void>({ query: () => "" }),
    getCourse: builder.query<ICourse, string>({ query: () => "" }),
    getModules: builder.query<IModule[], string>({
      query: () => "",
    }),
    getModule: builder.query<IModule, string>({ query: () => "" }),
    getGroups: builder.query<IGroup[], string>({
      query: () => "",
    }),
    getGroup: builder.query<IGroup, string>({ query: () => "" }),
  }),
  tagTypes: ["User", "Modules", "Module"],
});
