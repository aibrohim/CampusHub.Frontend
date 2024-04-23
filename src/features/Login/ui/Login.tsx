import { Form } from "antd";
import { Formik } from "formik";
import { FC } from "react";
import { useDispatch } from "react-redux";

import { rootApi } from "@/app/providers/Store";

import { tokenService } from "@/entities/Token";

import { FormItem } from "@/shared/ui/formik/FormItem";
import { Input, InputPassword } from "@/shared/ui/formik/Input";
import { SubmitButton } from "@/shared/ui/formik/SubmitButton";

import { TFormState, validationSchema } from "../config/validationSchema";
import { useLoginMutation } from "../model/api/loginApi";

const initialValues: TFormState = {
  email: "",
  password: "",
};

export const Login: FC = () => {
  const dispatch = useDispatch();
  const [login] = useLoginMutation();

  const handleFormSubmit = async (values: TFormState) =>
    login(values)
      .unwrap()
      .then((data) => {
        tokenService.setAccessToken(data.accessToken);
        dispatch(rootApi.util.invalidateTags(["User"]));
      });

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <Form>
        <FormItem name="email">
          <Input name="email" placeholder="bob@wiut.uz" />
        </FormItem>
        <FormItem name="password">
          <InputPassword name="password" placeholder="Hello123#" />
        </FormItem>
        <SubmitButton block>Login</SubmitButton>
      </Form>
    </Formik>
  );
};
