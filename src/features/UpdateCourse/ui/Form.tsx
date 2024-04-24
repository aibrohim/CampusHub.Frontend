import { Form } from "antd";
import { Formik } from "formik";
import { FC } from "react";

import { ICourse, useUpdateCourseMutation } from "@/entities/Course";

import { FormItem } from "@/shared/ui/formik/FormItem";
import { Input } from "@/shared/ui/formik/Input";
import { SubmitButton } from "@/shared/ui/formik/SubmitButton";

interface IFormState {
  name: string;
}

interface IUpdateFormProps {
  course: ICourse;
  onUpdate: () => void;
}

export const UpdateForm: FC<IUpdateFormProps> = ({ onUpdate, course }) => {
  const [updateCourse] = useUpdateCourseMutation();

  const handleFormSubmit = (values: IFormState) =>
    updateCourse({
      id: course.id,
      name: values.name,
    })
      .unwrap()
      .then(() => onUpdate());

  return (
    <Formik onSubmit={handleFormSubmit} initialValues={{ name: course.name }}>
      <Form>
        <FormItem name="name">
          <Input name="name" placeholder="Building name" />
        </FormItem>
        <SubmitButton>Update</SubmitButton>
      </Form>
    </Formik>
  );
};
