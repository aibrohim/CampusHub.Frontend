import { IconEdit } from "@tabler/icons-react";
import { Button } from "antd";
import { FC, useState } from "react";

import { IModule } from "@/entities/Module";

import { UpdateModal } from "./Modal";

interface IUpdateModuleProps {
  module: IModule;
}

export const UpdateModule: FC<IUpdateModuleProps> = ({ module }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <Button type="default" onClick={() => setOpen(true)}>
        <IconEdit />
      </Button>
      <UpdateModal module={module} open={open} onClose={() => setOpen(false)} />
    </div>
  );
};
