import { Typography } from "antd";

import { ICourse, CourseCard } from "@/entities/Course";
import { AddCourse } from "@/features/AddCourse";

const coursesList: ICourse[] = [
  {
    id: 1,
    name: "Business Information Systems",
  },
  {
    id: 2,
    name: "Business and Management",
  },
  {
    id: 3,
    name: "Business Administration",
  },
];

export const Courses = () => {
  return (
    <>
      <Typography.Title>Courses</Typography.Title>

      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-4">
          <AddCourse />
        </div>
        {coursesList.map((course) => (
          <div key={course.id} className="col-span-4">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </>
  );
};
