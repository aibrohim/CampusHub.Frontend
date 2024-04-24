import { Modal } from "antd";
import { FC } from "react";
import { AddForm } from "./Form";

interface IAddModalProps {
  open: boolean;
  onClose: () => void;
}

export const AddModal: FC<IAddModalProps> = ({ open, onClose }) => {
  return (
    <Modal open={open} onCancel={onClose} title="Add Course" footer={null}>
      <AddForm onAdd={onClose} />
    </Modal>
  );
};
