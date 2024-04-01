import { Card, Typography } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";

import { IClub } from "../types/IClub";

interface IClubCardProps {
  club: IClub;
}

export const ClubCard: FC<IClubCardProps> = ({ club }) => {
  return (
    <Link to="/club/single/students">
      <Card>
        <Typography.Text className="!my-0">{club.name}</Typography.Text>
      </Card>
    </Link>
  );
};
