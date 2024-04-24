import { Card, Segmented, Typography } from "antd";
import { FC } from "react";
import {
  Location,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import { DeleteModule } from "@/features/DeleteModule";
import { UpdateModule } from "@/features/UpdateModule";

import { useGetModuleQuery } from "@/entities/Module";

import { BackButton } from "@/shared/ui/BackButton";
import { PageLoading } from "@/shared/ui/PageLoading";

const getCurrentTab = (location: Location): string => {
  const splittedLocation = location.pathname.split("/");
  const tab = splittedLocation[splittedLocation.length - 1];

  return tab;
};

export const Module: FC = () => {
  const { id } = useParams() as { id: string };

  const navigate = useNavigate();

  const location = useLocation();
  const currentTab = getCurrentTab(location);

  const { data: module, isLoading } = useGetModuleQuery(id);

  if (isLoading) return <PageLoading />;

  if (module)
    return (
      <Card
        title={
          <div className="flex items-center gap-3">
            <BackButton backUrl={`/course/${module.course.id}/modules`} />
            <Typography.Title>{module.name}</Typography.Title>
          </div>
        }
        extra={
          <div className="flex gap-3">
            <DeleteModule module={module} />
            <UpdateModule module={module} />
          </div>
        }
      >
        <Segmented
          size="large"
          value={currentTab}
          onChange={(val) => navigate(`/module/${id}/${val}`)}
          options={[
            { value: "assessments", label: "Assessments" },
            { value: "students", label: "Students" },
          ]}
        />

        <Outlet />
      </Card>
    );
};
