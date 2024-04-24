import { IconEdit } from "@tabler/icons-react";
import { Button } from "antd";
import { FC, useState } from "react";

import { IGroup } from "@/entities/Group";

import { UpdateModal } from "./Modal";

interface IUpdateGroupProps {
  group: IGroup;
}

export const UpdateGroup: FC<IUpdateGroupProps> = ({ group }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <Button type="default" onClick={() => setOpen(true)}>
        <IconEdit />
      </Button>
      <UpdateModal group={group} open={open} onClose={() => setOpen(false)} />
    </div>
  );
};
