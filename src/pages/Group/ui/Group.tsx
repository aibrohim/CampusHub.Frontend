import { Card, Typography } from "antd";
import { FC } from "react";
import { useParams } from "react-router-dom";

import { DeleteGroup } from "@/features/DeleteGroup";
import { UpdateGroup } from "@/features/UpdateGroup";

import { useGetGroupQuery } from "@/entities/Group";

import { BackButton } from "@/shared/ui/BackButton";
import { PageLoading } from "@/shared/ui/PageLoading";

export const Group: FC = () => {
  const { id } = useParams() as { id: string };

  const { data: group, isLoading } = useGetGroupQuery(id);

  if (isLoading) return <PageLoading />;

  if (group)
    return (
      <Card
        title={
          <div className="flex items-center gap-3">
            <BackButton backUrl={`/course/${group.course.id}/groups`} />
            <Typography.Title>{group.name}</Typography.Title>
          </div>
        }
        extra={
          <div className="flex gap-3">
            <DeleteGroup group={group} />
            <UpdateGroup group={group} />
          </div>
        }
      ></Card>
    );
};
