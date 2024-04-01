import { Typography } from "antd";

import { IRoom, RoomCard } from "@/entities/Room";
import { AddRoom } from "@/features/AddRoom";

const roomsList: IRoom[] = [
  {
    id: 1,
    name: "108",
  },
  {
    id: 2,
    name: "109",
  },
  {
    id: 3,
    name: "110",
  },
  {
    id: 4,
    name: "111",
  },
  {
    id: 3,
    name: "205",
  },
  {
    id: 3,
    name: "206",
  },
];

export const Rooms = () => {
  return (
    <>
      <Typography.Title>Building - Rooms</Typography.Title>

      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-2">
          <AddRoom />
        </div>
        {roomsList.map((room) => (
          <div key={room.id} className="col-span-2">
            <RoomCard room={room} />
          </div>
        ))}
      </div>
    </>
  );
};
