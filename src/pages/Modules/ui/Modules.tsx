import { Typography } from "antd";

import { IModule, ModuleCard } from "@/entities/Module";
import { AddCourse } from "@/features/AddCourse";

const modulesList: IModule[] = [
  {
    id: 1,
    name: "Fundamentals of Programming",
  },
  {
    id: 2,
    name: "Business Intelligence Systems",
  },
  {
    id: 3,
    name: "Web Applications Development",
  },
  {
    id: 4,
    name: "Internet of Things",
  },
  {
    id: 5,
    name: "Software Quality, Performance and Testing",
  },
];

export const Modules = () => {
  return (
    <>
      <Typography.Title>Modules</Typography.Title>

      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-4">
          <AddCourse />
        </div>
        {modulesList.map((module) => (
          <div key={module.id} className="col-span-4">
            <ModuleCard module={module} />
          </div>
        ))}
      </div>
    </>
  );
};
