import { Modal } from "antd";
import { FC } from "react";

import { ICourse } from "@/entities/Course";

import { UpdateForm } from "./Form";

interface IUpdateModalProps {
  course: ICourse;
  open: boolean;
  onClose: () => void;
}

export const UpdateModal: FC<IUpdateModalProps> = ({
  course,
  open,
  onClose,
}) => {
  return (
    <Modal open={open} onCancel={onClose} title="Update Course" footer={null}>
      <UpdateForm course={course} onUpdate={onClose} />
    </Modal>
  );
};
