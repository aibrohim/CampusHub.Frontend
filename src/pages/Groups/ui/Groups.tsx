import { Typography } from "antd";
import { FC } from "react";

import { GroupCard, IGroup } from "@/entities/Group";
import { AddBuilding } from "@/features/AddBuilding";

const groupsList: IGroup[] = [
  {
    id: 1,
    name: "6BsBIS01",
  },
  {
    id: 1,
    name: "6BsBIS02",
  },
  {
    id: 1,
    name: "6BsBIS03",
  },
  {
    id: 1,
    name: "6BsBIS04",
  },
  {
    id: 1,
    name: "6BsBIS05",
  },
  {
    id: 1,
    name: "6BsBIS06",
  },
];

export const Groups: FC = () => {
  return (
    <>
      <Typography.Title>Groups</Typography.Title>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <AddBuilding />
        </div>
        {groupsList.map((group) => (
          <div key={group.id} className="col-span-3">
            <GroupCard group={group} />
          </div>
        ))}
      </div>
    </>
  );
};
