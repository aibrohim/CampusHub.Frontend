import { Card, Typography } from "antd";
import { FC } from "react";

import { ICourse } from "../types/ICourse";
import { Link } from "react-router-dom";

interface ICourseCardProps {
  course: ICourse;
}

export const CourseCard: FC<ICourseCardProps> = ({ course }) => {
  return (
    <Link to="/course/single/modules">
      <Card>
        <Typography.Text className="!my-0">{course.name}</Typography.Text>
      </Card>
    </Link>
  );
};
