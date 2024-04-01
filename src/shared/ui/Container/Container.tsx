import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { DetailedHTMLProps, FC } from "react";

const DEFAULT_WIDTH = "100%";

interface IContainerProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  width?: number | string;
}

export const Container: FC<IContainerProps> = ({
  width = DEFAULT_WIDTH,
  className = "",
  ...props
}) => {
  const isMD = useMediaQuery("(min-width: 768px)");

  if (typeof width == "number") {
    width = width + (isMD ? 60 : 20);
  }

  return (
    <div
      className={"px-5 md:px-[30px] w-full mx-auto " + className}
      style={{ maxWidth: width }}
      {...props}
    />
  );
};
