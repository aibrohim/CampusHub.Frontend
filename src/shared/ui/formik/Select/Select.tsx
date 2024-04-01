import { Select as AntdSelect, SelectProps } from "antd";
import { useField } from "formik";
import { FC } from "react";

interface ISelectProps extends SelectProps {
  name: string;
}

export const Select: FC<ISelectProps> = ({ name, ...props }) => {
  const [{ value, onChange, ...fieldProps }] = useField(name);

  return (
    <AntdSelect
      {...props}
      value={value}
      onChange={(value) => onChange({ target: { name, value } })}
      {...fieldProps}
    />
  );
};
