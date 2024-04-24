import { IModule, useDeleteModuleMutation } from "@/entities/Module";
import { IconTrash } from "@tabler/icons-react";
import { Button, Popconfirm, message } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface IDeleteModuleProps {
  module: IModule;
}

export const DeleteModule: FC<IDeleteModuleProps> = ({ module }) => {
  const [deleteModule] = useDeleteModuleMutation();
  const navigate = useNavigate();

  const handleDeleteConfirm = () =>
    deleteModule({ moduleId: module.id })
      .unwrap()
      .then(() => {
        message.success("Module successfully deleted!");
        navigate(`/course/${module.course.id}/modules`);
      });

  return (
    <Popconfirm
      title="Delete the module"
      description="Are you sure to delete?"
      okText="Yes"
      cancelText="Cancel"
      onConfirm={handleDeleteConfirm}
    >
      <Button danger>
        <IconTrash />
      </Button>
    </Popconfirm>
  );
};
