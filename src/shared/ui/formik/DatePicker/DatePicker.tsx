import { useField } from "formik";
import { FC } from "react";

import dayjs from "dayjs";

import { DatePicker as SharedDatePicker, DatePickerProps } from "antd";

type IDatePickerProps = DatePickerProps & {
  name: string;
};

export const DatePicker: FC<IDatePickerProps> = ({ name, ...props }) => {
  const [{ onChange, ...field }] = useField(name);

  return (
    <SharedDatePicker
      {...props}
      {...field}
      onOk={(date: dayjs.Dayjs) => onChange({ target: { name, value: date } })}
      allowClear={false}
      onSelect={(date: dayjs.Dayjs) =>
        onChange({ target: { name, value: date } })
      }
    />
  );
};
