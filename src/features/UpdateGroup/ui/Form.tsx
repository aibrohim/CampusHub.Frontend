import { Form } from "antd";
import { Formik } from "formik";
import { FC } from "react";

import { IGroup, useUpdateGroupMutation } from "@/entities/Group";

import { FormItem } from "@/shared/ui/formik/FormItem";
import { Input } from "@/shared/ui/formik/Input";
import { SubmitButton } from "@/shared/ui/formik/SubmitButton";

interface IFormState {
  name: string;
}

interface IUpdateFormProps {
  group: IGroup;
  onUpdate: () => void;
}

export const UpdateForm: FC<IUpdateFormProps> = ({ onUpdate, group }) => {
  const [updateGroup] = useUpdateGroupMutation();

  const handleFormSubmit = (values: IFormState) =>
    updateGroup({
      id: group.id,
      name: values.name,
      courseId: group.course.id,
    })
      .unwrap()
      .then(() => onUpdate());

  return (
    <Formik onSubmit={handleFormSubmit} initialValues={{ name: group.name }}>
      <Form>
        <FormItem name="name">
          <Input name="name" placeholder="Building name" />
        </FormItem>
        <SubmitButton>Update</SubmitButton>
      </Form>
    </Formik>
  );
};
