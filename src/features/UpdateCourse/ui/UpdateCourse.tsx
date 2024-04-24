import { IconEdit } from "@tabler/icons-react";
import { Button } from "antd";
import { FC, useState } from "react";

import { ICourse } from "@/entities/Course";

import { UpdateModal } from "./Modal";

interface IUpdateCourseProps {
  course: ICourse;
}

export const UpdateCourse: FC<IUpdateCourseProps> = ({ course }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <Button type="default" onClick={() => setOpen(true)}>
        <IconEdit />
      </Button>
      <UpdateModal course={course} open={open} onClose={() => setOpen(false)} />
    </div>
  );
};
