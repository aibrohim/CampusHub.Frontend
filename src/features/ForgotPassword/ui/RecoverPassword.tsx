import { Form, message } from "antd";
import { Formik, FormikHelpers } from "formik";
import { FC } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { FormItem } from "@/shared/ui/formik/FormItem";
import { InputPassword } from "@/shared/ui/formik/Input";
import { SubmitButton } from "@/shared/ui/formik/SubmitButton";

import { resetPasswordValidationSchema } from "../config/resetPasswordValidationSchema";
import { useRecoverPasswordMutation } from "../model/api/forgotPasswordApi";
import { IRecoverFormSchema } from "../types/IRecoverFormSchema";

const initialValues: IRecoverFormSchema = {
  password: "",
};

export const RecoverPassword: FC = () => {
  const [searchParams] = useSearchParams();

  const [recoverPassword] = useRecoverPasswordMutation();

  const navigate = useNavigate();

  const handleFormSubmit = (
    values: IRecoverFormSchema,
    formikHelpers: FormikHelpers<IRecoverFormSchema>
  ) => {
    recoverPassword({
      email: searchParams.get("email") || "",
      newPassword: values.password,
      recoveryToken: searchParams.get("recoveryToken") || "",
    })
      .unwrap()
      .then(() => {
        message.success("Password successfully recovered!");
        navigate("/login");
      })
      .catch((error: { status: number }) => {
        if (error.status == 401) {
          navigate("/forgot-password");
        }
      })
      .finally(() => {
        formikHelpers.setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validationSchema={resetPasswordValidationSchema}
    >
      <Form layout="vertical">
        <FormItem name="password" label="New password">
          <InputPassword name="password" placeholder="Create a new password" />
        </FormItem>
        <SubmitButton type="primary" block>
          Reset Password
        </SubmitButton>
      </Form>
    </Formik>
  );
};
