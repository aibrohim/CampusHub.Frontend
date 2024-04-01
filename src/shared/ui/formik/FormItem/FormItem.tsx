import { Form, FormItemProps } from "antd";
import { useField } from "formik";
import { FC } from "react";

interface IFormItemProps extends FormItemProps {
  name: string;
}

export const FormItem: FC<IFormItemProps> = ({ name, ...props }) => {
  const [, meta] = useField(name);

  return (
    <Form.Item
      name={name}
      {...props}
      validateStatus={(meta.touched && meta.error && "error") || ""}
      help={(meta.touched && meta.error) || undefined}
    />
  );
};
