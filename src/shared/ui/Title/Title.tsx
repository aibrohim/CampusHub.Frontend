import { DetailedHTMLProps, FC, ReactNode } from "react";

interface ITitleProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  children: ReactNode;
}

export const Title: FC<ITitleProps> = ({ className = "", children }) => {
  return (
    <h1 className={"text-3xl font-semibold m-0 " + className}>{children}</h1>
  );
};
