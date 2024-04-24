import { Form } from "antd";
import { Formik } from "formik";
import { FC } from "react";

import { IModule, useUpdateModuleMutation } from "@/entities/Module";

import { FormItem } from "@/shared/ui/formik/FormItem";
import { Input } from "@/shared/ui/formik/Input";
import { SubmitButton } from "@/shared/ui/formik/SubmitButton";

interface IFormState {
  name: string;
}

interface IUpdateFormProps {
  module: IModule;
  onUpdate: () => void;
}

export const UpdateForm: FC<IUpdateFormProps> = ({ onUpdate, module }) => {
  const [updateModule] = useUpdateModuleMutation();

  const handleFormSubmit = (values: IFormState) =>
    updateModule({
      id: module.id,
      name: values.name,
    })
      .unwrap()
      .then(() => onUpdate());

  return (
    <Formik onSubmit={handleFormSubmit} initialValues={{ name: module.name }}>
      <Form>
        <FormItem name="name">
          <Input name="name" placeholder="Building name" />
        </FormItem>
        <SubmitButton>Update</SubmitButton>
      </Form>
    </Formik>
  );
};
