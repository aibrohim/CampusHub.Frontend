import { Card, Typography } from "antd";
import { FC } from "react";

import { IModule } from "../types/IModule";
import { Link } from "react-router-dom";

interface IModuleCardProps {
  module: IModule;
}

export const ModuleCard: FC<IModuleCardProps> = ({ module }) => {
  return (
    <Link to={`/module/${module.id}/assessments`}>
      <Card>
        <Typography.Text className="!my-0">{module.name}</Typography.Text>
      </Card>
    </Link>
  );
};
