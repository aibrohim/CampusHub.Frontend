import { rootApi } from "@/app/providers/Store";
import { ICourse } from "../../types/ICourse";
import { IAddReq } from "../types/IAddReq";
import { IUpdateReq } from "../types/IUpdateReq";

export const {
  useGetCoursesQuery,
  useGetCourseQuery,
  useAddCourseMutation,
  useDeleteCourseMutation,
  useUpdateCourseMutation,
} = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query<ICourse[], void>({
      query: () => "/course",
    }),
    getCourse: builder.query<ICourse, string>({
      query: (courseId) => `/course/${courseId}`,
    }),
    addCourse: builder.mutation<ICourse, IAddReq>({
      query: (values) => ({
        url: "/course",
        body: values,
        method: "POST",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(
          rootApi.util.updateQueryData("getCourses", undefined, (draft) => {
            draft.unshift(data);
          })
        );
      },
    }),
    deleteCourse: builder.mutation<void, string>({
      query: (courseId) => ({
        url: `/course/${courseId}`,
        method: "DELETE",
      }),
      async onQueryStarted(courseId, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(
          rootApi.util.updateQueryData("getCourses", undefined, (draft) => {
            draft = draft.filter((c) => c.id !== courseId);
            return draft;
          })
        );
      },
    }),
    updateCourse: builder.mutation<ICourse, IUpdateReq>({
      query: ({ id, name }) => ({
        url: `/course/${id}`,
        method: "PUT",
        body: {
          name,
        },
      }),
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        await queryFulfilled;

        dispatch(
          rootApi.util.updateQueryData("getCourses", undefined, (draft) => {
            draft = draft.map((c) => (c.id === data.id ? data : c));
            return draft;
          })
        );

        dispatch(
          rootApi.util.updateQueryData("getCourse", data.id, (draft) => {
            draft = data;
            return draft;
          })
        );
      },
    }),
  }),
  overrideExisting: true,
});
