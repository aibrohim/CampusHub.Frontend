import { Typography } from "antd";
import { FC } from "react";

import { BuildingCard, IBuilding } from "@/entities/Building";
import { AddBuilding } from "@/features/AddBuilding";

const buildingsList: IBuilding[] = [
  {
    id: 1,
    name: "IB",
  },
  {
    id: 2,
    name: "AtB",
  },
  {
    id: 2,
    name: "ShB",
  },
];

export const Buildings: FC = () => {
  return (
    <>
      <Typography.Title>Buildings</Typography.Title>

      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <AddBuilding />
        </div>
        {buildingsList.map((building) => (
          <div key={building.id} className="col-span-3">
            <BuildingCard building={building} />
          </div>
        ))}
      </div>
    </>
  );
};
