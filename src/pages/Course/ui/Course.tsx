import { Card, Segmented, Typography } from "antd";
import { FC } from "react";
import {
  Location,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import { DeleteCourse } from "@/features/DeleteCourse";
import { UpdateCourse } from "@/features/UpdateCourse";

import { useGetCourseQuery } from "@/entities/Course";

import { BackButton } from "@/shared/ui/BackButton";
import { PageLoading } from "@/shared/ui/PageLoading";

const getCurrentTab = (location: Location): string => {
  const splittedLocation = location.pathname.split("/");
  const tab = splittedLocation[splittedLocation.length - 1];

  return tab;
};

export const Course: FC = () => {
  const { id } = useParams() as { id: string };

  const navigate = useNavigate();

  const location = useLocation();
  const currentTab = getCurrentTab(location);

  const { data: course, isLoading } = useGetCourseQuery(id);

  if (isLoading) return <PageLoading />;

  if (course)
    return (
      <Card
        title={
          <div className="flex items-center gap-3">
            <BackButton />
            <Typography.Title>{course.name}</Typography.Title>
          </div>
        }
        extra={
          <div className="flex gap-3">
            <DeleteCourse courseId={id} />
            <UpdateCourse course={course} />
          </div>
        }
      >
        <Segmented
          size="large"
          value={currentTab}
          onChange={(val) => navigate(`/course/${id}/${val}`)}
          options={[
            { value: "modules", label: "Modules" },
            { value: "groups", label: "Groups" },
          ]}
        />

        <Outlet />
      </Card>
    );
};
