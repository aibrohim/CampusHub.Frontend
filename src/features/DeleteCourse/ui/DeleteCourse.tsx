import { useDeleteCourseMutation } from "@/entities/Course";
import { IconTrash } from "@tabler/icons-react";
import { Button, Popconfirm, message } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface IDeleteCourseProps {
  courseId: string;
}

export const DeleteCourse: FC<IDeleteCourseProps> = ({ courseId }) => {
  const [deleteCourse] = useDeleteCourseMutation();
  const navigate = useNavigate();

  const handleDeleteConfirm = () =>
    deleteCourse(courseId)
      .unwrap()
      .then(() => {
        message.success("Course successfully deleted!");
        navigate("/courses");
      });

  return (
    <Popconfirm
      title="Delete the course"
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
