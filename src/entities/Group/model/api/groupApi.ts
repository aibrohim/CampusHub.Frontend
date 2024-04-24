import { rootApi } from "@/app/providers/Store";
import { IGroup } from "../../types/IGroup";
import { IAddReq } from "../types/IAddReq";
import { IDeleteReq } from "../types/IDeleteReq";
import { IUpdateReq } from "../types/IUpdateReq";

export const {
  useGetGroupsQuery,
  useGetGroupQuery,
  useAddGroupMutation,
  useDeleteGroupMutation,
  useUpdateGroupMutation,
} = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getGroups: builder.query<IGroup[], string>({
      query: (courseId) => `/group/course/${courseId}`,
    }),
    getGroup: builder.query<IGroup, string>({
      query: (groupId) => `/group/${groupId}`,
    }),
    addGroup: builder.mutation<IGroup, IAddReq>({
      query: (values) => ({
        url: "/group",
        body: values,
        method: "POST",
      }),
      async onQueryStarted({ courseId }, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(
          rootApi.util.updateQueryData("getGroups", courseId, (draft) => {
            draft.push(data);
          })
        );
      },
    }),
    deleteGroup: builder.mutation<void, IDeleteReq>({
      query: ({ groupId }) => ({
        url: `/group/${groupId}`,
        method: "DELETE",
      }),
      async onQueryStarted(
        { courseId, groupId },
        { dispatch, queryFulfilled }
      ) {
        await queryFulfilled;
        dispatch(
          rootApi.util.updateQueryData("getGroups", courseId, (draft) => {
            draft = draft.filter((g) => g.id === groupId);

            return draft;
          })
        );
      },
    }),
    updateGroup: builder.mutation<IGroup, IUpdateReq>({
      query: ({ id, name, courseId }) => ({
        url: `/group/${id}`,
        method: "PUT",
        body: {
          name,
          courseId,
        },
      }),
      async onQueryStarted(
        { courseId, id, ...group },
        { dispatch, queryFulfilled }
      ) {
        await queryFulfilled;
        dispatch(
          rootApi.util.updateQueryData("getGroups", courseId, (draft) => {
            draft = draft.map((g) => (g.id === id ? { ...g, ...group } : g));

            return draft;
          })
        );

        dispatch(
          rootApi.util.updateQueryData("getGroup", id, (draft) => {
            draft = {
              ...draft,
              name: group.name,
            };

            return draft;
          })
        );
      },
    }),
  }),
  overrideExisting: true,
});
