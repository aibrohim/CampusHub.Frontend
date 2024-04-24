import { Modal } from "antd";
import { FC } from "react";

import { IGroup } from "@/entities/Group";

import { UpdateForm } from "./Form";

interface IUpdateModalProps {
  group: IGroup;
  open: boolean;
  onClose: () => void;
}

export const UpdateModal: FC<IUpdateModalProps> = ({
  group,
  open,
  onClose,
}) => {
  return (
    <Modal open={open} onCancel={onClose} title="Update Group" footer={null}>
      <UpdateForm group={group} onUpdate={onClose} />
    </Modal>
  );
};
