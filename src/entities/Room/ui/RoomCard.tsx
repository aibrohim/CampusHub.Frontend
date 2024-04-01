import { Card, Typography } from "antd";
import { FC } from "react";

import { IRoom } from "../types/IRoom";

interface IRoomCardProps {
  room: IRoom;
}

export const RoomCard: FC<IRoomCardProps> = ({ room }) => {
  return (
    <Card>
      <Typography.Title level={3} className="!my-0">
        {room.name}
      </Typography.Title>
    </Card>
  );
};
