import { Input as AntdInput, InputProps } from "antd";
import { useField } from "formik";
import { FC } from "react";

interface IInputProps extends InputProps {
  name: string;
}

export const InputPassword: FC<IInputProps> = ({ name, ...props }) => {
  const [field] = useField(name);

  return <AntdInput.Password {...props} {...field} />;
};
