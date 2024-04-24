import { Modal } from "antd";
import { FC } from "react";

import { IModule } from "@/entities/Module";

import { UpdateForm } from "./Form";

interface IUpdateModalProps {
  module: IModule;
  open: boolean;
  onClose: () => void;
}

export const UpdateModal: FC<IUpdateModalProps> = ({
  module,
  open,
  onClose,
}) => {
  return (
    <Modal open={open} onCancel={onClose} title="Update Module" footer={null}>
      <UpdateForm module={module} onUpdate={onClose} />
    </Modal>
  );
};
