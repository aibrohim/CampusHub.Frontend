import { Form, message } from "antd";
import { Formik, FormikHelpers } from "formik";
import { FC } from "react";

import { Input } from "@/shared/ui/formik/Input";
import { FormItem } from "@/shared/ui/formik/FormItem";

import { IFormSchema } from "../types/IFormSchema";
import { validationSchema } from "../config/validationSchema";
import { useForgotPasswordMutation } from "../model/api/forgotPasswordApi";
import { SubmitButton } from "@/shared/ui/formik/SubmitButton";

const initialValues: IFormSchema = {
  email: "",
};

interface IForgotPasswordProps {
  onMailSent?: (mail: string) => void;
}

export const ForgotPassword: FC<IForgotPasswordProps> = ({ onMailSent }) => {
  const [forgotPassword] = useForgotPasswordMutation();

  const handleFormSubmit = (
    values: IFormSchema,
    formikHelpers: FormikHelpers<IFormSchema>
  ) => {
    forgotPassword(values)
      .unwrap()
      .then(() => {
        message.success("Password recovery link sent to the email!");
        if (onMailSent) {
          onMailSent(values.email);
        }
      })
      .catch(() => {})
      .finally(() => formikHelpers.setSubmitting(false));
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <Form layout="vertical">
        <FormItem name="email" label="Email">
          <Input name="email" type="text" placeholder="Enter your email" />
        </FormItem>
        <SubmitButton block type="primary">
          Send Reset Link
        </SubmitButton>
      </Form>
    </Formik>
  );
};
