import { Form } from "antd";
import { Formik } from "formik";
import { FC } from "react";

import { useAddGroupMutation } from "@/entities/Group";

import { FormItem } from "@/shared/ui/formik/FormItem";
import { Input } from "@/shared/ui/formik/Input";
import { SubmitButton } from "@/shared/ui/formik/SubmitButton";

interface IFormState {
  name: string;
}

interface IAddFormProps {
  onAdd: () => void;
  courseId: string;
}

const initialValues: IFormState = {
  name: "",
};

export const AddForm: FC<IAddFormProps> = ({ courseId, onAdd }) => {
  const [addGroup] = useAddGroupMutation();

  const handleFormSubmit = (values: IFormState) =>
    addGroup({
      courseId: courseId,
      ...values,
    })
      .unwrap()
      .then(() => onAdd());

  return (
    <Formik onSubmit={handleFormSubmit} initialValues={initialValues}>
      <Form>
        <FormItem name="name">
          <Input name="name" placeholder="Building name" />
        </FormItem>
        <SubmitButton>Create</SubmitButton>
      </Form>
    </Formik>
  );
};
