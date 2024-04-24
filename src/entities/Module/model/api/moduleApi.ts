import { rootApi } from "@/app/providers/Store";
import { IModule } from "../../types/IModule";
import { IAddReq } from "../types/IAddReq";
import { IDeleteReq } from "../types/IDeleteReq";
import { IUpdateReq } from "../types/IUpdateReq";

export const {
  useGetModulesQuery,
  useGetModuleQuery,
  useAddModuleMutation,
  useDeleteModuleMutation,
  useUpdateModuleMutation,
} = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getModules: builder.query<IModule[], string>({
      query: (courseId) => ({
        url: "/module",
        method: "GET",
        params: {
          courseId,
        },
      }),
      providesTags: ["Modules"],
    }),
    getModule: builder.query<IModule, string>({
      query: (courseId) => `/module/${courseId}`,
      providesTags: ["Module"],
    }),
    addModule: builder.mutation<IModule, IAddReq>({
      query: (values) => ({
        url: "/module",
        body: values,
        method: "POST",
      }),
      async onQueryStarted({ courseId }, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(
          rootApi.util.updateQueryData("getModules", courseId, (draft) => {
            draft.push(data);
          })
        );
      },
    }),
    deleteModule: builder.mutation<void, IDeleteReq>({
      query: ({ moduleId }) => ({
        url: `/module/${moduleId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Module", "Modules"],
    }),
    updateModule: builder.mutation<IModule, IUpdateReq>({
      query: ({ id, name }) => ({
        url: `/module/${id}`,
        method: "PUT",
        body: {
          name,
        },
      }),
      invalidatesTags: ["Module", "Modules"],
    }),
  }),
  overrideExisting: true,
});
