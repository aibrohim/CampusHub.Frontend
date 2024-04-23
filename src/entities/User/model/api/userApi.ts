import { rootApi } from "@/app/providers/Store";
import { IUser } from "../../types/IUser";

export const {
  useGetUserQuery,
  useLazyGetUserQuery,
  endpoints: userEndpoints,
  util,
} = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<IUser, void>({
      query: () => "user/me",
      providesTags: ["User"],
    }),
  }),
  overrideExisting: true,
});
