import { Card, Typography } from "antd";
import { FC } from "react";

import { IModule } from "../types/IModule";

interface IModuleCardProps {
  module: IModule;
}

export const ModuleCard: FC<IModuleCardProps> = ({ module }) => {
  return (
    <Card>
      <Typography.Text className="!my-0">{module.name}</Typography.Text>
    </Card>
  );
};
