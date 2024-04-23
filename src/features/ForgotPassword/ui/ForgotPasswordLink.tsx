import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

interface IForgotPasswordLinkProps extends LinkProps {}

export const ForgotPaswordLink: FC<IForgotPasswordLinkProps> = ({
  className,
  ...props
}) => {
  return (
    <Link
      className={
        "text-right text-sm font-semibold text-gray-700 hover:text-gray-700 " +
        className
      }
      {...props}
    >
      Forgot password?
    </Link>
  );
};
