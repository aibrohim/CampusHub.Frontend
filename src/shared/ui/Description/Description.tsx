import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

export interface IDescriptionProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {}

export const Description: FC<IDescriptionProps> = ({
  className = "",
  ...props
}) => {
  return <p className={"text-gray-500 m-0 " + className} {...props} />;
};
