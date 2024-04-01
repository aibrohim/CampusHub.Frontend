import { FC, ReactNode } from "react";

interface IErrorTextProps {
  children: ReactNode;
}

export const ErrorText: FC<IErrorTextProps> = ({ children }) => {
  return (
    <p className={"m-0 bg-red-100 text-red-500 py-1 px-3 rounded-full "}>
      {children}
    </p>
  );
};
