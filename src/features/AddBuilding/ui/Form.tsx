import { Form } from "antd";
import { Formik } from "formik";
import { FC } from "react";

import { FormItem } from "@/shared/ui/formik/FormItem";
import { Input } from "@/shared/ui/formik/Input";
import { SubmitButton } from "@/shared/ui/formik/SubmitButton";

interface IFormState {
  name: string;
}

interface IAddFormProps {
  onAdd: () => void;
}

const initialValues: IFormState = {
  name: "",
};

export const AddForm: FC<IAddFormProps> = ({ onAdd }) => {
  const handleFormSubmit = (values: IFormState) => {
    console.log(values);

    onAdd();
  };

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
