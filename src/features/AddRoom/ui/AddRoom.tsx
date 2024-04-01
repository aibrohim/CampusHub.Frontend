import { PlusCircleFilled } from "@ant-design/icons";
import { Button, Card } from "antd";
import { FC, useState } from "react";
import { AddModal } from "./Modal";

export const AddRoom: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Card>
      <Button type="default" block onClick={() => setOpen(true)}>
        <PlusCircleFilled />
      </Button>
      <AddModal open={open} onClose={() => setOpen(false)} />
    </Card>
  );
};
