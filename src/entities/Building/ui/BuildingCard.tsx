import { Card, Typography } from "antd";
import { FC } from "react";

import { IBuilding } from "../types/IBuilding";
import { Link } from "react-router-dom";

interface IBuildingCardProps {
  building: IBuilding;
}

export const BuildingCard: FC<IBuildingCardProps> = ({ building }) => {
  return (
    <Link to="/building/single/rooms">
      <Card>
        <Typography.Title level={3} className="!my-0">
          {building.name}
        </Typography.Title>
      </Card>
    </Link>
  );
};
