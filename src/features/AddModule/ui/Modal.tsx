import { Modal } from "antd";
import { FC } from "react";
import { AddForm } from "./Form";

interface IAddModalProps {
  courseId: string;
  open: boolean;
  onClose: () => void;
}

export const AddModal: FC<IAddModalProps> = ({ courseId, open, onClose }) => {
  return (
    <Modal open={open} onCancel={onClose} title="Add Module" footer={null}>
      <AddForm courseId={courseId} onAdd={onClose} />
    </Modal>
  );
};
