import { Button, Card, message } from "antd";
import { FC } from "react";

import { useForgotPasswordMutation } from "../model/api/forgotPasswordApi";

interface IForgotPasswordSuccessProps {
  email: string;
}

export const ForgotPasswordSuccess: FC<IForgotPasswordSuccessProps> = ({
  email,
}) => {
  const [sendEmail, { isLoading }] = useForgotPasswordMutation();

  const handleResendClick = () =>
    sendEmail({ email })
      .unwrap()
      .then(() =>
        message.success("Password recovery link resent to the email!")
      )
      .catch(() => {});

  return (
    <>
      <Card className="bg-[#f5f7f6] p-6 mb-6 text-lg text-center">
        If your account is active then a password reset link will be emailed to
        you in a few minutes. If you are still having trouble, please contact
        us.
      </Card>
      <p className="m-0 text-sm text-gray-500 text-center">
        Didn’t get an email?{" "}
        <Button
          loading={isLoading}
          disabled={isLoading}
          type="text"
          size="small"
          className="text-sm font-normal"
          onClick={handleResendClick}
        >
          Click to resend
        </Button>
      </p>
    </>
  );
};
