import { Spin, Typography } from "antd";

import { CourseCard, useGetCoursesQuery } from "@/entities/Course";
import { AddCourse } from "@/features/AddCourse";

export const Courses = () => {
  const { data: courses, isFetching } = useGetCoursesQuery();
  return (
    <>
      <Typography.Title>Courses</Typography.Title>

      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-4">
          <AddCourse />
        </div>
        {isFetching && <Spin />}
        {courses &&
          courses.map((course) => (
            <div key={course.id} className="col-span-4">
              <CourseCard course={course} />
            </div>
          ))}
      </div>
    </>
  );
};
