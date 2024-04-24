import { IGroup, useDeleteGroupMutation } from "@/entities/Group";
import { IconTrash } from "@tabler/icons-react";
import { Button, Popconfirm, message } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface IDeleteGroupProps {
  group: IGroup;
}

export const DeleteGroup: FC<IDeleteGroupProps> = ({ group }) => {
  const [deleteGroup] = useDeleteGroupMutation();
  const navigate = useNavigate();

  const handleDeleteConfirm = () =>
    deleteGroup({ groupId: group.id, courseId: group.course.id })
      .unwrap()
      .then(() => {
        message.success("Group successfully deleted!");
        navigate(`/course/${group.course.id}/groups`);
      });

  return (
    <Popconfirm
      title="Delete the group"
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
