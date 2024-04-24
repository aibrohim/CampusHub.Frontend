import { Card, Typography } from "antd";
import { FC } from "react";

import { IGroup } from "../types/IGroup";
import { Link } from "react-router-dom";

interface IGroupCardProps {
  group: IGroup;
}

export const GroupCard: FC<IGroupCardProps> = ({ group }) => {
  return (
    <Link to={`/group/${group.id}`}>
      <Card>
        <Typography.Text className="!my-0">{group.name}</Typography.Text>
      </Card>
    </Link>
  );
};
