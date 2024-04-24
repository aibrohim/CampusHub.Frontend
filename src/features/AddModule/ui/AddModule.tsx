import { PlusCircleFilled } from "@ant-design/icons";
import { Button, Card } from "antd";
import { FC, useState } from "react";
import { AddModal } from "./Modal";

interface IAddModuleProps {
  courseId: string;
}

export const AddModule: FC<IAddModuleProps> = ({ courseId }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Card>
      <Button type="default" block onClick={() => setOpen(true)}>
        <PlusCircleFilled />
      </Button>
      <AddModal
        courseId={courseId}
        open={open}
        onClose={() => setOpen(false)}
      />
    </Card>
  );
};
