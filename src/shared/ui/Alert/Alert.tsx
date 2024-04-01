import { classNames } from "@/shared/lib/classNames";
import { DetailedHTMLProps, FC, ReactNode } from "react";
import { AlertTypes } from "./AlertTypes";

interface IAlertProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  type?: AlertTypes;
  children: ReactNode;
  block?: boolean;
  className?: string;
}

const AlertTypeClasses = {
  [AlertTypes.error]: "bg-red-100 text-red-500",
  [AlertTypes.info]: "bg-gray-100 text-gray-600",
};

export const Alert: FC<IAlertProps> = ({
  type = AlertTypes.info,
  children,
  block = true,
  className,
  ...props
}) => {
  return (
    <div
      className={classNames(
        "m-0 py-1 px-3 rounded-xl",
        {
          "inline-block": !block,
        },
        [AlertTypeClasses[type], className]
      )}
      {...props}
    >
      {children}
    </div>
  );
};
