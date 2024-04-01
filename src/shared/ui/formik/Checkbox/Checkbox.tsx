import { Checkbox as AntdCheckbox, CheckboxProps } from "antd";
import { useField } from "formik";
import { FC } from "react";

interface ICheckboxProps extends CheckboxProps {
  name: string;
}

export const Checkbox: FC<ICheckboxProps> = ({ name, ...props }) => {
  const [{ value, ...field }] = useField(name);

  return <AntdCheckbox {...props} checked={value} {...field} />;
};
