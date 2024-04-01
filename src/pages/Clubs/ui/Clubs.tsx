import { Typography } from "antd";
import { FC } from "react";

import { ClubCard, IClub } from "@/entities/Club";
import { AddBuilding } from "@/features/AddBuilding";

const clubsList: IClub[] = [
  {
    id: 1,
    name: "70+ Community",
  },
  {
    id: 1,
    name: "Reading Club",
  },
  {
    id: 1,
    name: "Typing Club",
  },
];

export const Clubs: FC = () => {
  return (
    <>
      <Typography.Title>Clubs</Typography.Title>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <AddBuilding />
        </div>
        {clubsList.map((club) => (
          <div key={club.id} className="col-span-3">
            <ClubCard club={club} />
          </div>
        ))}
      </div>
    </>
  );
};
