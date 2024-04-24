import { Spin, Typography } from "antd";

import { ModuleCard, useGetModulesQuery } from "@/entities/Module";
import { AddModule } from "@/features/AddModule";
import { useParams } from "react-router-dom";

export const Modules = () => {
  const { id: courseId } = useParams() as { id: string };

  const { data: modules, isFetching } = useGetModulesQuery(courseId);

  return (
    <>
      <Typography.Title>Modules</Typography.Title>

      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-4">
          <AddModule courseId={courseId} />
        </div>
        {isFetching && <Spin />}
        {modules &&
          modules.map((module) => (
            <div key={module.id} className="col-span-4">
              <ModuleCard module={module} />
            </div>
          ))}
      </div>
    </>
  );
};
