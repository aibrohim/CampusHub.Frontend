import { Button, ButtonProps } from "antd";
import { useFormikContext } from "formik";
import { FC, MouseEvent } from "react";

interface ISubmitButtonProps extends ButtonProps {}

export const SubmitButton: FC<ISubmitButtonProps> = (props) => {
  const { handleSubmit, isSubmitting } = useFormikContext();

  const handleClick = (evt: MouseEvent<HTMLElement>) => {
    handleSubmit();

    if (props.onClick) {
      props.onClick(evt);
    }
  };

  return (
    <Button
      disabled={isSubmitting}
      loading={isSubmitting}
      {...props}
      type={props.type || "primary"}
      onClick={handleClick}
    />
  );
};
